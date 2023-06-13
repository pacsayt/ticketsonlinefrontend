# ticketsonlinefrontend
Frontend part of the ticketsonline/webmvc in Angular

// --------------------------------------------------------------------------------------------
// Readme.md generated by ng new <ticketsonlinefrontend> 
# Ticketsonlinefrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

// --------------------------------------------------------------------------------------------
Difference between npx and npm?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm

NP'M' - 'M'anages packages but doesn't make life easy executing any.
NP'X' - A tool for e'X'ecuting Node packages.

NPM:
One might install a package locally on a certain project:

npm install some-package
Now let's say you want NodeJS to execute that package from the command line:

$ some-package
The above will fail. Only globally installed packages can be executed by typing their name only.

To fix this, and have it run, you must type the local path:

$ ./node_modules/.bin/some-package
You can technically run a locally installed package by editing your packages.json file and adding that package in the scripts section:

{
  "name": "whatever",
  "version": "1.0.0",
  "scripts": {
    "some-package": "some-package"
  }
}
Then run the script using npm run-script (or npm run):

npm run some-package
NPX:
npx will check whether <command> exists in $PATH, or in the local project binaries, and execute it. So, for the above example, if you wish to execute the locally-installed package some-package all you need to do is type:

npx some-package
Another major advantage of npx is the ability to execute a package which wasn't previously installed:

$ npx create-react-app my-app
The above example will generate a react app boilerplate within the path the command had run in, and ensures that you always use the latest version of a generator or build tool without having to upgrade each time you’re about to use it.

Use-Case Example:
npx command may be helpful in the script section of a package.json file, when it is unwanted to define a dependency which might not be commonly used or any other reason:

"scripts": {
    "start": "npx gulp@3.9.1",
    "serve": "npx http-server"
}

Call with: npm run serve
