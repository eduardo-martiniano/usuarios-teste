import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { DeleteUserConfirmModalComponent } from '../modals/delete-user-confirm-modal/delete-user-confirm-modal.component';
import { EditUserModalComponent } from '../modals/edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.readAll().then(usersResponse => {
      this.users = usersResponse;
      });
  }

  delete(userId?: number) {
    const dialog = this.dialog.open(DeleteUserConfirmModalComponent, {data: userId});

    dialog.afterClosed().subscribe(() => {
      this.userService.readAll().then(usersResponse => this.users = usersResponse);
    });
  }

  edit(user: User) {
    const dialog = this.dialog.open(EditUserModalComponent, {data:{user}});

    dialog.afterClosed().subscribe(() => {
      this.userService.readAll().then(usersResponse => this.users = usersResponse);
    });
  }

}
