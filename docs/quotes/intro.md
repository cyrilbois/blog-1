---
title: Part 1, Introduction
lang: en-US
Description: Introducing the HapiQuotes app.
---

## Abstract

This section will contain a series of tutorials on how to create a modern web app using JavaScript on both the front- and the backend. Besides creating the app, which isn't going to be very interesting in and of itself, the idea is to demonstrate how to build all those things you often need in any app using best practices and tools etc.

## The App

The app will be called **HapiQuotes** and will initially store a bunch of quotes that can be displayed on a web page. Eventually we'll add login so user's can comment, upvote and add quotes. To begin with I'll make it the old-fashioned way by using server rendered templates. Then build a REST API and a single page web app. I also have some thought on making a GraphQL version too.

## Installing needed tools and plugins

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [VSCode](https://code.visualstudio.com/)
  * [vscode-eslint](https://github.com/Microsoft/vscode-eslint)
  * [prettier-vscode](https://github.com/prettier/prettier-vscode)
  * [vetur](https://github.com/vuejs/vetur)

## Gettng Started

* Create working folder
* Init new node project `npm init -y`
* Add README.md with mission statement, starting set of user stories and tasks
* Add doc on how to install and run
* Add gitignore and editorconfig
* Add eslint linting and prettier code formatter
* Install runtime dependencies and compose HelloWorld Hapi.js server
* Add vscode run/debug settings
* Lint, Run and Commit