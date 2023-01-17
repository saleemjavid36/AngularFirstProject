import { Component,ViewChild,ElementRef,EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent {
  @ViewChild('nameInput') nameInputRef:ElementRef |any;
  @ViewChild('amountInput') amountInputRef:ElementRef |any;
  
  @Output() IngredientAdded = new EventEmitter<Ingredient>()
  
  onAdditem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAMount=this.amountInputRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAMount)
    // const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value)
    this.IngredientAdded.emit(newIngredient)
  }
}
