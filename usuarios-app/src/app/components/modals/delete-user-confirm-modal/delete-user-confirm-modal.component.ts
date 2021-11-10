import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user-confirm-modal',
  templateUrl: './delete-user-confirm-modal.component.html',
  styleUrls: ['./delete-user-confirm-modal.component.css']
})
export class DeleteUserConfirmModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteUserConfirmModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {id?: number},
              private userService: UserService,
              private messageService: MessageService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete() {
    this.userService.remove(this.data).then(() => {
      this.messageService.showSucess("Usuario excluido com sucesso!");
      this.dialogRef.close();
    }).catch(() => {
      this.messageService.showError("Erro ao apagar usuario :(");
      this.dialogRef.close();
    })
  }

  ngOnInit(): void {
  }

}
