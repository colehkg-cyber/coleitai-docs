// Decap CMS OAuth — Step 2
// GitHub 인증 후 사용자가 이리로 돌아옵니다 (?code=xxx).
// code 를 access_token 으로 교환한 뒤,
// 부모 창(Decap CMS) 에 postMessage 로 토큰을 전달합니다.

export default async function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.status(500).send('OAUTH_GITHUB_CLIENT_ID / OAUTH_GITHUB_CLIENT_SECRET not set');
    return;
  }

  const code = req.query.code;
  if (!code) {
    res.status(400).send('Missing ?code parameter');
    return;
  }

  // GitHub 에 code → access_token 교환 요청
  let tokenJson;
  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    tokenJson = await tokenRes.json();
  } catch (err) {
    res.status(500).send(`Token exchange failed: ${err.message}`);
    return;
  }

  if (tokenJson.error || !tokenJson.access_token) {
    res.status(500).send(`GitHub OAuth error: ${tokenJson.error_description || tokenJson.error || 'no token'}`);
    return;
  }

  const token = tokenJson.access_token;

  // Decap CMS 에 토큰 전달
  // 형식: "authorization:github:success:{"token":"...","provider":"github"}"
  const payload = JSON.stringify({ token, provider: 'github' });
  const message = `authorization:github:success:${payload}`;

  // 팝업 창에서 부모 창(Decap)에 postMessage 후 자동 종료
  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Authorizing…</title></head>
<body>
<p>로그인 처리 중… 잠시 후 자동으로 닫힙니다.</p>
<script>
(function() {
  function send(e) {
    if (!e || e.data !== 'authorizing:github') return;
    window.removeEventListener('message', send);
    e.source.postMessage(${JSON.stringify(message)}, e.origin);
  }
  window.addEventListener('message', send, false);
  // 부모 창에게 "준비됐다" 알림
  (window.opener || window.parent).postMessage('authorizing:github', '*');
})();
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
