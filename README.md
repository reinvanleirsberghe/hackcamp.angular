# Hackcamp.Angular  with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## ROADMAP

### LVL 1 - CLI, View, Binding

#### Concepts:
   - Bootstrapping your Angular app using Angular CLI
   - Module (decorator)
   - Component (decorator)
   - Template Syntax & Binding
   
#### Important links
  - [Template Syntax and built-in directives](https://angular.io/guide/template-syntax)

#### Features:

  - Display all mock movies
    - Picture
    - Hover information
  - Display all mock categories
  - Filter by category
  - Make active a category when selected
  - Toggle Sidebar
  - Implement search in sidebar
  
#### Breakings:
  - Template Syntax & Binding
  - Module / Component decorator 
  - Movies not displayed
  - Categories not displayed
  - Category selected not styled
  - Filtering by categories not working
  - Sidebar menu not working
  - Search in sidebar not working
  - Hovering details movies not working

#### TODO

Estimated time: 2 hours

- Bootstrap the application
- Inside the CLI-View-Binding, bootstrap the AppComponent
- Fix the AppComponent and mock data
- Fix the AppComponent's template
- Implement the following features
  - Display all mock movies
    - Picture
    - Hover information ()
  - Display all mock categories
  - Filter by category
  - Make active a category when selected
  - Toggle Sidebar
  - Implement search in sidebar


### LVL 1 - Component, DI and Pipe

#### Concepts:
   - Beyond Component decorator + advanced
   - Pipe
   - DI : Service Basic
   
#### Important links
  - [Template Syntax and built-in directives](https://angular.io/guide/template-syntax)
  
#### Features:
  
  - Display all mock movies
     - Picture
     - Hover information
   - Display all mock categories
   - Filter by category
   - Make active a category when selected
   - Toggle Sidebar
   - Implement search in sidebar

#### Breakings:
  - Template syntax 

#### TODO :

Estimated time: 3 hours

 - Split into several components using the CLI. Make sure your application is still working
    - MovieList => movie-list
      - Movie => movie
        - MovieHoverInfo => movie-hover-info
    - Menubar => menubar
    - Sidebar => sidebar
    - Header => header
  - Implement pipe using the CLI that will truncate movie's overview 
    - The pipe's name is 'Shorten' => hint: shorten method
  - Create API service using the CLI with mock data
      - getMovies return only 50 'movies' from the mocks
      - getCategories return 'categories' mocks
      - getGenres return 'genres' mocks
  - Introduction to lifecycle hooks
    - ngOnInit
      - Use API service in the component to get your data instead of the
      global mock data
    - ngOnChanges
      - Build a light mapper from Movie to MovieLite (utils.ts)
    - ngOnDestroy (demo)

#### Testing
  - Component category
  - Service
  - Pipe


### LVL 1 - Routing, Rx and Advanced Service

Estimated time: a day


#### Concepts
  - Routing
  - Introduction RxJS
  - Service Advanced
  - DI advanced
  - Attribute Directive - Validators Directives
  
#### Important links
  - [Template Syntax and built-in directives](https://angular.io/guide/template-syntax)
  - [Router](https://angular.io/guide/router)
  - [Http](https://angular.io/tutorial/toh-pt6)
  - [new Http client called HttpClient](https://angular.io/guide/http)
  - [DI](https://angular.io/guide/dependency-injection-in-action#define-dependencies-with-providers)
  - [Form Validation](https://angular.io/guide/form-validation#form-validation)
  
  
#### Features
   - Display all mock movies
     - Picture
     - Hover information
   - Display all mock categories
   - Filter by category
   - Make active a category when selected
   - Toggle Sidebar
   - Implement search in sidebar  
   
   - Login with email/password
   - Validation Form
   - Routing to Home, Stats and Details page
   - Use Http to fetch data with Promise and Observable
   - Using new HttpClient
   - Usage of Observable operators such as map, filter, from...
   

#### TODO

  - Setup routes in app.routing.module
    - add routes with  path:'login', component:LoginComponent and
      patchMatch full
    - add default routes that redirect to 'login'
  - Fix issues in LoginComponent template
  - Add Validation on email and password input
      - Email
        - required
        - email => Use the email validators (./validators/email-validators.directive.ts)
          to validate if the input value of email is a real email
      - Password
        - required
        - minLength
        - maxLength
  - Implement AuthService functions:
    - login with Promise
    - isAuthenticated
  - Implement login function in LoginComponent
  - Your application should be working at this stage

/!\ 

  From now, it is forbidden to use global variables, everything should
  go through the dependency injection ( di.ts)
  
/!\  
  
  - Open di.ts and implement all dependency injection that require a global
    variable
    - Refractor AuthService to inject the server url using dependency injection
  - app.routing.module.ts
    - add routes with  path:'home', component:HomeComponent and
      patchMatch full
    - Replace the redirection of the default routes by 'home'
    - Protect 'home' routes i.e only authenticated user can access else 
      we redirect to 'login' routes (Hint: CanActivate Guard)
  - Refractor HomeComponent to inject the picture CDN url using dependency injection
  - Replace the api.service.ts by _api.service.ts ( remove underscore)
  - Implement all functions in api.service.ts using rxJS (! No global references). You have to
    use the new HttpClient provided in HttpClientModule
    - getMovies => call HTTP to '/movies'
    - getMovieById => call HTTP to '/movies/:id'
    - getOnlyMovies => call HTTP to '/movies'
    - getCategories => Observable of mock data
    - getCategories => Observable of mock data
    - getGenres => call HTTP to '/genres'
  - Fix issues HomeComponent
  - Your application should be working at this stage
  
  - app.routing.module.ts
      - add routes with  path:'details/:id', component:MovieDetailsComponent and
        patchMatch full
      - Protect 'details/:id' routes i.e only authenticated user can access else 
      we redirect to 'login' routes 
  - Clicking on a movie card should redirect to '/details/idCardClicked' (
    you should not do it programmatically i.e using the click event for example)
  - Fix issues in MovieDetailsComponent template
  - Implement details movie display
  
  - app.routing.module.ts
      - add routes with  path:'stats/', component:StatsComponent and
          patchMatch full
      - Protect 'stats' routes i.e only authenticated user can access else 
        we redirect to 'login' routes 
  - Add a link in the menu bar to redirect to stats page
  - Implement all steps in StatsComponent
  - Implement Stats page (Observable), navigation with back return 

#### Bonus : 

  - Reorganise the folder  using different modules
  - Implement a pagination component
  - Implement formatting date pipe with moment.js
  
#### Testing : 
  - Http Service
  
  
### LVL 1 - Routing, Rx, Advanced Service, Module archiecture

Estimated time: a day

#### Concepts
  - Routing
  - Introduction RxJS
  - Service Advanced
  - DI advanced
  - Attribute Directive - Validators Directives
  
#### Important links
  - [Template Syntax and built-in directives](https://angular.io/guide/template-syntax)
  - [Router](https://angular.io/guide/router)
  - [Http](https://angular.io/guide/http)
  - [DI](https://angular.io/guide/dependency-injection-in-action#define-dependencies-with-providers)
  - [Form Validation](https://angular.io/guide/form-validation#form-validation)
  
  
#### Features
   - Display all mock movies
     - Picture
     - Hover information
   - Display all mock categories
   - Filter by category
   - Make active a category when selected
   - Toggle Sidebar
   - Implement search in sidebar  
   
   - Login with email/password
   - Validation Form
   - Routing to Home, Stats and Details page
   - Use Http to fetch data with Promise and Observable
   - Usage of Observable operators such as map, filter, from...
   - Restructure the application in module: Auth, Home, Core, Shared
   

#### TODO

  - Setup routes in app.routing.module
    - add routes with  path:'login', component:LoginComponent and
     patchMatch full
    - add default routes that redirect to 'login'
  - Fix issues in LoginComponent template
  - Add Validation on email and password input
      - Email
        - required
        - email => Use the email validators (./validators/email-validators.directive.ts)
          to validate if the input value of email is a real email
      - Password
        - required
        - minLength
        - maxLength
  - Implement AuthService functions:
    - login with Promise
    - isAuthenticated
  - Implement login function in LoginComponent
  - Your application should be working at this stage

/!\ 

  From now, it is forbidden to use global variables, everything should
  go through the dependency injection ( di.ts)
  
/!\  
  
  - Open di.ts and implement all dependency injection that require a global
    variable
    - Refractor AuthService to inject the server url using dependency injection
  - app.routing.module.ts
    - add routes with  path:'home', component:HomeComponent and
      patchMatch full
    - Replace the redirection of the default routes by 'home'
    - Protect 'home' routes i.e only authenticated user can access else 
    we redirect to 'login' routes (Hint: CanActivateGuard)
  - Refractor HomeComponent to inject the picture CDN url using dependency injection
  - Replace the api.service.ts by _api.service.ts
  - Implement all functions in api.service.ts using rxJS (! No global references)
    - getMovies => call HTTP to '/movies'
    - getMovieById => call HTTP to '/movies/:id'
    - getOnlyMovies => call HTTP to '/movies'
    - getCategories => Observable of mock data
    - getCategories => Observable of mock data
    - getGenres => call HTTP to '/genres'
  - Fix issues HomeComponent
  - Your application should be working at this stage
  
  - app.routing.module.ts
      - add routes with  path:'details/:id', component:MovieDetailsComponent and
        patchMatch full
      - Protect 'details/:id' routes i.e only authenticated user can access else 
      we redirect to 'login' routes 
  - Clicking on a movie card should redirect to '/details/idCardClicked' (
    you should not do it programmatically i.e using the click event for example)
  - Fix issues in MovieDetailsComponent template
  - Implement details movie display
  - app.routing.module.ts
      - add routes with  path:'stats/', component:StatsComponent and
          patchMatch full
      - Protect 'stats' routes i.e only authenticated user can access else 
        we redirect to 'login' routes 
  - Add a link in the menu bar to redirect to stats page
  - Implement all steps in StatsComponent
  - Implement Stats page (Observable), navigation with back return 

#### Bonus : 

  - Reorganise the folder  using different modules
  - Implement a pagination component
  - Implement formatting date pipe with moment.js
  
#### Testing : 
  - Http Service

### LVL 1 - Forms, directives, ngRX

#### Concepts
  - ngrx
  - Forms
  - Directives
  - Validators Directives
  
#### Important links
  - [Template Syntax and built-in directives](https://angular.io/guide/template-syntax)
  - [Router](https://angular.io/guide/router)
  - [Http](https://angular.io/guide/http)
  - [DI](https://angular.io/guide/dependency-injection-in-action#define-dependencies-with-providers)
  - [Form Validation](https://angular.io/guide/form-validation#form-validation)
  - [ngrx store](https://github.com/ngrx/store)
  - [Validators](https://angular.io/api/forms/Validators)

#### Features

  - Implement Redux with ngRx
    - Setup
  - Rewrite auth service with observable
  - Add authentication in redux
    - create actions
    - create reducer
    - in app.component check if we have token in local storage and dispatch login
  - Refractor auth guard
  - Rewrite login component with Reactive form
    - Perform validation using Reactive Form
           - Email
            - Rewrite email directive to eEmail validator
              the object error shoulde {email:true}
           - Password length
  - Create data reducers and actions
    - movies
    - categories
    - genres
  - Refractor api.service to dispatch all data in redux
  - Add comment 
    - create action, reducers
    - in service implement
      - addComment
      - deleteComment
      - getAllComments
  - Implement comment service ( CRUD)
  - Implement comment component for CRUD ( Reactive Form)
    - Validation :
      - Author 
       - required       
       - beginWithUppercaseLetter => to implement
      - Comment required, 150 character max, block if contains bad words
        async
  - Add filtering handling in redux
    - Add cart handling in redux
    - Implement dropdown to change number of item in cart
    - Implement undo in cart
#### Breaking
  - Setup Redux
  
#### Bonus
- add search in redux
- add ui in redux
- RouterStore
    
#### Testing
  - Reducer
  - Directive
  - Validator class
