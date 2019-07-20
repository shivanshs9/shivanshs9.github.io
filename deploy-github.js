const ghpages = require('gh-pages');


// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:shivanshs9/shivanshs9.github.io.git',
  },
  () => {
    console.log('Deploy Complete!');
  },
);
