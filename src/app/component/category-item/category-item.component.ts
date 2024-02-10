import {Component} from '@angular/core';
import {CategoryServiceService} from "../../service/category-service.service";
import {Category} from "../../model/category";
import {AuthenticationServiceService} from "../../service/security/authentication-service.service";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent {

  categories: Category[] = []

  constructor(private categoryService: CategoryServiceService,
              private auth: AuthenticationServiceService) {
  }

  ngOnInit()
    :
    void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categories = data;
      }
    )
  }

  isLogin(){
    return this.auth.isLogin()
  }
}
