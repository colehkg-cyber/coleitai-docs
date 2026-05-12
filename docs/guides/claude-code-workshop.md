---
sidebar_position: 2
title: "Step 1.5 Claude Code 실습 가이드"
---

# Claude Code 실습 가이드

> **터미널을 처음 여는 분**을 위한 가이드입니다.\
> Mac, Windows 모두 동일한 흐름으로 진행합니다.

---

## 전체 흐름 (10분)

```
[1] 도구 설치 → [2] 템플릿 복사 → [3] 내 컴퓨터로 가져오기
     ↓
[4] Claude Code 실행 → [5] 대화로 커스터마이징 → [6] Vercel 배포
```

필요한 계정 3개 (미리 만들어오세요):
- **GitHub** — github.com (무료)
- **Claude** — claude.ai (Pro 구독, 월 $20)
- **Vercel** — vercel.com (무료, GitHub으로 로그인)

---

## Step 0. 도구 설치 (1회만)

### Git 설치

Git은 코드를 저장하고 공유하는 도구입니다. 택배 회사 같은 거예요.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mac" label="Mac">

Mac은 Git이 이미 설치되어 있을 수 있습니다. 터미널을 열고 확인하세요:

**터미널 여는 법:** `Cmd + Space` → "터미널" 입력 → Enter

```bash
git --version
```

- 버전 번호가 나오면 → 이미 설치됨, 다음 단계로
- "command not found" 나오면 → 팝업이 뜨면 "설치" 클릭

</TabItem>
<TabItem value="windows" label="Windows">

1. https://git-scm.com/downloads/win 접속
2. **"Click here to download"** 클릭
3. 다운로드된 파일 실행, **모두 "Next"** 클릭 → Install

**터미널 여는 법:** `Win 키` → "PowerShell" 입력 → Enter

```powershell
git --version
```

버전 번호가 나오면 성공!

</TabItem>
</Tabs>

---

### Claude Code 설치

Claude Code는 터미널에서 Claude와 대화하면서 코딩하는 도구입니다.\
"야, 이거 바꿔줘" 하면 Claude가 직접 파일을 수정합니다.

<Tabs>
<TabItem value="mac" label="Mac">

터미널에서:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

</TabItem>
<TabItem value="windows" label="Windows">

PowerShell에서:

```powershell
irm https://claude.ai/install.ps1 | iex
```

</TabItem>
</Tabs>

설치 확인:

```bash
claude --version
```

버전 번호가 나오면 성공!

---

### Claude Code 로그인

```bash
claude
```

처음 실행하면 로그인 화면이 나옵니다. **claude.ai 계정**(Pro 구독)으로 로그인하세요.\
브라우저가 열리면 "허용"을 누르면 됩니다.

로그인 후 `Ctrl + C`로 나가세요. (로그인만 하면 됩니다)

---

## Step 1. GitHub에서 템플릿 복사

1. 브라우저에서 접속: https://github.com/colehkg-cyber/coleitai-blog
2. 초록색 **"Use this template"** 버튼 클릭
3. **"Create a new repository"** 선택
4. Repository name에 원하는 이름 입력 (예: `my-blog`)
5. **Public** 선택 (Vercel 무료 배포에 필요)
6. **"Create repository"** 클릭

이제 내 GitHub 계정에 블로그 코드가 복사되었습니다!

---

## Step 2. 내 컴퓨터로 가져오기

터미널에서 아래 명령어를 입력합니다.\
`내아이디`와 `my-blog`은 본인 것으로 바꾸세요.

```bash
git clone https://github.com/내아이디/my-blog.git
```

그 다음 폴더로 이동:

```bash
cd my-blog
```

:::tip 복사-붙여넣기 꿀팁
- **Mac 터미널:** `Cmd + V`로 붙여넣기
- **Windows PowerShell:** 마우스 우클릭으로 붙여넣기
:::

---

## Step 3. Claude Code 실행

```bash
claude
```

이렇게 치면 Claude가 프로젝트를 읽고 대화 모드로 들어갑니다.\
한국어로 말하면 한국어로 답합니다.

```
╭──────────────────────────────────────╮
│ Welcome to Claude Code!              │
│                                      │
│ /help for available commands         │
╰──────────────────────────────────────╯

>
```

`>` 뒤에 원하는 걸 말하면 됩니다.

---

## Step 4. 대화로 블로그 커스터마이징

Claude Code에서 아래 문장을 **그대로 복사해서** 붙여넣으세요.\
본인 정보로 바꿔야 할 부분만 바꾸면 됩니다.

### 4-1. 블로그 기본 정보 변경

```
블로그 이름을 "나의 블로그"로 바꿔줘.
블로그 설명은 "일상과 기술을 기록하는 공간"으로 해줘.
저자 이름은 "홍길동"으로 바꿔줘.
```

Claude가 `src/config/site.config.ts` 파일을 수정합니다.\
"이 변경을 적용할까요?" 같은 질문이 나오면 **y** (또는 Enter)를 누르세요.

### 4-2. 디자인 변경 (선택)

```
메인 색상을 파란색 계열로 바꿔줘.
```

```
로고 텍스트를 "GL Blog"로 바꿔줘.
```

### 4-3. 변경사항 저장 (GitHub에 올리기)

커스터마이징이 끝나면 Claude Code에서:

```
변경한 내용을 git에 커밋하고 push해줘.
```

Claude가 알아서 `git add` → `git commit` → `git push`를 실행합니다.

---

## Step 5. 외부 서비스 세팅

블로그가 작동하려면 **데이터베이스**와 **AI 키**가 필요합니다.\
모두 **브라우저**에서 무료로 만듭니다.

### 5-1. Turso 데이터베이스 (글을 저장하는 곳)

1. https://turso.tech 접속 → **Get Started** → GitHub로 로그인
2. **"Create Database"** 클릭
3. Database name: `my-blog` (아무 이름)
4. Region: 가장 가까운 곳 선택
5. 만들어진 DB를 클릭 → **"Generate Token"** → **Read & Write** 선택 → Create

**2개를 메모하세요:**
- Database URL: `libsql://my-blog-내아이디.turso.io` 형태
- Auth Token: `eyJ...` 긴 문자열

### 5-2. Gemini API 키 (AI 글쓰기용)

1. https://aistudio.google.com/apikey 접속 → Google 로그인
2. **"Create API Key"** 클릭
3. 나온 키를 메모 (`AIza...` 형태)

### 5-3. 관리자 비밀번호 정하기

블로그 관리 페이지(`/admin`)에 접속할 때 쓸 비밀번호를 정하세요.\
예: `MyBlog2026!`

---

## Step 6. Vercel 배포

### 6-1. 프로젝트 연결

1. https://vercel.com 접속 → **GitHub으로 로그인**
2. **"Add New Project"** 클릭
3. 내 GitHub 레포 목록에서 `my-blog` 찾아서 **"Import"** 클릭

### 6-2. 환경 변수 입력

Import 화면에서 **"Environment Variables"** 섹션을 펼치고, 아래 5개를 입력합니다:

| Name | Value (예시) |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | `https://my-blog.vercel.app` |
| `TURSO_DATABASE_URL` | `libsql://my-blog-내아이디.turso.io` |
| `DATABASE_AUTH_TOKEN` | Turso에서 복사한 토큰 |
| `GEMINI_API_KEY` | Google AI Studio에서 복사한 키 |
| `ADMIN_PASSWORD` | 내가 정한 비밀번호 |

### 6-3. 배포

**"Deploy"** 버튼 클릭!

2~3분 기다리면 배포 완료. 축하합니다!

---

## Step 7. 확인

### 블로그 접속

Vercel에서 제공하는 URL로 접속하세요:\
`https://my-blog.vercel.app` (본인 프로젝트 이름)

### 관리자 페이지

`https://my-blog.vercel.app/admin` 접속\
→ Step 5에서 정한 비밀번호로 로그인\
→ 글 작성, 디자인 설정, AI 글쓰기 가능!

### DB 초기화 (첫 배포 후 1회)

`https://my-blog.vercel.app/admin/setup` 접속\
→ 상태 확인 후 안내에 따라 진행

---

## 이후 수정할 때

블로그를 수정하고 싶을 때는 이 3단계만 반복하면 됩니다:

```bash
# 1. 터미널에서 프로젝트 폴더로 이동
cd my-blog

# 2. Claude Code 실행
claude

# 3. 원하는 걸 말하기
> 메인 페이지 제목을 "Welcome"으로 바꿔줘
> 다 됐으면 커밋하고 push해줘
```

push하면 Vercel이 자동으로 다시 배포합니다. 끝!

---

## 자주 하는 실수

### "command not found: claude"
→ Claude Code 설치가 안 된 겁니다. Step 0으로 돌아가세요.

### "permission denied"
→ Mac: 명령어 앞에 `sudo`를 붙여보세요: `sudo curl -fsSL ...`\
→ Windows: PowerShell을 **관리자 권한**으로 실행하세요 (우클릭 → "관리자로 실행")

### "git clone" 실패
→ GitHub 레포 URL을 다시 확인하세요. `https://github.com/내아이디/my-blog.git` 형식이어야 합니다.

### Vercel 배포 실패
→ 환경 변수 5개가 모두 입력되었는지 확인하세요. 하나라도 빠지면 빌드 실패합니다.

### Claude Code에서 "이 파일을 수정할까요?" 물어볼 때
→ **y** 또는 **Enter**를 누르면 됩니다. 걱정 마세요, GitHub에 원본이 있으니까 언제든 되돌릴 수 있습니다.

---

© 2026 콜잇AI. All rights reserved.
