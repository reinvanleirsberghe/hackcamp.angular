# Hackcamp.Angular  with [Angular CLI](https://github.com/angular/angular-cli)  1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## ROADMAP
 

### Forms, directives, ngRX

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

  - Setup redux with ngRX in core.module.ts, look at the _templates
    and get the core.module.ts that will replace the current files in
    your project
  - AuthService is using Promise to login, let's rewrite with Observable
  - Now, we will manage all our authentication through redux, so let's create
    some actions and reducer to handle all this stuff. You will find 
    all boilerplate in _templates. Copy the state folder in the core 
    folder of your app 
    - import the function reducer in store.ts as store in core.module.ts
    - Fix errors in actions.ts, reducer.ts, auth-state.service.ts
    - in app.component check if we have token in local storage and dispatch login
  - Refractor Auth Guard due to modification done in AuthService
// You should have a application running and working completly with

// all the authentication handled into redux
// Let's continue and learn Reactive Form
  - LoginComponent was written using Template Syntax, so rewrite using 
    Reactive form
    - Replace the login folder of your app by the login in _template
    - Fix all bugs :)
    - Perform validation using Reactive Form
           - Email:
            - Required
            - Email so rewrite the email directive to the Email validator
              the object error should be now {email:true}
           - Password 
            - Required
            - MinLength 4
            - MaxLength 24
            
// Reactive Form is really cool feature and you wanna like it
// Now let's go back on redux a bit and move all your data in redux
  - Copy the data folder in _templates to the folder state in core folder
  - Implement all actions and reducers
  - In store.ts at the end of the file, compose your function that retrieve 
  movies, genres and categories from store
  - Refractor the api.service to dispatch all data in redux so replace 
   the api.service.ts of your app by the api.service.ts in _templates
  - Fix all bugs to make your api.service working again
  
// You should have a application running and working completly with

// The last thing we will implement with redux will be in the movie details
// page. We will add a comment system
  
  - Create a new reducer for comment and actions
    - Actions to implement
      - Add a comment for the specific movie
      - Delete the comment for the specific movie
      - Update the comment for specific movie
    - Everything will be in memory, the goal is just to create everything
    from scratch.
      - Display the list of comment of the current movie stored in the store
      - The comment form HAVE TO use Reactive Form. You will find the sample
      template in °_templates
        - Validations
           - Author 
            - required 
            - beginWithUppercaseLetter => to implement
           - Comment 
            - required
            - 200 character max
            - If the author contains Harry, you should limit the number of
            character to 100
   - You can go further by saving you comment actually into the backend
    => POST /movies/:movieId/comments
 
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
