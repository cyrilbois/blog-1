---
title: npm
lang: en-US
description: About the node package manager
---

[npm](https://www.npmjs.com/) is a package management and distribution system that has become the de-facto standard for distributing modules (packages) for use with Node.js.

#### Some Resources

* [website](https://www.npmjs.com/)
* [npm doc](https://docs.npmjs.com/)
* [package.json](https://docs.npmjs.com/files/package.json)
* [Doubling Down on npm](https://roost.bocoup.com/blog/doubling-down-on-npm/)
* [How To NPM](https://github.com/npm/how-to-npm) interactive tutorial
* [npm-package-store](https://github.com/travishorn/npm-package-store) - A web app that displays updates for your globally installed NPM modules.
* [Hoodie site doc](https://github.com/hoodiehq/hoodie-css/blob/feature/build-automation/DEVELOPMENT.md)
* [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)

Via a simple command-line interface you can easily publish and install node modules (packages). You can also search for and upgrade installed packages. The package format is largely based on the same CommonJS format used by Node.js based on a `package.json` file with some additoinal fields.

> if environment variable NODE_ENV is set to production, npm will ignore devDependencies when executing npm install.

## A Few Commands

```
npm init -y
npm i <packagename>
npm i -D <packagename> #save-dev
npm ls -g --depth=0 list global packages

npm help json # doc for package.json implementation
npm init              #create a new package.json file
npm init -y           #create a new package.json file no questions asked
npm i pkg             #install pkg. i is shorthand for install
npm i --global pkg    #install pkg globally. g is shorthand for global
npm i --save pkg      #install and save pkg as a RT dependency in package.json. -S is shorthand for save
npm i --save-dev pkg  #install and save pkg as a dev. dependency in package.json. -D is shorthand for save-dev
npm test              #run test script in package.json. t is shorthand
npm run               #with no params lists available scripts. See package [ntl](https://github.com/ruyadorno/ntl)
npm list --depth=0    #list locally installed packages. ls is shorthand for list
npm ls -g --depth=0   #list globally installed packages.
npm version patch     #bump version in package.json (major|minor|patch).
npm update -g pkg
```

See further in npm [shorthand list](https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties)
