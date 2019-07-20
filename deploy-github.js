const fs = require('fs');
const ghpages = require('gh-pages');
const pjson = require('./package.json');

const version = pjson.version;
const { GITHUB_TOKEN } = process.env;
const repo = `https://${GITHUB_TOKEN ? `${GITHUB_TOKEN}@` : ''}github.com/shivanshs9/shivanshs9.github.io.git`;

fs.createReadStream('CNAME').pipe(fs.createWriteStream('public/CNAME'));

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo,
    message: `Commit v${version}`,
  },
  () => {
    console.log('Deploy Complete!');
  },
);
