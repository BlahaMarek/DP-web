import {Component, OnInit} from '@angular/core';
import regression from 'regression';
import {UserService} from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userSvc: UserService) {}

  ngOnInit() {
    const result = regression.linear([[1, 0.5], [4, 3], [10, 9]],
      {
        order: 2,
        precision: 7,
      });

    console.log('definition: ', result.string);
    console.log('r2: ', result.r2);
    console.log('points: ', result.points);
    console.log('equation: ', result.equation);
    console.log('predict(5): ', result.predict(5));

  }
}
