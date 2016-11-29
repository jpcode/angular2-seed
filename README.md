## Usage

### Basic
* Best practices in file and application organization for Angular 2.
* Using Bootstrap as framwork ui template, you can override it with your own theme.
* Ready to go build system
* Hot Module Replacement with Webpack and [@angularclass/hmr](https://github.com/angularclass/angular2-hmr) and [@angularclass/hmr-loader](https://github.com/angularclass/angular2-hmr-loader)


### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**

```bash
# change directory to our repo
cd dir_name

# install the repo with npm
npm install

# install TypeScript typings
npm run typings-install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

<br>
## File Structure
Using the module approach in App. This is the new standard for developing Angular apps and a great way
to ensure maintainable code by encapsulation of our behavior logic. A module is basically a self contained
app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class.
 Here's how it looks:


     ├── config/                         - Our basis configuration
     │   ├── helpers.js                  - helper functions for our configuration files
     │   ├── webpack.common.js           - common webpack configigurations
     │   ├── webpack.dev.js              - our development webpack config
     │   └── webpack.prod.js             - our production webpack config
     ├── src/                            - our source files that will be compiled to javascript
     │   ├── main.browser.ts             - our entry file for our browser environment
     │   ├── index.html                  - Index.html: where we generate our index page
     │   ├── polyfills.ts                - our polyfills file
     │   ├── vendor.ts                   - our vendor file
     │   ├── app/                        - WebApp: folder
     |       ├──module1/                 - Module1: A module example
     |          ├──module1.module.ts     - Entry point to your module
     |          ├──module1.component.ts  - Componenet definition
     |          ├──module1.template.html - Your template definition 
     │   │   └── index.ts                - Index.ts: a simple version of our App module components
     │   └── assets/                     - static assets are served here
     │       ├──icon/                    - our list of icons from www.favicon-generator.org
     │       ├──robots.txt               - for search engines to crawl your website
     │       └──humans.txt               - for humans to know who the developers are
     ├── tslint.json                     - typescript lint config
     ├── typedoc.json                    - typescript documentation generator
     ├── tsconfig.json                   - config that webpack uses for typescript
     ├── package.json                    - what npm uses to manage it's dependencies
     └── webpack.config.js               - webpack main configuration file

<br>
## Configurations
You will find base configurations in `config/` folder, currently using Webpack bundler.
### Set app name
* Go to `config/`
* Open `webpack.common.js` file
* Modify the following:

<pre>
{
  title: 'Your app title',
  baseUrl: '/apptitle'
}
</pre>
`title` is used in the tag title in the `index.html` of the app and it can be used in different places with `<%= webpackConfig.metadata.title %>`.<br>
`baseUrl` is used in the build process to generate the app into `dist/apptitle` folder and the proper path, like `https://mydomain/apptitle`.
<br>

### Set base hash

Go to `src/app/app.config.ts` and modify `config.title` value to the proper app name.

<br>
## Getting Started

### Installing
* `npm install` to install all dependencies
* `npm run server` to start the dev server in another tab

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

<br>
## Other commands
### test
```bash
npm run test  -- Check the examples in page2 module.
```
### docs

```bash
npm run typedoc  
```
### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

<br>
## Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external
Type Definitions with @types

i.e, to have youtube api support, run this command in terminal:

```
npm i @types/youtube @types/gapi @types/gapi.youtube
```

In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```,
add these to **"src/custom-typings.d.ts"** to make peace with the compile check:

```
es6
import '@types/youtube';
```

### Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```

<br>
