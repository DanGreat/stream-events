# How i approach solving my problem

In approaching the project I had to study the requirement needed which was to enable users
see an overview of upcoming events and fixtures. So that they don’t miss the next match of my favourite sports team.

1, I thought out what CSS framework to use, so I went with Bootstrap
2, I choose to use also the Bootstrap icon library
3, For a litte fade effects on the events list I used Animate.css library
4, Added the HttpClientModule to my app.module.ts file to enable me fetch request from an API

# How i verified my solution worked correctly

1, I tested the API endpoint using post-man to be sure it was a request i could fetch records from
2, Using Chrome's browser debugging tool, I inspected some stylings not properly being applied
3, For every functions created i ensured it was doing the required action

# How long i spent on the excercise

I spent relatively 5 to 6 hours making this excercise

# What i would add if you had more time and how?

I believe with the design immplemented i would not add anything more

# To setup the application

1, Extract the zip files into an empty directory
2, Open the directory with your VS code and open up your terminal
3, Alternatively to `step 2` you can open the directory in any terminal
4, Run `npm i` to install the dependencies to the projects
5 Run `ng serve -o` to serve it up to your browser

# StreamEventApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

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
