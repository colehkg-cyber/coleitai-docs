// Decap CMS OAuth — Step 1
// 사용자가 /admin 에서 "Login with GitHub" 를 누르면 이 엔드포인트로 옵니다.
// 여기서 GitHub 인증 화면으로 리다이렉트시킵니다.

export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;

  if (!clientId) {
    res.status(500).send('OAUTH_GITHUB_CLIENT_ID is not set in Vercel env vars');
    return;
  }

  // GitHub 에서 인증 후 돌아올 주소 (= /api/callback)
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const redirectUri = `${proto}://${host}/api/callback`;

  // CSRF 방지용 state (간단한 랜덤값)
  const state = Math.random().toString(36).substring(2);

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user',
    state,
  });

  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
