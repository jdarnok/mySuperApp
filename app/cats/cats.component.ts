import { Component, OnInit } from '@angular/core';
import {CatsService} from "../cats.service";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  moduleId: module.id,
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats:Array<any>;

  constructor(private _catsService:CatsService) {
  }

  ngOnInit() {
    this.loadCats()
  }



  loadCats() {
    this._catsService.index().subscribe(
      (response) => {
        this.cats = response.json();
      },
      (error_response) => {
        console.log(error_response)
      }
    )
  }

}
