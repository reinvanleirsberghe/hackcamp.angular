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
 

### Component, DI and Pipe

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
 

#### Bonus
  - In sidebar component, add ordering by ASC/DESC 

#### Breakings:
  - Template syntax 

#### TODO :

 - Split in several components using the CLI. Make sure your application is still working
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
    
#### Testing (demo)
  - Component category
  - Service
  - Pipe

