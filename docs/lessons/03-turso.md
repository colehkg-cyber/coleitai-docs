---
sidebar_position: 3
---

# 3강. Turso DB 만들기 + 토큰 받기

> **결과물**: 블로그 글이 저장될 DB 주소 + 토큰

---

## Turso가 뭐예요?

블로그 글, 조회수, 카테고리 같은 데이터를 저장하는 **온라인 엑셀** 같은 곳.
9GB까지 무료 (텍스트만 채우면 평생 못 채움).

---

## Step 1. 가입

1. https://app.turso.tech 접속
2. **"Sign in with GitHub"** 클릭 → Authorize

---

## Step 2. DB 만들기

1. **"Create Database"** 버튼 클릭
2. 입력값:
   - **Name**: `my-blog-db`
   - **Group**: `default` (그대로)
   - **Region**: `Tokyo` 선택 (한국에서 가장 빠름)
3. **"Create Database"** 클릭

---

## Step 3. DB 주소 복사

1. 방금 만든 DB 이름 클릭 → 상세 페이지 열림
2. 상단에 **"Database URL"** 표시됨
   - 모양: `libsql://my-blog-db-내아이디.turso.io`
3. 옆에 📋 복사 버튼 클릭
4. **메모장에 붙여넣기**

---

## Step 4. 토큰 발급 ⭐ 가장 중요

1. 같은 페이지에서 **"Generate Token"** 클릭
2. 설정값:
   - **Expiration**: `Never`
   - **Permissions**: `Read & Write`
3. **"Create Token"** 클릭
4. `eyJ...`로 시작하는 **엄청 긴 문자열**이 한 번 나옵니다.
5. **즉시 메모장에 복사하세요.**

:::danger 토큰은 딱 한 번만 보여줍니다
페이지 새로고침하면 사라집니다. 못 복사했으면 새로 발급해야 해요.
:::

---

## ⏸ 메모장 체크

```
[v] Turso DB URL : libsql://my-blog-db-...turso.io
[v] Turso 토큰   : eyJ... (긴 문자열)
```

:::danger 절대 남한테 보여주지 마세요
이 토큰이 새면 누가 내 블로그 글을 다 삭제할 수 있어요. 카톡·블로그·이메일에 올리지 마세요.
:::

---

:::info 다음 강의
**[4강. Gemini API + Claude Pro →](./04-gemini-claude.md)** — AI 키 발급 + Claude 구독.
:::
