bisecting

git switch -
git bisect reset

git bisect start
git bisect bad

process

git bisect good eff5d87
Bisecting: 58 revisions left to test after this (roughly 6 steps)
[482f3920d932e2e7129c837782a38dd53f1f82af] chore: fix eslint issue

git bisect good
Bisecting: 29 revisions left to test after this (roughly 5 steps)
[de848239130e23a9e3509c0d0e85902b0b859dc3] chore: upgrade workspace typescript

git bisect bad
Bisecting: 14 revisions left to test after this (roughly 4 steps)
[b12beb4596983cbd1c7792e88b24d49421971964] chore: remove LaunchDarkly from the codebase

git bisect bad
Bisecting: 6 revisions left to test after this (roughly 3 steps)
[dcf49a1d966979d9a71fa9dfb58cd9d9af38b7f9] fix: localized page not loading

git bisect good
Bisecting: 3 revisions left to test after this (roughly 2 steps)
[8396418364e659a0c084e3004c35d24decb62157] chore: make thunks creation more readable

git bisect bad
Bisecting: 0 revisions left to test after this (roughly 1 step)
[983c33bd7c82c9a13ba9eeb731d18165673d5154] docs: debug tracing in Readme [skip ci]

git bisect bad
Bisecting: 0 revisions left to test after this (roughly 0 steps)
[e13472a57e0aca3449429703588ea54906142dc5] feat: buffer mount events till after initialization

git bisect bad
e13472a57e0aca3449429703588ea54906142dc5 is the first bad commit
commit e13472a57e0aca3449429703588ea54906142dc5
Author: joshua wootonn <josh@makeswift.com>
Date:   Fri Aug 9 13:18:03 2024 -0400

    feat: buffer mount events till after initialization

    Co-authored-by: Fikri Karim <hello@fikrikarim.com>

 packages/leo/src/legacy/builder/host-connection.ts | 17 +++++++++--
 .../src/legacy/builder/reducer/host-connection.ts  | 17 ++++++++++-
 .../Canvas/components/PreviewFrame/index.tsx       | 33 ++++++++++++++++++----
 3 files changed, 59 insertions(+), 8 deletions(-)
 