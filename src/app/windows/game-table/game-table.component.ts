import { Component, OnInit } from '@angular/core';
import { ChildWindowService } from 'src/app/services/child-window.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {

  constructor(private childWindow : ChildWindowService) { }

  ngOnInit(): void {
  }

}
