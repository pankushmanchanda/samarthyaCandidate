import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { candidateService } from './services/candidate.service'
import { Common } from './model/common'

// comment full description
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  candidateMenu: Common[] = [];
  constructor(private candidateSerive: candidateService) { }
  ngOnInit():void {
  this.candidateSerive.getCandidate().
      then(candidateMenu => this.candidateMenu = candidateMenu)
      
  }
 

}
