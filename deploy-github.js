const fs = require('fs');
const ghpages = require('gh-pages');

const { GITHUB_TOKEN } = process.env;
const repo = `https://${GITHUB_TOKEN ? `${GITHUB_TOKEN}@` : ''}github.com/shivanshs9/shivanshs9.github.io.git`;

const { version } = require('./package.json');

require('child_process').exec('git rev-parse --short HEAD', (_err, stdout) => {
  const commit = stdout;
  fs.createReadStream('CNAME').pipe(fs.createWriteStream('public/CNAME'));

  ghpages.publish(
    'public',
    {
      branch: 'master',
      repo,
      message: `Commit v${version} - ${commit}`,
    },
    () => {
      console.log('Deploy Complete!');
    },
  );
});
