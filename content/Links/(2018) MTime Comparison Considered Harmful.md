---
authors: "[[apenwarr]]"
published: 2018-11-13
created: 2025-12-06
tags:
  - computing
  - operating-system
---
Makes a decent case that using a file's modified time (`mtime` on [[Unix]]) is brittle for build systems like Make, mainly because it generates too many *false negatives*: there are situations when it fails to detect an actual change to the file.