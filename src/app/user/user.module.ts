import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule} from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { userRoutes } from "./user.routes";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [
  ],
})

export class UserModule { }
