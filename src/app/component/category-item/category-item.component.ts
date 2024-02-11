import {Component} from '@angular/core';
import {CategoryServiceService} from "../../service/category-service.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent {

  categories: Category[] = []

  constructor(private categoryService: CategoryServiceService) {
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categories = data;
      }
    )
  }
}
