// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared for 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.


function createRecipe(mealName,cuisineType,mealComplexity,mealIngredients,prepTime,prepInstruction){
    var newMeal={
        name:mealName,
        type:cuisineType,
        complexity:mealComplexity,
        ingredients:mealIngredients,
        time:prepTime,
        instructions:prepInstruction,
        allIngredientsPrint:function(){return newMeal.ingredients},
        changeCuisine:function(newCuisine){
            newMeal.type=newCuisine;
            return newMeal.type;
        },
        deleteIngredient:function(ingredientDel){
            var res=[];
            for(var i=0;i<newMeal.ingredients.length;i++){ 
                
            if (ingredientDel!==newMeal.ingredients[i]){
                 res[res.length]=newMeal.ingredients[i];
            }
        }
            return res;
        },
        timeprep:function(){
            if(newMeal.time<=15){
                return true;
            }
            else {return false};
        }
    }

    return newMeal;
}

var myMeal=createRecipe("Palacinke","American",3,["jaja","brasno","secer","jogurt"],20,"smuititi sve sastojke i peci");
console.log(myMeal);
console.log(myMeal.allIngredientsPrint());
console.log(myMeal.changeCuisine("Serbian"));
console.log(myMeal.deleteIngredient("jaja"));
console.log(myMeal.timeprep());

var pica=createRecipe("Pica","Italijanska",4,["testo","kecap","sir"],10,"ispeci");
console.log(pica);
console.log(myMeal.changeCuisine("Serbian"));