import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { CommonModule } from '@angular/common'; // Import du CommonModule
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

  animations : [ trigger('animobjectifs' ,[
    transition ( '*=>*' ,[
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms',[ animate ( '.6s ease-in' , keyframes ([
    style({opacity: 0, transform: 'translateY(-75%)', offset: 0}), style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
    style({opacity: 1, transform: 'translateY(0)', offset: 1}), ]))]),{optional: true})
    ]) ])]


})
export class HomeComponent {
  nbItems = 0 ; 
  btnText: string = 'Ajouter un élément';
  objectifText : string ='';
  objectifs :string[] = [];

  ngOnInit(){
    return this.nbItems = this.objectifs.length;
  }

  ajoutItem(){
      // Ajouter uniquement si le texte n'est pas vide
      this.objectifs.push(this.objectifText.trim());
      this.nbItems = this.objectifs.length; // Mettre à jour le compteur
      this.objectifText = ''; // Réinitialiser le champ
    
  }
}
