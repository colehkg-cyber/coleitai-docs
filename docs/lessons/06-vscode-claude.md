---
sidebar_position: 6
---

# 6강. VS Code + Claude Code 설치

> **소요 시간**: 15분
> **결과물**: 내 컴퓨터에서 Claude Code 실행 준비 완료

---

## 이 강의에서 하는 일

1. **VS Code** 설치 (코드 편집기)
2. 내 GitHub의 블로그 코드 → 내 컴퓨터로 가져오기
3. **Claude Code** 설치 + 로그인

---

## 1. VS Code 설치 (없으면, 3분)

https://code.visualstudio.com → Download → 설치 → 실행

:::tip 이미 있다면 건너뛰세요
VS Code 실행 후 위쪽 메뉴에 `File / Edit / View ...` 보이면 OK.
:::

---

## 2. 코드 내 컴퓨터로 가져오기 (3분)

VS Code 실행 → 위쪽 **Terminal 메뉴 → New Terminal** → 아래 명령어 한 줄씩:

```bash
git clone https://github.com/[내사용자이름]/my-blog.git
cd my-blog
code .
```

- `[내사용자이름]` 본인 GitHub 사용자 이름으로 변경
- `code .` 입력하면 VS Code가 프로젝트 폴더를 새 창으로 엽니다

:::warning "git: command not found" 나오면?
- **Mac**: 터미널에서 `xcode-select --install` 실행
- **Windows**: https://git-scm.com 에서 다운로드 후 설치
:::

---

## 3. Claude Code 설치 (5분)

VS Code 내장 터미널 열기:
- **Mac**: `Cmd + 백틱(\`)`
- **Windows**: `Ctrl + 백틱(\`)`

아래 명령어 입력:

### Mac

```bash
npm install -g @anthropic-ai/claude-code
```

### Windows

PowerShell을 **관리자 권한**으로 실행한 후:

```powershell
npm install -g @anthropic-ai/claude-code
```

:::warning "npm: command not found" 나오면?
Node.js가 없는 거예요. https://nodejs.org → **LTS 버전** 다운로드 → 설치 → 터미널 닫고 새로 열기.
:::

설치 확인:
```bash
claude --version
```

버전 번호가 나오면 성공.

---

## 4. Claude Code 실행 + 로그인 (4분)

```bash
claude
```

처음 실행하면:
1. 브라우저 자동으로 열림
2. Claude Pro 계정으로 로그인
3. 권한 허용 → 터미널로 돌아옴
4. `>` 프롬프트가 보이면 준비 완료 ✅

---

## 5. 잘 됐는지 확인

`>` 옆에 아래 문장을 복붙하고 엔터:

```
안녕? 이 프로젝트가 어떤 프로젝트인지 한국어로 한 문장으로 설명해줘.
```

Claude가 한국어로 대답하면 성공.

:::tip Claude Code 종료 / 재실행
- 종료: `Ctrl + C` 두 번
- 재실행: 터미널에서 `claude`
:::

---

:::info 다음 강의
**[7강. 블로그 정보·디자인 커스텀 →](./07-customize.md)** — 블로그 이름·색상을 내 것으로 바꿉니다 (15분).
:::
