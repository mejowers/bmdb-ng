import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(
    private systemSvc: SystemService
  ) { }

  ngOnInit(): void {
    this.menuItems = [
      new MenuItem("Movie", "/movie-list", "Movie List"),
      new MenuItem("Actor", "/actor-list", "Actor List"),
      new MenuItem("Credit", "/credit-list", "Credit List"),
      new MenuItem("Genre", "/genre-list", "Genre List"),
      new MenuItem("MovieGenre", "/movie-genre-list", "Movie Genre List"),
      new MenuItem("User", "/user-list", "User List"),
      new MenuItem("Logout", "/user-login", "User Login")
      
    ];

  }

}
