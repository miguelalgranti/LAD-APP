import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy { 
recipes: Recipe[];
subscription: Subscription;

  constructor(private Recipeservice: Recipeservice, private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit()  {
    this.subscription = this.Recipeservice.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.Recipeservice.getRecipes();
  }
onNewRecipe() {
this.router.navigate(['new'], {relativeTo: this.route});
}
ngOnDestroy() {
    this.subscription.unsubscribe();
}
}
