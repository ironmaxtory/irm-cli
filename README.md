# irm-cli  [![npm package](https://img.shields.io/npm/v/irm-cli.svg)](https://www.npmjs.com/package/irm-cli)

A simple CLI for scaffolding common projects.

### Installation

Prerequisites: [Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g irm-cli
```

### Usage

``` bash
$ irm init <template-name> <project-name>
```

Example:

``` bash
$ irm init webpack-simple my-project
```

The above command pulls the template from [irm-github/webpack-simple](https://github.com/irm-github/webpack-simple), prompts for some information, and generates the project at `./my-project/`.
