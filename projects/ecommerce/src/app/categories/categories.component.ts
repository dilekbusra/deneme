import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Categories } from './categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css', '../app.component.css'],
  providers:[CategoryService]
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

categories: Categories[];

  ngOnInit(): void {
   this.categoryService.getCategories().subscribe(data=> {
     this.categories=data
   })
  }

}
