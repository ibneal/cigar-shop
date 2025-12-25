# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it by emailing:

**cigarandsmokeshop@gmail.com**

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We take security seriously and will respond within 48 hours.

## Security Measures Implemented

### Contact Form
- ✅ Rate limiting (5 requests per minute per IP)
- ✅ Honeypot spam prevention
- ✅ Input validation and sanitization
- ✅ Email validation
- ✅ Server-side validation

### Data Protection
- ✅ No sensitive data stored in client-side code
- ✅ Environment variables for API keys
- ✅ HTTPS enforced in production
- ✅ No plaintext credentials

### Code Quality
- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Next.js security best practices
- ✅ Regular dependency updates

## Best Practices for Deployment

1. **Environment Variables**
   - Never commit `.env.local` to Git
   - Use platform-specific environment variable management
   - Rotate API keys regularly

2. **HTTPS**
   - Always use HTTPS in production
   - Enable HSTS (HTTP Strict Transport Security)
   - Use modern TLS versions only

3. **Dependencies**
   - Run `npm audit` regularly
   - Update dependencies with `npm update`
   - Monitor for security advisories

4. **API Keys**
   - Restrict API keys by domain/IP
   - Use separate keys for dev/production
   - Monitor usage for anomalies

5. **Content Security**
   - Validate all user inputs
   - Sanitize data before display
   - Use CSP headers (Content Security Policy)

## Dependency Security

Regular security audits:
```bash
npm audit
npm audit fix
```

Update dependencies:
```bash
npm update
npm outdated
```

## Secure Configuration

### Recommended Headers (Production)

Add to your hosting platform or reverse proxy:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Next.js Security Headers

Already configured in `next.config.mjs` (can be enhanced):

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
      ],
    },
  ]
}
```

## Monitoring

Consider implementing:
- Error tracking (Sentry)
- Uptime monitoring (UptimeRobot)
- Log aggregation (for API routes)
- Security scanning (Snyk, Dependabot)

## Compliance

### Privacy
- No personal data collected without consent
- Contact form data transmitted securely
- Clear privacy policy recommended

### Accessibility
- WCAG 2.1 Level AA compliance target
- Regular accessibility audits
- Screen reader compatibility

### Age Verification
For tobacco sales compliance:
- Implement age verification modal (recommended)
- Clear age restriction notices
- Compliance with local regulations

## Incident Response

If a security incident occurs:

1. **Assess** - Determine scope and impact
2. **Contain** - Prevent further damage
3. **Investigate** - Find root cause
4. **Remediate** - Fix the vulnerability
5. **Document** - Record incident details
6. **Notify** - Inform affected parties if needed

## Security Checklist

Before deployment:

- [ ] All API keys in environment variables
- [ ] HTTPS enabled and enforced
- [ ] Rate limiting on forms working
- [ ] Input validation on all forms
- [ ] Dependencies up to date
- [ ] `npm audit` shows no high vulnerabilities
- [ ] Environment variables not in Git
- [ ] Error messages don't leak sensitive info
- [ ] CORS properly configured
- [ ] Security headers configured

## Updates and Maintenance

- Review security monthly
- Update dependencies quarterly
- Security audit annually
- Penetration testing (if budget allows)

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)

## Contact

For security concerns:
- Email: cigarandsmokeshop@gmail.com
- Phone: 443-755-5141

---

Last updated: 2024-12-25

