// 提取sitemap.xml中所有以taoqitu.uk开头的URL地址
const fs = require('fs');
const path = require('path');

// 读取sitemap.xml文件
const sitemapPath = path.join(__dirname, '.vitepress/dist/sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

// 使用正则表达式提取所有URL
const urlRegex = /<loc>([^<]+)<\/loc>/g;
let match;
const urls = [];

while ((match = urlRegex.exec(sitemapContent)) !== null) {
  // 检查URL是否以taoqitu.uk开头
  if (match[1].startsWith('https://taoqitu.uk')) {
    urls.push(match[1]);
  }
}

// 输出结果
console.log('以taoqitu.uk开头的URL地址数组:');
console.log(JSON.stringify(urls, null, 2));