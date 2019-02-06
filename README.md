# someAngular

## Brief Resume

### Data binding

Output Data
* String Interpolation --> {{data}}
* Property Binding --> [property]="data"

React to (User) Events
* Event Binding --> (event)="expression"

Combination of Both
* Two-Way-Binding --> [(ngModel)]="data"

   To use it you have to add ```FormsModule``` to the ```imports[]``` array in the AppModule
   and then also add the import  ```import { FormsModule } from '@angular/forms';```
   
### Directives
* ngIf
* ngStyle
* ngClass
* ngFor

### Decorators
import {..., Input } from '@angular/core';
@Input() element:{name: string...} -> Bind elements to parent components
  @Input('aliasname') ...

import {..., Output } from '@angular/core';
@Output() element:{name: string...} -> Bind elements to child components
  @Output('aliasname') ...

@ViewChild('selectorNameElement') serverContentInput: ElementRef;

@ContentChild('contentParagraph') paragraph: ElementRef;

### Events
serverCreated = new EventEmitter<{serverName: string}>();
onAddServer(){
  this.serverCreated.emit({serverName: 'nameofServer'});
}

### Encapsulation
Emulated is by default.
@Component({
  ...,
  encapsulation: ViewEncapsulation.Emulated // None, Native 
})

### Local references
<input
  type="text"
  class="form-control"
  #serverNameInput>
onAddServer(serverNameInput: HTMLInputElement){
  ...
  serverNameInput.value -> We get the entire element
}

### Hooks Component Lifecycle
import {..., OnInit, OnChanges, ...}
export class ... implements OnInit, OnChanges ...{
  (use of hooks)
}
ngOnChanges: Called after a bound input property changes
  ngOnChanges(changes: SimpleChanges) { console.lof(changes); }

ngOnInit: Called once the component is initialized

ngDoCheck: Called during every change detection run

ngAfterContentInit: Called after content (ng-content) has been projected into view

ngAfterContentChecked: Called every time the projected content has been checked

ngAfterViewInit: Called after the component's view (and child views) has been initialized

ngAfterViewChecked: Called every time the view (and child views) have been checked

ngOnDestroy: Called once the component is about to be destroyed

## Getting Started
Install nodejs in your computer. [Download NodeJS](https://nodejs.org/es/)

Now install globally angular with this command:
```
npm install -g @angular/cli
```

Start a new project:
```
ng new name-of-project
```
with this option, we are setting up routing and sass:
```
ng new name-of-project --routing --style=sass
```
### Working On

To set up the project use: (It should be running on localost:4200)
```
ng serve -o
```

To generate a new component use:
```
ng generate component name-of-component
```
or
```
ng g c name-of-component
```

To install more npm packages use:
```
npm install package-name --save
```

To use Http module, you need to install Angular's HttpModule
```
npm install --save @angular/http
```
and then, in 'AppMOdule, add the 'HttpModule' to the 'imports[]':
```
import { HttpModule } from '@angular/http';
...
imports: [..., HttpModule]
```

### Building

To install Bootstrap v4 use
```
npm install --save bootstrap@ jquery popper.js
```
and add the following code to 'angular.json' file:
```
"build": {...
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.sass"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.slim.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```
## Deployment

Test version
```
ng build
```

Production version
```
ng build --prod
```
Then use to open it:

```
http-serve -o
```

## Built With

* [Articles Angular 2019](https://medium.mybridge.co/learn-angular-from-top-50-articles-for-the-past-year-v-2019-90ebe34dce1d) - Top Articles about Angular
(Nº 7, 9, 11, 16, 17, 29, 31, 33, 43, 44, 45, 46, 48) 

* [Angular 7 Tutorial](https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example) - Complete tutorial angular

## Notes
The [MDN](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/button) (Mozilla Developer Network) offers nice list of all properties and events of the element you're interested in.

Before building an app, planning it by:
* Feature
* Component
* Data model
