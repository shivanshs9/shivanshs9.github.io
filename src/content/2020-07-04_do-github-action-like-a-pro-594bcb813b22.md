---
templateKey: blog-post
id: do-github-action-like-a-pro-594bcb813b22
title: "Do GitHub Action like a Pro!"
description: A set of development practices you wish you’d known before publishing your first Action.
date: 2020-07-04T14:25:47.156Z
slug: /medium/do-github-action-like-a-pro-594bcb813b22
headerImage: https://miro.medium.com/max/3780/0*Tv7l1cHUf5kT1l27
tags:
  - GitHub
  - CI/CD
  - GitHub Actions
  - DevOps
  - Automation
  - TypeScript
---

### A set of development practices you wish you’d known before publishing your first Action.

I don’t know about you, but software engineering interested me for its ability to automate stuff and let me be lazy. Most of the development that takes place now fundamentally automates one or the other services. However, anything at scale means there will be more tasks, as part of developer workflow, that would, only if automated, help speed up the rapid development.
No, even if it sounds a little bit similar, I’m not trying to be a [DevOps Advocate](https://www.nutanix.dev/2019/11/27/what-is-a-devops-advocate/), since that term’s interpretation is really quite varied and vast.

Now, when it comes to development workflow there’s quite a lot of stuff that could be automated, rather than just “build/test/package” cycle commonly provided by CI/CD services. And that’s why GitHub Actions is the perfect tool to handle it — since you’ve got code, documentation, issues, pull requests, code reviews, releases and even [packages](https://github.com/features/packages), all at one place!

## tl;dr

Hopefully, now that I’ve convinced you to at least give it a try and [read docs](https://help.github.com/en/actions) with a cup of coffee ‘sides you, I ought to clear out one misconception —GitHub Actions are still pieces of code, and with every code ever written, it also comes with its own set of development practices to keep in mind.

And these recommended practices to build reusable Actions are the focus of this article. So, without further ado, let me clarify the scope of this article:

- Why publish Actions rather than writing bash/python/{insert scripting language} scripts?

- Automating build and packaging of Action releases.

- Automating proper versioning of your Action as per [GitHub recommendations](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md#versioning).

- Writing Tests! (you really didn’t think you’d get away without it, did you? :D)

## Why use/publish Actions at all

Automating a workflow requires programming each individual task of that workflow, which brings another unit to maintain and instrument. Even tasks as simple as installing build dependencies could suddenly fail and requires debugging. Then, what about complicated tasks like sending SMS alerts or publishing a release?

Sure, your team may program a shell or a python script for these tasks on their own, but that’s just asking for extra work to drag down the development considering long-term maintenance and stability.

Let’s discuss another situation where your team did manage to write and maintain such a script for one project and you find that there’s another project in need of programming a task with a similar use-case. Of course, to tackle that, you’d probably put that script in its own repo/gist and curl it wherever needed. Sounds like a hack? Yeah, I feel the same :).

Fortunately, GitHub realized a simple CI/CD workflow wouldn’t cut it, partly due to above-mentioned issues, and provided a [Marketplace](https://github.com/marketplace?type=actions) to store and document all these reusable programs, called Actions, which are used as building-blocks of most workflows. That’s way, each job of workflow has a set of steps, where each step represents an individual task and can either run command or one of these Actions.

## Automating Build and packaging of Action releases.

<center>
<iframe src="https://giphy.com/embed/1lxryzbQaqo49cKhCw" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/SandiaLabs-robot-robotics-1lxryzbQaqo49cKhCw">via GIPHY</a></p>
</center>

At first, I thought these Actions sounds similar to tons of libraries hosted at NPM for JS development, especially since GitHub runner completely supports Javascript Actions. However, there’s one major difference between Javascript Actions and NodeJS Library — **_package.json_ is totally useless in the case of Actions**. While writing npm scripts do come handy in the development of those Actions, GitHub Action only needs *action.yml *manifest file which describes the action name, inputs and main JS file to run. Heck, even the package version doesn’t matter since actions are used in workflows by specifying the commit ref (tag/branch/commit SHA).

Since the actions aren’t really packaged and stored in a central repository (unlike NPM), instead directly using GitHub to fetch the required action in a running job, they are really flexible to [store](https://docs.github.com/en/actions/creating-actions/about-actions#choosing-a-location-for-your-action) and use in both public and private repositories. Although, I’ll focus only on storing the Action in its own repository, easing its maintenance, discovery and release management.

As per [GitHub recommendations](https://docs.github.com/en/actions/creating-actions/about-actions#using-tags-for-release-management), one should use tags for their action releases. However, there’s a caveat here — running job fetches the Action source code, compressed as a tarball, of the commit pointed by that tag. That means the tagged commit should have a ready-to-use built code, the main JS, to run. But, isn’t it a known practice to never commit [\*node_modules/](https://byjoeybaker.com/why-you-should-never-commit-node-modules-in-nodejs)* or [*built _code](https://kentcdodds.com/blog/why-i-dont-commit-generated-files-to-master/) in VCS? Don’t we first commit [_.gitignore](https://www.toptal.com/developers/gitignore/)\* as our first step in any new project?

Exploring a way to avoid committing the built code, I checked out official GitHub actions like [setup-go](https://github.com/actions/setup-go), but alas you can find that they did commit the built code, [\*dist/index.js](https://github.com/actions/setup-go/blob/master/dist/index.js)*, though avoided committing *node_modules* by building only a single file using [@zeit/ncc](https://github.com/vercel/ncc). Nope, I can’t live with that hack, especially knowing that I can very well forget to run *npm run build \*before committing ([husky](https://github.com/typicode/husky) could solve that, though that would make my commit action a bit slow).

Exploring more actions, I liked the idea of “check in” the built code in its own release branch and then tag it, as used in [setup-kind action](https://github.com/engineerd/setup-kind) (and documented in [official Action template](https://github.com/actions/typescript-action#publish-to-a-distribution-branch)). While this is quite an elegant solution, I also realized that it still adds some manual tasks in my workflow… a perfect reason to use Github Actions to automate it!

<center>
<iframe src="https://gist.github.com/shivanshs9/895d70db073f8bb22c5c131b37332583.pibb" allowfullscreen="" frameborder="0" height="1306" width="680" scrolling="auto"></iframe>
</center>

I wrote this workflow which can be used as a template for your own Action release management needs. Let me first clarify some of my assumptions:

1. Action is versioned as per _package.json_.

1. _master_ branch is protected and any push to it will have a different package version.

1. “Build package” step outputs the built code in the _dist/_ folder and it doesn’t require _node_modules_.

This way, one can reuse standard techniques used to version their Node library (like [semver](https://www.npmjs.com/package/semver)) for JS Actions too.

The step named “Add & Commit” force adds (since it’s in _.gitignore_) the built code in the *dist/ *folder, commits it a new release branch, “release/v<version>” and tag it appropriately.

The “release” job runs after the “build” job to create a new Release from the tag used in the previous job, hence elegantly managing both packaging and releasing.

**PS:** There’s currently a GitHub bug that releases created by Action isn’t published to Marketplace, though these tags can still be used in workflows.

## Proper Versioning of your Action

Most Dev projects take [Semantic versioning](https://semver.org/) to heart and encourage developers to strike a balance between strict constraints and loose constraints, usually opting for a constraint flexible for patch releases as per [semver](https://jubianchi.github.io/semver-check/#/).

However, GitHub recommends to have a slightly different perspective when versioning your own Action in [their doc](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md#versioning):

> Binding to a major version is the latest of that major version ( e.g. v1 == “1.\*” )
> Major versions should guarantee compatibility. A major version can add new capabilities but should not break existing input compatibility or break existing workflows.

With major version binding, users can expect an Action’s major version to include necessary critical fixes and security patches, while still remaining compatible with their existing workflows. You should consider releasing a new major version whenever your changes affect compatibility.

GitHub suggests a [great way](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md#recommendations) to take the best of both worlds — semantic versioning and major version binding. Basically, follow semantic versioning practice and let the above workflow create a release on its own. Then with git, force create an [annotated tag](http://alblue.bandlem.com/2011/04/git-tip-of-week-tags.html), using the respective major version, to point to the released tag.

    git tag -fa v1 -m "Update v1 tag"
    git push origin v1 --force

Like you’ve probably guessed, there exists an Action to automate this laborious task too :D! You can use [actions-tagger](https://github.com/Actions-R-Us/actions-tagger) to automatically keep your major versions up-to-date on any new release. Here’s a template workflow you can directly use:

<center>
<iframe src="https://gist.github.com/shivanshs9/7153f283e3741569393836419566e164.pibb"  allowfullscreen="" frameborder="0" height="323" width="680" scrolling="auto"></iframe>
</center>

## Writing Tests!

> “All code is guilty until proven innocent.”

I hope you weren’t just planning to directly release untested code for your Action? :P
While it’s quite redundant at this point, as with any other piece of code, you should aim to write tests so it doesn’t just fail a valid workflow. Most actions use [Jest](https://www.npmjs.com/package/jest) for their testing needs so I guess that’s sufficient.

I do have one tip — Do ensure only tested code gets merged into master, otherwise, you may have unwittingly created a new release that already failed the tests :P.

## Some Mindblowing Actions!

<center>
<iframe src="https://giphy.com/embed/xT0xeJpnrWC4XWblEk" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/whoa-hd-tim-and-eric-xT0xeJpnrWC4XWblEk">via GIPHY</a></p>
</center>

### [Conventional Changelog Action](https://github.com/TriPSs/conventional-changelog-action)

Having difficulty managing all the PRs and version bumps in a large project? Fret not, there’s an Action for that too! Assuming that your project is following [Conventional Commits standard](https://www.conventionalcommits.org/en/v1.0.0/),

### [ChatOps Action](https://github.com/machine-learning-apps/actions-chatops)

Ever wished there’s a bot stalking your repo’s issues listening for your commands to trigger some awesome actions? Yep, [ChatOps](https://www.pagerduty.com/blog/what-is-chatops/) has invaded Github Actions too! :D

## Useful Links

- [Official JS Action template](https://github.com/actions/typescript-action)

- [Creating a JS Action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

## Ramblings

I set out to pen all the learnings I acquired while creating my own Action, [setup-k8s-operator-sdk](https://github.com/shivanshs9/setup-k8s-operator-sdk). I did mess up some initial releases and so decided to document tips I wished I would’ve known before. Thanks for reading till the end, and I would love to hear some feedback and more useful tips!
