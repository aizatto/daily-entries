// https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/daily-entries' : '',
}