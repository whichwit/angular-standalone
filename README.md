# Angular Standalone Template

Opininated template repositotry to quickly spin up Angular-based SPA for deployment to GitHub Pages. Minor modifications are required to support sub-repository URL format (`https://<yourname>/githtub.io/<repository>`) utilized by GitHub Pages.

## Required Modifications

- Change `servePath` in `angular.json` so `ng serve` can mimic the added base
- Change `<base href="/angular-standalone/">` to repository name in `index.html` 

## Features

- Initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.
- NgModule-less setup to leverage now stable Angular Standalone components, among other features introduced in v15.
- [@ngrx/store](https://ngrx.io/guide/store) for statement management
- [@ngrx/component](https://ngrx.io/guide/component) for easier view management

## TODO
- `Warning: /home/le/github.com/angular-standalone/node_modules/ngrx-store-localstorage/fesm2020/ngrx-store-localstorage.mjs depends on 'deepmerge'. CommonJS or AMD dependencies can cause optimization bailouts.
For more info see: https://angular.io/guide/build#configuring-commonjs-dependencies`