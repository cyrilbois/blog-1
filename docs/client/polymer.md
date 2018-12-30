---
title: Polymer.js
lang: en-US
date: 2018-08-01
description: The Polymer JavaScript Framework
---

* An open-source library for using and creating web components
* Abstracts away much of the web component boilerplate and allows you to focus on the functionality
* Provides a set of polyfills for browsers
* Data-binding
* A layer of abstraction between your app and the web standards making the web standards easier to use

Polyer is for webcomponents what jQuery  was for DOM manipulation

## The Polymer CLI

* polymer help - lists commands and options
* polymer init - for scaffolding projects or components
* polymer install - installs dependencies same as bower install
* polymer serve - runs development server

## Installing Components

Find at https://www.webcomponents.org


## Creating Components

A Polymer component consists of the structure, visual appearance and behavior. The name must contain a hyphen (-) for the browser to know it is a custom element. The structure is denoted by the template-tag. The appearance is added using a style tag. Behavior is placed outside the template within script-tag.

```html
<my-element id="my">
	<template>
		<style>

		</style>
		<script>

		</script>
	</template>
</my-element>
```
