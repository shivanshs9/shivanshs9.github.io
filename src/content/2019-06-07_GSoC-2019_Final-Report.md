---
templateKey: blog-post
id: GSoC-2019_Final-Report
title: 'GSoC 2019 @ VideoLAN | Testing VLC Android'
description: “Tests are stories we tell the next generation of programmers on a project.”
date: 2019-08-23T20:30:47.156Z
slug: /summers/gsoc/2019-videolan-report
headerImage: https://i.imgur.com/vBFlDzY.png
tags:
  - GSoC
  - VideoLAN
  - VLC
  - Android
  - Tests

---

## Final Report

I spent my summer 2019 working on a project under VideoLAN as a Google Summer of Code student developer. I learnt tons of exciting stuffs working with the brilliant minds behind the world's best media player. 

### Abstract
This project aims to contribute to the stability of Android port of VLC, by writing test suites for the VLC android codebase, along with libVLC and medialibrary. This will ensure that the regressions are caught by developers at an early stage and the released application stays stable.

-   Write test suites around libVLC, medialibrary and the main android codebase, so that the core framework stays stable.
-   Write instrumentation tests for the application’s interface to ensure the correct behaviours of UI views.

Project [@GSoC](https://summerofcode.withgoogle.com/projects/#6216832984285184)

### Milestones Achieved
#### Summary
- 4 commits merged and 19 commits in-review
- 157 Unit tests and 90 UI tests

### Details
- Wrote Unit Tests for:
    - View Models
        - Browser Models
        - Medialibrary Models
        - Subtitle Model
        - History Model
    - Providers
        - Medialibrary Providers
        - Browser Providers
    - Utilities
        - Models Helper
- Used Dependency Provider for injecting dependencies into tightly-coupled components, like fragments.
- Implemented Abstract Factory Manager design pattern for dependency injection of LibVLC components.
- Stubbed awkward components and generated stub data for unit tests.
- Added UI tests for:
    - Browser fragments
    - Playlist screens
    - Preference screens
-   Wrote custom ViewMatchers for Media, Preferences etc.

#### Pull Requests
- [Close button in notification to stop unpausable media](https://code.videolan.org/videolan/vlc-android/merge_requests/37) [[commit](https://code.videolan.org/videolan/vlc-android/commit/831db6c43c34fb9c1f88754b77ac749193260bb1)]
- [Marquee effect for long names in directory browser.](https://code.videolan.org/videolan/vlc-android/merge_requests/87) [[commit](https://code.videolan.org/videolan/vlc-android/commit/7b3b0830677010914d46b71558fbe7eb3c45f2af)]
- [Issue #968: Fixed playlist duplicate by name bug](https://code.videolan.org/videolan/vlc-android/merge_requests/203) [[commit](https://code.videolan.org/videolan/vlc-android/commit/d810855173b4b00e857f31e32df34cd78903e0cf)]
- [Fixes #982 - Search collapse side-effect on menu items](https://code.videolan.org/videolan/vlc-android/merge_requests/207) [[commit](https://code.videolan.org/videolan/vlc-android/commit/b3df511db54d3ef344f60e3803cf4775a7aa4685)]
- [GSoC'19 | Unit & UI tests](https://code.videolan.org/videolan/vlc-android/merge_requests/214) [[commits](https://code.videolan.org/videolan/vlc-android/merge_requests/214/commits?diff_id=5651&start_sha=10dad0fbd1718373b0e161cab2bceada52b125a7)]

### What's left to do?
- Implement proper test coverage using Jacoco.
- Integrate my unit tests with the Gitlab CI/CD pipeline.

### Things I learned
- [Kotlin](https://kotlinlang.org/) and co-routines
- Principles of Testing and Importance of TDD
- Stubbing and Mocking ([Mockito](https://site.mockito.org/) and [Mockk](https://mockk.io/))
- Working with NDK when compiling Android app
- Various design patterns for dependency injection
- Instrumentation tests ([Espresso](https://developer.android.com/training/testing/espresso))


Signing off,  
**TheFaker**