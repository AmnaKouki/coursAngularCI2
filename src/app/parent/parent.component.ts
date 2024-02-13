import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
value : number=1;

moyenne = 0;
somme = 0;
nbr = 0;
children = ['A','B']

ngOnInit(){}
computeAvg(note: number){
  this.somme += note;
  this.nbr++;
  this.moyenne = this.somme / this.nbr;
  console.log(this.moyenne);
}

}
