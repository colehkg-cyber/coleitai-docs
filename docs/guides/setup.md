---
sidebar_position: 1
---

# Step 1. 가입·결제·설치

> **이 단계에서 할 일**
> 도구 알아보기 섹션에서 배운 7가지 도구의 **계정을 만들고**, 내 컴퓨터에 **필요한 프로그램을 설치**합니다.
> 끝나면 "준비 완료, 이제 블로그 만들기 시작".

---

## 작업 전체 흐름

```
1. 계정 만들기 (브라우저에서) ────────────────────
   ├─ GitHub
   ├─ Vercel (GitHub 연동)
   ├─ Turso (GitHub 연동)
   ├─ Google Gemini API
   └─ Claude (Pro 결제)

2. 프로그램 설치 (내 컴퓨터에서) ────────────────
   ├─ Node.js
   ├─ Git
   ├─ VS Code
   └─ Claude Code
```

총 작업: 약 30~40분.

---

## 준비물

- 💻 노트북 (Mac / Windows OK)
- 📧 이메일 (계정 가입용)
- 💳 신용카드 (Claude Pro $20/월 결제용)
- 🌐 인터넷

---

## 1. GitHub 가입

[`github.com`](https://github.com) → **Sign up**

1. 이메일 입력
2. 비밀번호 만들기 (영문 + 숫자)
3. **Username** 정하기 — ⚠️ **짧고 기억하기 쉽게**. 나중에 블로그 주소에 들어감.
4. 이메일 인증
5. **Free** 플랜 선택

> ✅ 끝. 카드 등록 없음.

---

## 2. Vercel 가입

[`vercel.com`](https://vercel.com) → **Sign Up**

1. ⭐ **"Continue with GitHub"** 클릭 (이거 중요!)
2. GitHub 로그인 → 권한 허용
3. **Hobby** 플랜 선택 (무료)

> ✅ 끝. GitHub 연동 자동 완료.

---

## 3. Turso 가입

[`turso.tech`](https://turso.tech) → **Sign Up**

1. ⭐ **"Continue with GitHub"** 클릭
2. GitHub 로그인 → 권한 허용
3. 무료 플랜 자동 시작

> 💡 DB 생성과 토큰 발급은 Step 2(템플릿 배포)에서 합니다.

---

## 4. Gemini API 키 발급

[`aistudio.google.com/apikey`](https://aistudio.google.com/apikey) → Google 로그인

1. **"Create API Key"** 클릭
2. 새 프로젝트 만들거나 기존 거 선택
3. `AIza...` 로 시작하는 키가 나옴

> ⚠️ **메모장에 임시 저장**. Step 2에서 환경변수에 입력합니다.
> ⚠️ 절대 GitHub에 직접 올리지 않습니다.

---

## 5. Claude Pro 가입·결제

[`claude.ai`](https://claude.ai) → **Sign Up**

1. 이메일 가입 + 인증
2. 로그인 후 왼쪽 아래 **"Upgrade to Pro"** 클릭
3. 신용카드 입력 → 월 $20 결제
4. **Pro** 플랜 활성화 확인

> 💡 Claude Pro에는 **Claude Code 사용권**이 포함됩니다. 별도 결제 없음.

---

## 6. Node.js 설치

[`nodejs.org`](https://nodejs.org) → **LTS 버전** (왼쪽 초록 버튼) 다운로드

| 운영체제 | 설치 |
|---|---|
| Mac | 다운받은 `.pkg` 더블클릭 → 다음·다음·완료 |
| Windows | 다운받은 `.msi` 더블클릭 → Next·Next·Install |

설치 후 **터미널을 새로 열고** 확인:
```bash
node --version
npm --version
```

`v20.x.x` 같은 버전 번호 나오면 성공.

> 💡 **터미널 여는 법**
> - Mac: `Cmd + Space` → "터미널" 입력 → Enter
> - Windows: `Win 키` → "PowerShell" 입력 → Enter

---

## 7. Git 설치

| 운영체제 | 설치 |
|---|---|
| Mac | 이미 설치되어 있을 가능성 큼. 터미널에 `git --version`. 없으면 팝업 따라 설치. |
| Windows | [`git-scm.com/downloads/win`](https://git-scm.com/downloads/win) → 다운로드 → 모두 Next |

확인:
```bash
git --version
```

---

## 8. VS Code 설치

[`code.visualstudio.com`](https://code.visualstudio.com) → 자동 감지된 운영체제용 다운로드

설치 후 실행. 첫 화면이 뜨면 끝.

> 💡 **한국어 UI 원하면**: VS Code 안에서 `Cmd/Ctrl + Shift + X` → "Korean" 검색 → "한국어 언어팩" 설치 → 재시작.

---

## 9. Claude Code 설치

VS Code 안에서 터미널 열기: `Ctrl + ` ` (백틱 키)

| 운영체제 | 명령어 |
|---|---|
| Mac | `curl -fsSL https://claude.ai/install.sh \| bash` |
| Windows (PowerShell) | `irm https://claude.ai/install.ps1 \| iex` |

설치 후 새 터미널 열고:
```bash
claude --version
```

버전 번호 나오면 성공.

### 첫 로그인

```bash
claude
```

처음 실행 시 브라우저가 자동으로 열림 → claude.ai 로그인 → "허용" 클릭 → 완료.
로그인 끝나면 `Ctrl + C` 로 나가기.

---

## 모은 정보 정리

Step 2에서 사용할 정보를 미리 메모장에 적어두세요.

| 항목 | 값 | 어디서 발급 |
|---|---|---|
| GitHub Username | | 1번 |
| Gemini API Key | `AIza...` | 4번 |
| Turso DB URL | (Step 2에서) | turso.tech |
| Turso Auth Token | (Step 2에서) | turso.tech |
| 관리자 비밀번호 | 내가 정함 | 자유 |

> ⚠️ **이 메모는 절대 GitHub에 올리지 마세요.** 노션·로컬 메모장에만.

---

## 자주 묻는 질문

**Q. Claude Pro 안 사고 무료로 가능한가요?**
- Claude.ai 무료 플랜은 코드 작업에 사용량 제한이 큼. **Pro 강력 추천**.
- 월 $20 = 광고 수익으로 금방 회수.

**Q. 카드 등록 안 하고 진행 가능한 것만 먼저?**
- 가능. 1·2·3·4·6·7·8·9 먼저 하고, Claude만 나중에 결제.

**Q. 도메인은 안 사도 되나요?**
- 네. Vercel 무료 주소(`myblog.vercel.app`)로 평생 가능.

**Q. 회사 PC에서 해도 되나요?**
- 가능. 설치 권한이 있다면.

---

## ✅ 체크리스트

### 계정
- [ ] GitHub 가입
- [ ] Vercel 가입 (GitHub 연동)
- [ ] Turso 가입 (GitHub 연동)
- [ ] Gemini API 키 발급
- [ ] Claude Pro 결제

### 설치
- [ ] Node.js (`node --version` 확인)
- [ ] Git (`git --version` 확인)
- [ ] VS Code
- [ ] Claude Code (`claude --version` 확인)
- [ ] Claude 로그인 완료

모두 체크했으면 Step 2로.

---

:::info 다음 단계
**[Step 2. 템플릿 설치 & 배포 →](./template-deploy.md)** — 블로그 코드를 내 GitHub에 복사하고, 환경변수 연결하고, Vercel에 배포합니다.
:::
