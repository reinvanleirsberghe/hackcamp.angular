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

### LVL 1 - CLI, View, Binding

#### Concepts:
   - Bootstrapping your Angular app using Angular CLI
   - Module (decorator)
   - Component (decorator)
   - Template Syntax & Binding

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
  

### LVL 1 - Component, DI and Pipe

#### Concepts:
   - Beyond Component decorator + advanced
   - Pipe
   - DI : Service Basic
   
#### Features:
  
  - Create first service ( mock data)
  - Split in several components
    - Category
    - Sidebar
  - Adding new component
    - Displayed movies counter
    - Add-To-Cart component
    - In sidebar add ordering by ASC/DESC 
  - Implement adding and counting of Add-To-Cart component
  - Implement pipe that will truncate description movie

#### Breakings:
  - Template syntax 

#### Testing
  - Component category
  - Service
  - Pipe


### LVL 1 - Routing, Rx and Advanced Service

#### Concepts
  - Routing
  - Introduction RxJS
  - Service Advanced
  
#### Features

  - Implement Login component (Template Syntax) with redirection to home page
    - Validation 
       - Email
       - Password length
  - Implement  Authentication service with Promise
  - Protect home routes if not authenticated
  - Implement Api Service with RxJs
    - Fetch all movies
      - Get only some properties
    - Fetch all categories
  - Implement details page of movies, navigation with back return  
  - Implement formatting date pipe with moment.js
  - Implement delete element in cart 
  - Implement Stats page (Observable), navigation with back return 
    - Stats page is performed with calculation
  
#### Bonus : 
  - Implement a pagination component

#### Testing : 

  - Http Service

### LVL 1 - Forms, directives, ngRX

#### Concepts
   - ngRx
   - Forms
   - Directives
   
#### Features

  - Implement Redux with ngRx
    - Setting to do
  - Add authentication in redux
  - Rewrite login component with Reactive form
    - Validation 
           - Email
           - Password length
  - Add movies handling in redux
  - Add filtering handling in redux
  - Add cart handling in redux
  - Implement dropdown to change number of item in cart
  - Implement undo in cart
  - Implement comment service ( CRUD)
  - Implement comment component for CRUD ( Reactive Form)
    - Validation :
      - Author required, begin with a Uppercase letter
      - Comment required, 150 character max, block if contains bad words
 
#### Breaking
  - Setup Redux
    
#### Testing
  - Reducer
  - Directive
  - Validator class
