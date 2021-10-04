import { Component, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserDetails } from '../_models/user_detail';
import { UserService, AuthenticationService } from '../_services';

@Component({ selector: 'app-home', templateUrl: 'home.component.html',styleUrls: ['home.component.scss'] })
export class HomeComponent {
    loading = false;
    user;
    userdetails: UserDetails[] = [];
    message = [];
    @Output() userData = new EventEmitter<UserDetails[]>();
    
   

    currentUser: User;
    userD;
      constructor(
        private userService: UserService,
          private router: Router,
          private authenticationService: AuthenticationService
      ) {
          this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      }
  
      logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
      }
  
      
    ngOnInit() {
       this.GetUser();
    }


    GetUser(){
        this.loading = true;
        this.userService.getUserDetails().pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user['message'][0];
            console.log( this.user,"user");
          //  this.userData.emit(this.user['message']);
        });
    }

   
}