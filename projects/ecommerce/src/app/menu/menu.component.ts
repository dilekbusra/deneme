import { Component, OnInit } from '@angular/core';
import { Menus } from './menus';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../app.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private http:HttpClient) { }
  menus:Menus[];

  ngOnInit(): void {
    this.http.get<Menus[]>("http://localhost:3000/menus").subscribe(data=>{
      this.menus=data
    })
  }

}
