/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost.com:3000',
  generateRobotsTxt: true, // (optional)
  // ...other options
}