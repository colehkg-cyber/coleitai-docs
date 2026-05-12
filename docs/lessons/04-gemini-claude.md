---
sidebar_position: 4
---

# 4강. Gemini API + Claude Pro

> **소요 시간**: 10분
> **결과물**: Gemini 키 + Claude Pro 구독 (마지막 계정!)

---

## Step 1. Gemini API 키 받기 (5분)

### Gemini가 뭐예요?
구글이 만든 AI. 블로그 글을 자동으로 써줍니다. **카드 등록 없이 무료.**

### 따라하기
1. https://aistudio.google.com 접속
2. Gmail 계정으로 로그인 (없으면 구글 계정 생성)
3. 왼쪽 메뉴에서 **"Get API Key"** 클릭
4. **"Create API Key"** → "Create API key in new project" 선택
5. `AIzaSy...`로 시작하는 키 나옴 → **메모장에 복사**

✅ 카드 묻지도 않습니다.

---

## Step 2. Claude Pro 구독 (5분, 유료 $20/월)

### Claude가 뭐예요?
ChatGPT 경쟁사의 AI. **Claude Code**(터미널 코딩 도구)를 쓰려면 Pro 구독이 필수.

### 따라하기
1. https://claude.ai 접속 → **Sign up** (구글 계정으로 가입 가능)
2. 가입 후 왼쪽 아래 본인 이름 → **Settings → Plans & Billing**
3. **"Upgrade to Pro"** 클릭
4. 카드 정보 입력 → 결제 완료
5. **한 번 로그아웃했다 다시 로그인** (Pro 활성화 확인)

:::tip
- 가입 후 7일 안에 환불 신청 가능. 일단 한 달만 써본다 마음으로 결제 OK.
- ChatGPT Plus 쓰고 있어도 Claude Pro는 별개입니다.
:::

---

## ⏸ 모든 계정 완료 체크

여기까지 오면 **5개 서비스 가입 완료**! 메모장 최종 확인:

```
[v] GitHub 사용자 이름   : jkim-blog 같은 형식
[v] Vercel 가입 완료     : (GitHub 연동)
[v] Turso DB URL        : libsql://my-blog-db-...
[v] Turso 토큰          : eyJ... (긴 문자열)
[v] Gemini API 키       : AIzaSy...
[v] Claude Pro 구독     : 활성화됨
[ ] 관리자 비밀번호      : 8자 이상 본인이 정한 문자열 (지금 정하세요)
```

:::danger 키들 절대 남한테 보여주지 마세요
카톡·블로그·이메일에 올리면 안 됩니다. 새면 누가 내 블로그 멋대로 조작 가능.
:::

---

:::info 다음 강의
**[5강. 템플릿 복사 →](./05-template-copy.md)** — 완성된 블로그 코드를 내 GitHub으로 복사합니다 (5분).
:::
