import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { CommonModule } from '@angular/common'; // Import du CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
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
