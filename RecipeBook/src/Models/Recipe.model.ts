import {ingredient} from "./Ingredient.modle"
export class Recipe{

recipeName:string;
recipeDescription:string;
recipeImage:string;
recipeingredients : ingredient[]=[];
constructor(rN:string,rImage:string,rdesc:string){
    this.recipeName=rN;
    this.recipeImage=rImage;
    this.recipeDescription=rdesc;
    this.MockIngrediants();

}

MockIngrediants() {
    let myi:ingredient;
    let fname:string[]=this.fruitnames();
    
    
    fname.forEach( (arrayItem) => {
       
        
       const x= Math.round(Math.random() * 10)  ;
       myi= new ingredient(arrayItem,x);
       this.recipeingredients.push(myi);
        
    });


   
}


fruitnames()
{
 let fname:string[]=[];
 fname.push("Abiu");
fname.push("Açaí");
fname.push("Acerola");
fname.push("Ackee");
fname.push("African cucumber");
fname.push("Apple");
fname.push("Apricot");
fname.push("Avocado");
fname.push("Banana");
fname.push("Bilberry");
fname.push("Blackberry");
fname.push("Blackcurrant");
fname.push("Black sapote");
fname.push("Blueberry");
fname.push("Boysenberry");
fname.push("Breadfruit");
fname.push("Buddha's hand (fingered citron)");
fname.push("Cactus pear");
fname.push("Canistel");
fname.push("Cashew");
fname.push("Cempedak");
fname.push("Cherimoya (Custard Apple)");
fname.push("Cherry");
fname.push("Chico fruit");
fname.push("Cloudberry");
fname.push("Coco De Mer");
fname.push("Coconut");
fname.push("Crab apple");
return fname;

}

}
 
