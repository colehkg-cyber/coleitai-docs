---
sidebar_position: 7
---

# Step 7. Unsplash API — 썸네일 자동 생성

> **이 단계에서 할 일**
> 글을 발행할 때 **무료 고화질 이미지를 자동으로 썸네일로 붙여주는** Unsplash API 키를 발급받아 Vercel에 등록합니다.
> 끝나면 글을 쓰자마자 카톡·페북·구글 검색결과에서 **예쁜 이미지 미리보기**가 자동 노출.

---

## 왜 Unsplash가 필요한가요?

블로그 글에 **썸네일(대표 이미지)** 이 없으면:

- 홈 화면 글 목록이 휑함 (회색 박스만)
- 카톡·페이스북·트위터 공유 시 미리보기 이미지 없음 → **클릭률 30~40% 손실**
- 구글 검색 결과에 이미지 미노출 → CTR 하락

직접 이미지를 매번 만들거나 다운로드하기 번거롭죠.
**Unsplash API**를 연동하면 글 제목의 키워드를 보고 **자동으로 적절한 무료 이미지 1장을 골라 썸네일로 붙여줍니다.**

| 비유 | 실제 |
|---|---|
| 무료 이미지 도서관 | Unsplash |
| 사서 (검색해서 책 골라줌) | Unsplash API |
| 책장에 책 진열 | 블로그에 썸네일 자동 삽입 |

---

## 비용

| 항목 | 한도 | 비용 |
|---|---|---|
| 무료 요청 | **시간당 50회** | **무료** |
| 카드 등록 | **필요 없음** | — |
| 상업적 이용 | **가능** (Unsplash 라이선스) | 무료 |

> 💡 글 1편당 1회 호출이므로, 시간당 50편 발행하지 않는 한 무료 한도로 충분합니다.

---

## 1. Unsplash 가입

[`unsplash.com/developers`](https://unsplash.com/developers) 접속.

1. 우측 상단 **Register as a developer** 또는 **Join free**
2. 이메일·비밀번호로 가입 (또는 Google/Facebook 로그인)
3. 이메일 인증

> ✅ 끝. 카드 등록 없음.

---

## 2. New Application 생성

1. 개발자 페이지에서 **`Your apps`** → **`New Application`** 클릭
2. 약관(Guidelines) 체크박스 **전부 체크** → **Accept terms**
3. 아래 폼 작성:

| 항목 | 입력값 |
|---|---|
| Application name | `my-seo-blog` (자유롭게) |
| Description | `Auto thumbnail for personal Korean SEO blog` 한 줄이면 OK |

4. **Create application** 클릭

> 💡 처음에는 **Demo 모드(시간당 50회)** 로 시작합니다. 그걸로 충분합니다. 운영하면서 늘릴 일 있을 때 Unsplash에 신청해서 Production 모드(시간당 5,000회)로 승격.

---

## 3. Access Key 복사

생성된 앱 화면을 아래로 스크롤 → **`Keys`** 섹션:

```
Access Key
abc123XYZ_여기에_긴_문자열이_있습니다
```

이 **Access Key** 한 줄만 사용합니다. (Secret Key는 우리 블로그에선 안 씀.)

> ⚠️ Access Key도 비밀번호처럼 취급. **GitHub에 절대 올리지 말기.** 환경변수에만.

---

## 4. Vercel에 환경변수로 등록

[`vercel.com`](https://vercel.com) → 내 블로그 프로젝트 → **Settings** → **Environment Variables**

1. **Add New** 클릭
2. 입력:

| 항목 | 값 |
|---|---|
| Key | `UNSPLASH_ACCESS_KEY` |
| Value | (3단계에서 복사한 Access Key) |
| Environments | **Production**, **Preview**, **Development** 전부 체크 |
| Sensitive | ✅ 체크 (선택사항이지만 권장) |

3. **Save**

---

## 5. 재배포 (캐시 비활성화)

환경변수는 **재배포 후에야 적용**됩니다.

1. Vercel 프로젝트 → **Deployments** 탭
2. 가장 최근 배포의 우측 **⋯** 메뉴 → **Redeploy**
3. ⚠️ **`Use existing Build Cache` 체크 해제**
4. **Redeploy** 클릭
5. 빌드 완료 대기 (약 1~3분)

---

## 6. 동작 확인

1. 블로그 `/admin` 로그인
2. **새 글 작성** → AI로 글 생성 → **발행**
3. 홈 화면에서 방금 발행한 글의 **썸네일** 확인

자동 동작 흐름:

```
   글 발행 클릭
        ↓
   ┌─────────────────────────────┐
   │ 제목에서 키워드 추출         │
   │ "Next.js 15 새 기능"        │
   │       ↓                     │
   │ "nextjs", "javascript"      │
   └────────────┬────────────────┘
                ↓
   ┌─────────────────────────────┐
   │  Unsplash API 호출           │
   │  (Access Key + 키워드)        │
   └────────────┬────────────────┘
                ↓
   ┌─────────────────────────────┐
   │ 무료 이미지 1장 자동 선택     │
   │ 1080px, JPEG, 75% 품질       │
   └────────────┬────────────────┘
                ↓
   ┌─────────────────────────────┐
   │  DB에 coverImage URL 저장    │
   │  → 홈/공유 미리보기에 노출    │
   └─────────────────────────────┘
```

---

## Fallback (대체 이미지) — 권장

Unsplash가 실패할 수 있는 경우:

- Access Key 미발급 (이 가이드 안 따른 경우)
- 시간당 50회 초과
- 키워드 매칭 실패
- 일시적 네트워크 오류

이때 자동으로 사이트 기본 OG 이미지(`/public/default-og.png`)가 사용됩니다.

### 기본 이미지 만들기 (5분)

1. [Canva](https://canva.com) 접속 → **사용자 지정 사이즈** → **1200 × 630 px**
2. 사이트 로고 + 슬로건 한 줄 디자인
3. PNG 또는 JPG로 다운로드 (1MB 이내)
4. 파일명 → `default-og.png`
5. Claude Code에 한 줄:

   ```
   default-og.png 파일을 public 폴더에 추가해줘.
   ```

6. 자동 커밋 → Vercel 자동 배포 → 끝

> ⚠️ 이걸 안 만들어두면 Unsplash 실패 시 미리보기 이미지가 **빈 칸**으로 나갑니다.

---

## 자주 묻는 질문

**Q. Unsplash 안 써도 글이 발행되나요?**
- 네. `UNSPLASH_ACCESS_KEY`가 없으면 자동으로 `default-og.png` (또는 OG 자동 생성 이미지)가 사용됩니다.
- 다만 모든 글의 썸네일이 똑같아져서 보기 안 좋음.

**Q. 시간당 50회 넘으면 어떻게 되나요?**
- 그 글만 fallback 이미지로 발행됩니다. 다음 시간이 되면 다시 정상 동작.
- 1시간에 50편 발행할 일은 거의 없으므로 사실상 무제한.

**Q. 이미지가 마음에 안 들어요. 바꿀 수 있나요?**
- 가능. 글 편집 화면 → **고급 설정** → **Cover Image** 칸에 다른 이미지 URL 또는 업로드.

**Q. 한글 제목이라도 잘 작동하나요?**
- 네. 시스템이 제목에서 영문 키워드를 추출하거나, 매핑 테이블(예: "강남" → "seoul")을 통해 검색합니다. (`src/lib/unsplash.ts` 참고)

**Q. Production 모드 신청은 언제?**
- 시간당 50회로 부족할 때만. 보통 처음 1년은 Demo로 충분.
- 신청 시 Unsplash 가이드라인 준수해야 함 (이미지에 사진작가 credit 자동 표시 등 — 우리 템플릿은 자동 처리됨).

---

## ✅ 체크리스트

- [ ] Unsplash 개발자 가입 완료
- [ ] New Application 생성, Access Key 복사 완료
- [ ] Vercel에 `UNSPLASH_ACCESS_KEY` 환경변수 등록
- [ ] **`Use existing Build Cache` 해제하고** 재배포 완료
- [ ] 새 글 발행해서 썸네일 자동 노출 확인
- [ ] `default-og.png` (1200×630) `public/` 폴더에 준비

---

## 📝 메모장

| 단어 | 내가 이해한 의미 |
|---|---|
| | |
| | |

---

:::info 다음 단계
**[관리자 페이지에서 글 쓰기 →](./ai-writing.md)** — 키워드만 입력하면 AI가 글을 자동 생성합니다.
:::
