import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-personnal-xp',
  templateUrl: './personnal-xp.component.html',
  styleUrls: ['./personnal-xp.component.scss']
})
export class PersonnalXpComponent implements OnInit {
  @Input() avatar: string = "https://www.magimix.com/webroot-mobile/img/loading.gif";
  @Input() xp: number = 0;
  @Input() previous_level: number = 0;
  @Input() next_level: number = 0;
  @Input() name: string = "name";
  @Input() previous_level_xp: number = 0;
  @Input() next_level_xp: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}