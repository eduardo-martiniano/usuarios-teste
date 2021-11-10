import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "create",
    component: AddUserComponent
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
