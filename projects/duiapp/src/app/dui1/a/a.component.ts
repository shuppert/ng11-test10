import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    alert('New Button pressed');
  }

}
