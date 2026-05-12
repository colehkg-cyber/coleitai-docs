---
sidebar_position: 8
---

# 8강. 환경변수(.env) 설정

> **결과물**: API 키들이 안전하게 연결된 상태

---

## 환경변수가 뭐예요?

`.env`는 **"비밀 메모장 파일"** 입니다.

- 블로그 코드는 GitHub에 올라가지만 → 누구나 볼 수 있음
- 그런데 Turso 토큰·Gemini 키 같은 비밀번호도 어딘가에 적어둬야 함
- 그래서 `.env`에만 적고, **이 파일은 GitHub에 안 올리도록** 따로 설정합니다.

---

## 📋 Claude에게 통째로 맡기기

Claude Code(`>` 프롬프트)에 아래 복붙.
**대괄호 `[ ]` 안만** 본인이 메모장에 적어둔 값으로 바꾸세요.

```
프로젝트 루트에 .env 파일을 만들어서 아래 값들을 정확히 채워줘.

NEXT_PUBLIC_SITE_URL=https://[내깃허브사용자이름]-my-blog.vercel.app
TURSO_DATABASE_URL=[Turso DB URL 붙여넣기]
DATABASE_AUTH_TOKEN=[Turso 토큰 붙여넣기]
GEMINI_API_KEY=[Gemini API 키 붙여넣기]
ADMIN_PASSWORD=[내가 정한 8자 이상 비밀번호]

만들고 나서 아래 3가지를 자동으로 확인하고 한국어로 보고해줘:

1. .env 파일이 제대로 만들어졌는지 (값이 비어있지 않은지)
2. .gitignore 파일에 .env가 포함되어 있는지 (없으면 추가)
3. git status로 .env가 추적되지 않는지 (GitHub에 안 올라가도록)

문제가 있으면 자동으로 고쳐줘.
```

---

## 이게 끝입니다

Claude가 자동으로:
- ✅ `.env` 파일 생성
- ✅ 값이 비어있는지 검증
- ✅ `.gitignore`에 `.env` 추가
- ✅ `git status`로 노출 위험 검사
- ✅ 결과를 한국어로 보고

:::tip 왜 NEXT_PUBLIC_SITE_URL은 지금 가짜 값?
Vercel 배포(9강)를 해야 진짜 주소가 나옵니다. 일단 임시값으로 넣고 배포 후 바꿉니다.
:::

---

## 🚨 사고 대응

Claude가 ".env가 git에 추적되고 있다"고 보고하면 **즉시 멈추고** 이렇게:

```
.env가 추적되고 있어. 안전하게 추적 해제하고,
Turso 토큰을 새로 발급해야 하는지도 알려줘.
```

---

:::info 다음 강의
**[9강. Vercel 배포 →](./09-vercel-deploy.md)** — 드디어 인터넷에 공개합니다.
:::
