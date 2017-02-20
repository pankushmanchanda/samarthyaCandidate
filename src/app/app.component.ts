import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { candidateService } from './services/candidate.service'
import { Common } from './model/common'

// comment full description
@Component({
  selector: 'app-root',
  template:`<md-sidenav-container fullscreen>
                 <md-sidenav #sidenav mode="over" opened=false>
                    <md-toolbar color="primary">
                          <span>Samarthya Candidate</span>
                    </md-toolbar>
               <md-nav-list>
                  <md-list-item  *ngFor="let item of candidateMenu" routerLink={{item.path}} routerLinkActive="active">
                       <p md-line>{{item.name}}</p>
                  </md-list-item>
               </md-nav-list>
             </md-sidenav>
             <md-toolbar color="primary">
                 <button md-icon-button  (click)="sidenav.toggle()">
                     <i class="material-icons">menu</i>
                 </button>
            <span>Samarthya Candidate Portal</span>

             </md-toolbar>
             <router-outlet>
              
              </router-outlet>
          </md-sidenav-container>
              
         `,
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