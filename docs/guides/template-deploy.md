---
sidebar_position: 2
---

# Step 2. 템플릿 설치 & 배포

> **이 단계에서 할 일**
> Step 1에서 준비한 도구들을 연결해서, 실제 블로그를 인터넷에 띄웁니다.
> 끝나면 `https://my-blog.vercel.app` 같은 주소로 내 블로그 공개됨.

---

## 작업 흐름

```
1. GitHub에서 템플릿 복사 (Use this template)
2. 내 컴퓨터로 다운로드 (git clone)
3. Turso DB 생성 + 토큰 발급
4. Vercel 프로젝트 연결
5. 환경변수 5개 입력
6. Deploy 클릭
7. DB 초기화
8. 자동배포 동작 확인
```

총 작업: 약 20~30분.

---

## 1. GitHub에서 템플릿 복사

브라우저에서 접속:
```
https://github.com/colehkg-cyber/coleitai-blog
```

1. 초록색 **"Use this template"** 버튼 클릭
2. **"Create a new repository"** 선택
3. Repository name: `my-blog` (원하는 이름)
4. ⭐ **Public** 선택 (Vercel 무료 배포 조건)
5. **"Create repository"** 클릭

이제 내 GitHub에 블로그 코드 사본이 생겼습니다.

---

## 2. 내 컴퓨터로 다운로드

VS Code → 터미널 (`` Ctrl + ` ``) → 아래 명령:

```bash
git clone https://github.com/내GitHub아이디/my-blog.git
cd my-blog
```

> ⚠️ `내GitHub아이디` 부분을 실제 아이디로 바꾸세요.

VS Code에서 폴더 열기: `File → Open Folder → my-blog`

### 내 컴퓨터에서 미리 보기 (선택)

```bash
npm install     # 부품 다운로드 (1~2분)
npm run dev     # 로컬 서버 실행
```

브라우저에서 `http://localhost:3000` 접속 → 블로그 화면이 보이면 성공.

> 💡 이 단계는 건너뛰어도 됩니다. Vercel에 바로 배포해도 작동.

---

## 3. Turso DB 생성 + 토큰 발급

[`turso.tech`](https://turso.tech) 로그인 → **Dashboard**

### DB 만들기
1. **"Create Database"** 클릭
2. Database name: `my-blog` (자유)
3. Region: 가장 가까운 곳 (한국이면 `Tokyo`)
4. **Create** 클릭

### URL 복사
- DB 클릭 → 화면에 `libsql://my-blog-내아이디.turso.io` 형태 URL
- 📋 메모장에 복사

### 토큰 발급
1. DB 화면에서 **"Generate Token"** 클릭
2. Expiration: **Never** (선택)
3. Permission: **Read & Write**
4. **"Create"** 클릭
5. `eyJ...` 로 시작하는 긴 문자열 → 📋 메모장에 복사

> ⚠️ 토큰은 한 번만 표시됨. 꼭 복사.

---

## 4. Vercel 프로젝트 연결

[`vercel.com/dashboard`](https://vercel.com/dashboard) → **Add New → Project**

1. **"Import Git Repository"** 섹션
2. 내 GitHub 레포 목록에서 `my-blog` 찾기
3. **"Import"** 클릭

### 프로젝트 설정 (기본값 OK)
- Framework Preset: **Next.js** (자동 감지)
- Build Command: 그대로
- Output Directory: 그대로

---

## 5. 환경변수 5개 입력

같은 화면 아래쪽 **"Environment Variables"** 섹션 펼치기.

| Name | Value | 어디서 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://my-blog.vercel.app` | Vercel 기본 주소 (배포 후 확인) |
| `TURSO_DATABASE_URL` | `libsql://my-blog-내아이디.turso.io` | 3번에서 복사 |
| `DATABASE_AUTH_TOKEN` | `eyJ...` | 3번에서 복사 |
| `GEMINI_API_KEY` | `AIza...` | Step 1-4번에서 복사 |
| `ADMIN_PASSWORD` | `MyBlog2026!` (내가 정함) | 자유 |

각 항목마다 **Add** 클릭.

> 💡 `NEXT_PUBLIC_SITE_URL`은 처음엔 임시값으로 두고, 배포 후 실제 Vercel 주소로 업데이트해도 됨.

---

## 6. Deploy 클릭

**"Deploy"** 버튼 클릭 → 2~3분 기다림.

### 빌드 진행 상황
```
Building...   (1~2분, Next.js 빌드)
Deploying... (30초, CDN 배포)
Ready ✓     (완료)
```

**"Congratulations!" 페이지가 뜨면 성공.**

배포 주소 확인:
```
https://my-blog-xxxx.vercel.app
```

---

## 7. DB 초기화 (첫 배포 후 1회)

블로그 코드는 Turso DB에 테이블을 만들어야 글을 저장할 수 있습니다. 초기화 페이지 접속:

```
https://my-blog-xxxx.vercel.app/admin/setup
```

1. ADMIN_PASSWORD로 로그인
2. **"Initialize Database"** 클릭
3. "Success" 메시지 → 완료

> 💡 이 작업은 **첫 배포 후 한 번만** 합니다.

---

## 8. 자동배포 동작 확인

코드를 수정하면 GitHub → Vercel이 자동으로 다시 배포되는지 확인해 봅시다.

### 간단한 테스트
VS Code 터미널에서 Claude Code 실행:
```bash
claude
```

Claude Code 안에서:
```
README.md 파일 맨 아래에 "테스트 배포" 라고 한 줄 추가하고
git에 커밋·푸시해줘.
```

Claude가 자동으로 처리. 그 후:

1. 브라우저에서 `vercel.com/dashboard` → 내 프로젝트
2. **"Deployments"** 탭
3. 새 배포가 **"Building"** 상태로 자동 시작됨
4. 1~2분 후 **"Ready"** 로 변경

> 🎉 이제부터는 코드 수정 → git push → 자동 배포. 끝!

---

## 흐름 요약

```
   내 컴퓨터 (VS Code + Claude Code)
            ↓ git push
       ┌──────────┐
       │  GitHub  │
       └────┬─────┘
            ↓ 자동 감지
       ┌──────────┐
       │  Vercel  │ ─── 빌드 → CDN 배포
       └────┬─────┘
            ↓ 실행 중 호출
   ┌──────┴──────┐
   ▼             ▼
 Turso         Gemini
 (글 DB)       (AI)

 글 발행은 `/admin` 패널에서.
```

---

## 자주 묻는 질문

**Q. Vercel 빌드 실패! "Module not found" 에러.**
- `npm install`이 안 됐을 가능성. Vercel은 자동으로 처리하니, GitHub에 코드가 제대로 올라갔는지 확인.

**Q. "Environment variable XXX is missing" 에러.**
- 5개 환경변수 모두 입력했는지 확인. 오타도 점검.

**Q. `/admin/setup` 페이지가 404.**
- 배포가 완료된 후에 접속. Deployments에서 **Ready** 상태인지 확인.

**Q. ADMIN_PASSWORD 잊어버림.**
- Vercel 환경변수 → 수정 → Redeploy.

**Q. 비공개(Private) 레포로 만들고 싶음.**
- Vercel Pro($20/월) 필요. 입문자는 Public 추천.

---

## ✅ 체크리스트

- [ ] GitHub에서 템플릿 복사 (Use this template)
- [ ] 내 컴퓨터로 git clone
- [ ] Turso DB 생성·토큰 발급
- [ ] Vercel에 프로젝트 Import
- [ ] 환경변수 5개 모두 입력
- [ ] Deploy 성공 (Ready 표시)
- [ ] `/admin/setup` 으로 DB 초기화
- [ ] git push로 자동배포 동작 확인

---

:::info 다음 단계
**[Step 3. 디자인 커스텀 →](./design-custom.md)** — Claude Code에게 한국어로 "색깔 바꿔줘" 같이 말해서 블로그 외관을 내 것으로 만듭니다.
:::
