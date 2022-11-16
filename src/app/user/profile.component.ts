import { Component, OnInit } from '@angular/core'
import { FormGroup , FormControl } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

  profileForm: FormGroup

  constructor(private authService:AuthService, private router:Router) {
    this.ngOnInit()
  }

  ngOnInit() {
    let firstname = new FormControl(this.authService.currentUser.firstName)
    let lastname = new FormControl(this.authService.currentUser.lastName)

    this.profileForm = new FormGroup({
      firstName: firstname,
      lastName: lastname
    })
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['events']).then(r => console.log(r))
  }

  cancel () {
    return this.router.navigate(['events'])
  }

}
