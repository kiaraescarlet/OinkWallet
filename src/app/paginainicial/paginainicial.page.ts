import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-paginainicial',
  templateUrl: './paginainicial.page.html',
  styleUrls: ['./paginainicial.page.scss'],
})
export class PaginainicialPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

openMenu(){

 this.menu.toggle("menuprincipal");

}


}
