/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://hillmedical.hu', // ← a saját domain-ed
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'monthly',
    priority: 0.7,
    trailingSlash: false,
    exclude: ['/api/send-email', '/kapcsolatfelvetel/visszaigazolas']
  }
  