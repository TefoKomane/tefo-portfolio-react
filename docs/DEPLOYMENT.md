# Deployment Guide

## Deployment Options

### Option 1: Netlify (Recommended)

#### Benefits
- Zero configuration
- Automatic HTTPS
- Preview deployments
- Easy rollback
- Free tier available

#### Steps

1. **Create Netlify Account**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Connect Repository**
   - Click "New site from Git"
   - Select GitHub
   - Authorize Netlify
   - Choose repository

3. **Configure Build Settings**
   - Build command: `npm run build` (if applicable)
   - Publish directory: `.` (root directory)
   - Environment variables: None needed

4. **Deploy**
   - Netlify automatically deploys on push
   - Gets a deployment URL
   - Production domain can be configured

5. **Custom Domain**
   - Site settings → Domain management
   - Add custom domain
   - DNS configuration provided

### Option 2: GitHub Pages

#### Benefits
- Free hosting
- Integrated with GitHub
- No build process needed
- Perfect for static sites

#### Steps

1. **Rename HTML File**
   ```bash
   mv index-bootstrap.html index.html
   ```

2. **Push to Repository**
   ```bash
   git add index.html styles.css css/
   git commit -m "build: prepare for GitHub Pages deployment"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to Repository Settings
   - Scroll to "GitHub Pages"
   - Source: select `main` branch
   - Folder: select `/ (root)`
   - Save

4. **Access Site**
   - URL: `https://tefokomane.github.io/tefo-portfolio`
   - Custom domain optional

### Option 3: Vercel

#### Benefits
- Optimized for static sites
- Fast global CDN
- Zero-config deployments
- GitHub integration

#### Steps

1. **Connect Repository**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select GitHub repository

2. **Configure Project**
   - Framework: Other (Static)
   - Root Directory: `.`
   - Build command: Empty
   - Output directory: `.`

3. **Deploy**
   - Click "Deploy"
   - Automatic deployments on push

### Option 4: Self-Hosted

#### Using Apache/Nginx

```bash
# Copy files to web server
scp -r . user@server:/var/www/portfolio

# Set proper permissions
chmod 755 /var/www/portfolio
chmod 644 /var/www/portfolio/*
```

#### .htaccess (Apache)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^index\.html$ - [L]
</IfModule>

<FilesMatch "\.html$">
  Header set Cache-Control "max-age=3600"
</FilesMatch>

<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico)$">
  Header set Cache-Control "max-age=31536000"
</FilesMatch>
```

## Pre-Deployment Checklist

### Content
- [ ] All project information accurate
- [ ] Contact information correct
- [ ] Social media links active
- [ ] Images optimized and load fast
- [ ] All links work correctly
- [ ] Text spelling and grammar checked

### Performance
- [ ] Run lighthouse audit
- [ ] Images optimized
- [ ] CSS minified (if applicable)
- [ ] No console errors
- [ ] Page loads under 3 seconds

### Accessibility
- [ ] Run accessibility audit
- [ ] All images have alt text
- [ ] Forms properly labeled
- [ ] Keyboard navigation works
- [ ] Color contrast adequate
- [ ] Mobile responsive

### Security
- [ ] No sensitive information exposed
- [ ] HTTPS enabled
- [ ] Form validates input
- [ ] No XSS vulnerabilities
- [ ] Headers configured properly

### SEO
- [ ] Meta description present
- [ ] Open Graph tags added
- [ ] sitemap.xml created
- [ ] robots.txt configured
- [ ] Canonical URLs set

## Performance Optimization

### Image Optimization

```bash
# Using ImageOptim or TinyPNG
# Compress project images before deployment
```

### CSS Optimization

- Combine all CSS files if serving as one
- Consider CSS minification
- Remove unused styles

### Caching Strategy

```
Resources          | Cache Duration
---|---
HTML               | 1 hour (3600s)
CSS/JS/Images      | 1 year (31536000s)
API responses      | 5 minutes (300s)
```

## Monitoring & Maintenance

### Analytics Setup

Add to `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Regular Checks

- Monthly: Review analytics
- Monthly: Test all links
- Quarterly: Update projects
- Quarterly: Review performance
- Quarterly: Security audit

## SSL/HTTPS

Most platforms provide automatic SSL:
- Netlify: Automatic
- GitHub Pages: Automatic
- Vercel: Automatic
- Self-hosted: Use Let's Encrypt

```bash
# Let's Encrypt (Free SSL)
sudo apt-get install certbot
sudo certbot certonly -a standalone -d yourdomain.com
```

## DNS Configuration

### For Custom Domain

1. **Netlify DNS**
   - Point nameservers to Netlify
   - Managed through Netlify dashboard

2. **External DNS**
   - A record: Points to server IP
   - CNAME record: Points to provider domain
   - MX records: For email routing

3. **Verify DNS**
   ```bash
   nslookup yourdomain.com
   dig yourdomain.com
   ```

## Continuous Deployment

### Automatic Updates

Both Netlify and Vercel support:
- Push to GitHub → Auto deploy
- Pull request previews
- Deploy logs and rollback
- Environment variables

### Manual Deployment

If needed, redeploy:
```bash
# Netlify CLI
npm install -g netlify-cli
netlify deploy

# Vercel CLI
npm install -g vercel
vercel
```

## Troubleshooting Deployment

### Site Not Loading

1. Check deployment logs
2. Verify HTML file exists
3. Check file permissions
4. Verify DNS configuration
5. Clear browser cache

### CSS Not Loading

1. Check file paths (relative vs absolute)
2. Verify CSS file deployed
3. Check case sensitivity
4. Review server headers
5. Test in incognito window

### Broken Links

1. Verify all URLs are correct
2. Check file structure
3. Test all navigation links
4. Validate external links
5. Check redirects

---

**Last Updated:** 2026-08-18
