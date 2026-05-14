---
sidebar_position: 8
---

# Step 8. Vercel Cron — 매시간 자동 글 발행

> **이 단계에서 할 일**
> Vercel Cron이 **매시간 키워드 1개를 골라 AI로 글을 만들고 즉시 발행**하도록 설정합니다.
> 끝나면 키워드만 입력해두면 사람이 안 건드려도 하루에 글이 자동으로 늘어납니다.

---

## 🎯 원하는 동작

```
매일 오전 9시, 10시, 11시, ..., 밤 9시
   ↓
Vercel Cron이 GET /api/cron/generate-post 호출
   ↓
DB의 keyword 테이블에서 usageCount 가장 적은 키워드 1개 선택
   ↓
Gemini로 1500~2500자 글 생성 (system-instruction 적용)
   ↓
영문 슬러그 + Unsplash 썸네일 자동 생성
   ↓
DB에 status=PUBLISHED + publishedAt=now() 로 저장
   ↓
keyword.usageCount += 1 (다음 시간엔 다른 키워드)
   ↓
홈 화면 즉시 갱신 (revalidatePath)
```

**결과**: 하루 **13편** (9시 ~ 21시, 매시간 1편).

---

## 작동 구조

| 도구 | 역할 |
|---|---|
| `vercel.json` | cron 스케줄 정의 |
| `/api/cron/generate-post` | 실제로 글 만들고 저장하는 엔드포인트 |
| `keyword` 테이블 | "이 키워드들로 글 써줘" 목록. 어드민에서 관리 |
| Gemini API | 글 본문 생성 |
| Unsplash API | 썸네일 자동 선택 |

---

## 1. vercel.json 확인

[`vercel.json`](https://github.com/colehkg-cyber/coleitai-blog/blob/main/vercel.json) 파일에 cron 스케줄이 이미 등록되어 있습니다:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "pnpm install",
  "crons": [
    {
      "path": "/api/cron/generate-post",
      "schedule": "0 9-21 * * *"
    }
  ]
}
```

### Cron 표현식 cheat sheet

| 빈도 | 표현식 | 의미 |
|---|---|---|
| 매일 오전 9시 | `0 9 * * *` | 매일 1편 |
| **9~21시 매시간 ⭐** | `0 9-21 * * *` | **매일 13편 (기본값)** |
| 매일 9시·21시 | `0 9,21 * * *` | 매일 2편 |
| 평일만 9시 | `0 9 * * 1-5` | 주 5편 |
| 매주 월요일 9시 | `0 9 * * 1` | 주 1편 |
| 매시간 (테스트) | `0 * * * *` | 시간당 1편 |

> 💡 **시간대 주의**: Vercel Cron은 **UTC** 기준. 한국 시간 9시 = UTC 0시. 표현식을 한국 시간 9시~21시로 맞추려면 `0 0-12 * * *`. 그러나 우리 템플릿은 KST 기준으로 운영하는 학생을 위해 `0 9-21 * * *`로 둡니다. 정확한 한국 시간 발행이 필요하면 `0 0-12 * * *`로 수정.

---

## 2. Vercel Hobby 플랜 제한 확인

| 항목 | Hobby (무료) | Pro |
|---|---|---|
| cron job 개수 | **2개** | 40개 |
| 호출 빈도 | 매시간 가능 | 매분 가능 |
| 함수 실행 시간 | **월 100 GB-hours** | 더 많음 |

13편/일 × 글당 ~30초 함수 실행 = 월 ~3.5시간 → **무료 한도 안에 충분히 들어옴**.

> ✅ 결론: Hobby 플랜에서 매시간 자동 발행 **가능**.

---

## 3. 환경 변수 확인

Vercel 프로젝트 → **Settings** → **Environment Variables** 에서 다음이 모두 등록되어 있어야 합니다:

| Key | 필수? | 설명 |
|---|---|---|
| `GEMINI_API_KEY` | ✅ 필수 | 글 생성용 |
| `TURSO_DATABASE_URL` | ✅ 필수 | DB 연결 |
| `DATABASE_AUTH_TOKEN` | ✅ 필수 | DB 인증 |
| `NEXT_PUBLIC_SITE_URL` | ✅ 필수 | sitemap 갱신용 |
| `ADMIN_PASSWORD` | ✅ 필수 | 어드민 로그인 (cron과는 무관하지만 어드민 작업용) |
| `UNSPLASH_ACCESS_KEY` | ⚪ 권장 | 자동 썸네일 |
| `CRON_SECRET` | ⚪ 선택 | 수동 POST 테스트 시 인증용. Vercel 자체 cron 호출에는 불필요 |

---

## 4. 키워드 등록 (필수!)

cron이 글을 만들려면 **재료가 되는 키워드**가 DB에 있어야 합니다.

1. 블로그 `/admin` 로그인
2. 좌측 메뉴 → **키워드 관리** (`/admin/keywords`)
3. 키워드 추가 방법 둘 중 하나:
   - **CSV 업로드**: 한 줄에 키워드 하나씩 작성한 파일 업로드
   - **직접 입력**: 입력창에 콤마/줄바꿈으로 구분해서 입력
4. 카테고리는 선택 (없어도 OK)

### 권장 키워드 분량

| 운영 스타일 | 키워드 개수 | 이유 |
|---|---|---|
| 양 폭격형 | **400개+** | 13편/일 × 30일 = 390편 → 한 달 분량 |
| 균형형 (추천) | **150개** | 2주 정도 분량. 매주 보충 |
| 보수 운영 | **50개** | 키워드 반복 발행되어도 OK인 경우 |

> 💡 키워드가 다 떨어지면? cron은 가장 적게 사용된 키워드를 다시 고릅니다 (`usageCount` 기준). 같은 키워드로 다른 각도의 글이 또 만들어집니다.

---

## 5. 배포 & 활성화

`vercel.json`이 변경된 커밋을 main에 push하면 Vercel이 **자동으로 cron 등록**합니다.

수동 확인:

1. Vercel 프로젝트 → **Settings** → **Cron Jobs**
2. `/api/cron/generate-post — 0 9-21 * * *` 항목이 보이면 OK
3. **Run** 버튼으로 즉시 테스트 가능

---

## 6. 동작 확인 (즉시 테스트)

cron이 실제로 글을 만드는지 확인하는 3가지 방법:

### 방법 A. Vercel 대시보드에서 Run

1. Vercel → **Settings** → **Cron Jobs**
2. 우리 cron 옆 **Run** 버튼 클릭
3. **Logs** 탭에서 실행 결과 확인 (status 200 = 성공)
4. 블로그 홈에서 새 글 노출 확인

### 방법 B. curl로 호출

```bash
# CRON_SECRET을 환경변수에 등록한 경우만 가능
curl -X POST https://YOUR-SITE.vercel.app/api/cron/generate-post \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

응답 예시:
```json
{
  "success": true,
  "keyword": "mac mini vs macbook",
  "post": {
    "id": "clxxx...",
    "title": "맥미니 vs 맥북, 2025년 어떤 걸 선택해야 할까?",
    "slug": "mac-mini-vs-macbook-buying-guide-2025",
    "publishedAt": "2026-05-14T10:00:00.000Z"
  }
}
```

### 방법 C. 다음 정각까지 기다리기

가장 정확한 테스트. 9~21시 사이 다음 정각이 지나면 자동으로 글 1편 추가되어야 함.

---

## 7. 스케줄 변경 방법

매시간이 너무 많으면, 또는 더 늘리고 싶으면:

Claude Code에서 한 줄:

```
vercel.json의 cron schedule을 "0 9,15,21 * * *"로 바꿔줘.
(매일 9시·15시·21시, 하루 3편 발행)
변경 후 git push까지.
```

또는 직접 `vercel.json` 편집 후 push.

> ⚠️ **Hobby 플랜은 cron job 개수 2개 제한**. 우리 블로그는 1개만 쓰고 있으므로 여유 1개 있음.

---

## 8. 운영 시나리오 추천

### 시나리오 A. 풀 자동 — 양 폭격형 (게으른 사장님)
- 키워드 **400개** 등록 (한 달 분량)
- 시스템 지침 1회 설정 (`knowledge/system-instruction.md`)
- `vercel.json`: `0 9-21 * * *` (매일 13편)
- 검수 안 함, 매일 글 13편 자동 누적
- **결과**: 단기간에 글 수 폭증, 롱테일 키워드 점령. 단 품질 편차 큼.

### 시나리오 B. 반 자동 — 균형형 ⭐ 추천
- 키워드 **150개** 등록 (2주 분량)
- system-instruction + knowledge 파일 풍부하게
- 매일 13편 자동 발행
- 매일 **30분 검수** (13편 × 2~3분)
- **결과**: 양과 질 모두. 단 검수 시간 매일 필요.

### 시나리오 C. 보수 운영 (퀄리티 우선)
- `vercel.json`: `0 9,15 * * *` (하루 2편)
- 매주 토요일 Claude로 빅 키워드 1편 직접 작성
- **결과**: 양은 적지만 품질 안정.

---

## 자주 묻는 질문

**Q. Gemini 무료 한도 초과되면?**
- 분당 15회, 일일 1,500회. 매시간 13편 = 일 13회 호출 → 100배 여유.
- 만약 초과되면 그 호출만 실패하고 다음 정각에 재시도.

**Q. 같은 키워드로 글이 두 번 만들어지면?**
- 슬러그가 충돌하면 자동으로 `-2`, `-3` suffix 붙임. 글 내용은 Gemini가 매번 새로 작성.

**Q. 중간에 실패하면?**
- Vercel Logs에 에러 기록. 다음 정각에 다시 시도 (cron은 idempotent하게 설계되지 않음에 주의).

**Q. 9~21시 KST가 아니라 UTC인데?**
- Vercel cron은 UTC 기준. 한국시간 9~21시는 UTC 0~12시. 정확하게 맞추려면 `0 0-12 * * *`로 수정.
- 단, 현재 기본값 `0 9-21 * * *`은 UTC 9~21시 = 한국 시간 **18시~다음날 6시**에 발행. 본인 운영 시간대에 맞게 수정 권장.

**Q. cron이 안 도는데?**
- Vercel 대시보드 → Settings → Cron Jobs 에서 등록 확인
- Logs에서 401 떨어지면 인증 문제 (보통 직접 호출 시. Vercel cron은 자동 인증)
- 키워드가 0개면 `{ message: 'No keywords...' }` 반환하고 skip됨

**Q. 글이 너무 비슷해요. 어떻게 다양화?**
- `knowledge/` 폴더에 마크다운 파일 추가 → AI가 그걸 컨텍스트로 사용
- system-instruction.md 톤 변경
- 카테고리별로 키워드 정리

---

## ✅ 체크리스트

- [ ] `vercel.json`에 `crons` 섹션 추가 & push 완료
- [ ] Vercel → Cron Jobs 화면에서 `/api/cron/generate-post` 등록 확인
- [ ] `/admin/keywords`에 키워드 최소 30개 이상 등록
- [ ] `GEMINI_API_KEY`, `UNSPLASH_ACCESS_KEY` 등록 완료
- [ ] Vercel 대시보드 **Run** 버튼으로 즉시 테스트 → 200 OK 확인
- [ ] 블로그 홈에서 새 글 자동 노출 확인
- [ ] 다음 정각에 자동으로 또 1편 늘어나는지 확인

---

## 📝 메모장

| 단어 | 내가 이해한 의미 |
|---|---|
| Cron | |
| 키워드 풀 | |

---

:::info 다음 단계
**[수익화 가이드 →](./monetization.md)** — 자동 발행되는 글에 광고·제휴 링크 붙이기.
:::
