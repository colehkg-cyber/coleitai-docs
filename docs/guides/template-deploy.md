---
sidebar_position: 2
---

# Step 2. 템플릿 설치 & 배포

> 한 줄 명령어로 블로그 생성. 요리 재료 손질은 끝났습니다. 여러분은 '글'이라는 불만 켜세요.

---

## 블로그 밀키트: Starter Kit

직접 처음부터 만들 필요 없습니다.\
**구글 건물주 프로젝트 전용 템플릿**을 설치하면 됩니다.

### 템플릿에 이미 포함된 것

| 기능 | 상태 | 설명 |
|------|------|------|
| SEO 구조 강제 시스템 | ✅ AUTO | 이미지 WebP 변환, H1 중복 방지, 메타 태그 자동 생성 |
| 프리셋 레이아웃 | ✅ DESIGN | 5가지 테마, 다크모드, 반응형 모바일 최적화 완료 |
| 원클릭 배포 | ✅ DEPLOY | 글 쓰고 '저장'만 누르면 자동 빌드 & 전 세계 배포 |
| Lighthouse 400점 | ✅ SEO Ready | 설치만 하면 400점 구조 확보 |

---

## 설치하기

### Step 1: 터미널 열기

| OS | 방법 |
|----|------|
| **Mac** | `Cmd + Space` → "터미널" 검색 → 실행 |
| **Windows** | `Win + R` → "cmd" 입력 → 실행 |

### Step 2: 템플릿 설치

터미널에 아래 명령어를 **그대로 복사해서 붙여넣기**:

```bash
npx create-google-landlord-blog my-blog
```

> `my-blog` 부분은 원하는 이름으로 바꿔도 됩니다.

### Step 3: 설치 확인

```bash
cd my-blog
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 → 내 블로그가 보이면 성공! 🎉

:::warning
**Node.js 미설치 에러가 뜬다면:**\
[nodejs.org](https://nodejs.org)에서 LTS 버전을 먼저 설치하세요.\
설치 후 터미널을 다시 열고 위 명령어를 재실행합니다.
:::

---

## 배포하기 (인터넷에 공개)

### Step 1: Github에 올리기

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/[내아이디]/my-blog.git
git push -u origin main
```

:::info
**Git 명령어가 어렵다면:**\
Github 웹사이트에서 직접 파일을 업로드해도 됩니다.\
또는 Claude Code에게 "깃허브에 올리는 법 알려줘"라고 물어보세요.
:::

### Step 2: Vercel 연동

1. [vercel.com](https://vercel.com) 로그인
2. **"Add New Project"** 클릭
3. Github에서 방금 올린 `my-blog` 저장소 선택
4. **"Deploy"** 클릭
5. 약 1~2분 대기

### Step 3: 내 사이트 확인

배포가 완료되면 Vercel이 주소를 줍니다:

```
https://my-blog.vercel.app
```

> 🎉 **축하합니다!** 내 사이트가 전 세계에 공개되었습니다.\
> 서버비 0원. HTTPS 보안 적용. 전 세계 CDN.

---

## 시스템 아키텍처

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│    나     │     │  GitHub  │     │  Vercel  │
│ 글을 쓴다  │ ──→ │ 코드 저장  │ ──→ │ 자동 배포  │
└──────────┘     └──────────┘     └──────────┘
                        │                │
                   Commit 한 번        전 세계 서버에
                   으로 자동 저장       자동 배포

                        Cost: $0
```

> 앞으로는 글을 쓰고 Github에 올리기만 하면,\
> Vercel이 알아서 빌드하고 배포합니다.

---

## ✅ 체크리스트

- [ ] 템플릿 설치 완료 (`npx create-google-landlord-blog`)
- [ ] 로컬에서 사이트 확인 (`localhost:3000`)
- [ ] Github에 코드 업로드 완료
- [ ] Vercel 배포 완료
- [ ] 내 사이트 URL로 접속 확인

---

:::info
**다음:** [Step 3. 디자인 커스텀](design-custom.md)에서\
내 브랜드에 맞게 디자인을 바꿉니다. Claude Code에게 시키면 됩니다.
:::
