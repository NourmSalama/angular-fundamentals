import { Injectable } from "@angular/core";
import { IUser } from "./user.model";


@Injectable()
export class AuthService {

  currentUser: IUser

  loginUser(username:string, password:string) {
    this.currentUser = {
      id: 1,
      firstName: "Nour",
      lastName: "Salama",
      userName: "nour",
      password: "123"
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
