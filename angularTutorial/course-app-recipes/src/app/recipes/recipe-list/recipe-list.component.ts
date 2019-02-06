import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply a test',
    'https://www.metro.ca/userfiles/image/recipes/spaghetti-b%C5%93uf-hache-vin-rouge-4671.jpg'),
    new Recipe('A test recipe', 'This is a simply a test',
    'https://www.metro.ca/userfiles/image/recipes/spaghetti-b%C5%93uf-hache-vin-rouge-4671.jpg'),
    new Recipe('A test recipe', 'This is a simply a test',
    'https://www.metro.ca/userfiles/image/recipes/spaghetti-b%C5%93uf-hache-vin-rouge-4671.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
