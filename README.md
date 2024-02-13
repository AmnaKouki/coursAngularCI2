# Framework Angular

`le 6-2-2024`
### types de binding

- `{{}}` : 	string interpolation
- `[]`   :	property binding
- `()`   :	event binding
- `[()]` :	two-way binding
--------------------------

``` html
<!-- parent.component.html: -->
<app-child>{{value}}</app-child>

<!-- child.component.html -->
<ng-content ></ng-content>

```
*ng content is a directive that allows us to pass content from the parent component to the child component.* 

----------------
l'initialisation sous `ngOnInit` se fait avant l'initialisation par des constructeur (page 122-123 )

--------------

 ### **ngAfterOnInit**
 look for usage

 
## EventEmitter
Créer un evenement comme `submit` `click`
 ```typescript
 @Output() message = new EventEmitter<number>();
 ```
utilisation :
```html
<app-child *ngFor="let child of children" 
[nom]="child"
(message)="computeAvg($event)">
</app-child>
```
**Remarque :**
- `$event` est toujours utilisée sans la declarée
----------
## Angular components :
- ng-template
- ng-container
- ng-content
- router-outlet
---------------------

## Navigate between pages

import the service "Router" in the constructor
add a method "onContact"
```typescript
onContact(){
 this.router.navigate(['/contact']);
}
```
On the html page, add a button:
```html
<button (click)="onContact()">Go to contacts</button>

```

## Navbar - clique qur le titre de la page
`RouterLink` ne charge pas la page de nouveau.

```
 <a class="navbar-brand" routerLink="/">⭐ First Project ⭐</a>
```

`href` charge la page de nouveau :
``` 
<a class="navbar-brand"  href="/">⭐ First Project ⭐</a>
```

## Router

L'utilisation de **' ** '**  poour tous les autres routes non déclarées
```typescript
const routes: Routes = [
  { path: '**', component: NotFoundComponent },
]
  ```
