---
sidebar_position: 9
---

# 9강. Vercel 배포

> **소요 시간**: 15분
> **결과물**: 인터넷 주소가 있는 내 블로그

---

## 이 강의에서 하는 일

GitHub에 올린 내 블로그 코드를 → **Vercel이 자동으로 인터넷에 올려줍니다.**

이 단계는 **브라우저에서 직접** 합니다 (Claude Code 아님).

---

## Step 1. Vercel 프로젝트 연결 (5분)

1. https://vercel.com 접속 → 로그인
2. 오른쪽 위 **"Add New..."** → **"Project"** 클릭
3. **"Import Git Repository"** 섹션에서 `my-blog` 저장소 찾기
4. `my-blog` 옆 **"Import"** 클릭

---

## Step 2. 환경변수 입력 (5분)

이게 가장 중요한 단계!

화면 중간 **"Environment Variables"** 섹션을 펼치고, 메모장에 적어둔 값들을 하나씩 입력:

| Key | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | (일단 비워두기) |
| `TURSO_DATABASE_URL` | Turso DB URL |
| `DATABASE_AUTH_TOKEN` | Turso 토큰 (eyJ...) |
| `GEMINI_API_KEY` | Gemini 키 (AIzaSy...) |
| `ADMIN_PASSWORD` | 내가 정한 비밀번호 |

:::warning Key 이름은 정확히 일치해야 합니다
대소문자, 언더바(_) 다 정확히. 오타 1개라도 있으면 작동 안 합니다.
:::

---

## Step 3. 첫 배포 (3분)

1. **"Deploy"** 버튼 클릭
2. 2~3분 대기 (Vercel이 빌드 중)
3. 🎉 축하 화면 나오면 → 도메인 표시됨:
   `https://my-blog-내아이디.vercel.app`

---

## Step 4. NEXT_PUBLIC_SITE_URL 값 채우기 (1분)

위 도메인을 메모장에 적고 → 환경변수에도 추가합니다.

1. Vercel 대시보드 → **Settings** → **Environment Variables**
2. **"Add New"** 클릭
3. Key: `NEXT_PUBLIC_SITE_URL`
4. Value: 방금 받은 도메인 (예: `https://my-blog-jkim.vercel.app`)
5. **"Save"** 클릭

---

## Step 5. DB 초기화 (첫 배포 후 1회만, 1분)

브라우저에서 접속:
```
https://my-blog-내아이디.vercel.app/admin/setup
```

화면 안내에 따라 **"Initialize Database"** 클릭 → DB 테이블이 자동 생성됩니다.

---

## ✅ 완료 확인

`https://my-blog-내아이디.vercel.app` 접속 → 블로그가 뜨면 성공! 🎉

메모장 업데이트:
```
[v] Vercel 사이트 URL : https://my-blog-내아이디.vercel.app
```

---

## 🚨 빌드 실패했다면

Vercel 빌드 로그에 빨간 에러가 떴다면 Claude에게:

```
Vercel 빌드 로그에 이런 에러가 났어:
[에러 메시지 그대로 붙여넣기]

원인 설명하고 바로 고쳐줘. 한국어로 보고해줘.
```

---

:::info 다음 강의 (마지막!)
**[10강. 자동배포 확인 →](./10-auto-deploy.md)** — push → 자동 업데이트가 진짜 되는지 확인합니다 (5분).
:::
