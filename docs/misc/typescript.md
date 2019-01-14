---
title: TypeScript
lang: en-US
date: 2019-01-07
description: A introduction to using TypeScript.
---

TypeScript is a superset of ECMAScript that brings us latest features, features that don't exist yet, strong typing.

## Resources

* [Website](http://www.typescriptlang.org/)
* [Definitely Typed](http://definitelytyped.org/) - The repository for high quality TypeScript type definitions
* [Kurata Pluralsight Course](https://app.pluralsight.com/library/courses/angular-typescript/table-of-contents)
* [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/)
* [Getting Started with TypeScript](http://blog.teamtreehouse.com/getting-started-typescript)
* [Mastering TypeScript](https://www.packtpub.com/web-development/mastering-typescrip)
* [ALM](http://alm.tools/) - A cloud ready IDE for TypeScript
* [Hapi With Typescript](https://hapibook.jjude.com/book)

## Install

```
npm i -g typescript
tsc -v
```

### Project Init

Run the command `tsc --init` to create a `TSConfig.json`file. Per default you can just run `tsc` in your project folder to compile all TypeScript files to .js-files.

Typescript Build in VS Code Ctrl+Shit+B -> Configure Task Runner creates .settings/tasks.json

## Types

* string
* number - Only numbers, no int vs float though
* boolean - Can be true or false, not 0/1 or ''/'something'
* any - Any type
* tuples

TypeScript unlike JavaScript doe not have dynamic types. This means that the following won't get passed the compiler:

```
let myVar; // -> any
let name = "LuKa"; // -> implicit string
let age: number; // -> explicit number
name = 4; // Will cause compilation error

-> error TS2588: Cannot assign to 'name' because it is a constant
```

By default array content is restricted by what you added or defined:

```ts
const hobbies = ["Cooking", "Sports"]; // hobies: any fixes issue
hobbies.push(100);
console.log(typeof hobbies);

-> Argument of type 100 is not assignable to parameter of type 'string'.
```

```ts
// tuples: define what and in what order is allowed
const addresses: [string, number, string] = ["Storåvägen 1", 68500, "Kronoby"];
console.log(addresses);
```
