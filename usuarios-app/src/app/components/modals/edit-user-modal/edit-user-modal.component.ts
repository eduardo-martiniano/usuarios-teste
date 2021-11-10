import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {

  form: any;
  startDate = new Date(1990, 0, 1);
  today = new Date();

  constructor(private dialogRef: MatDialogRef<EditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {user: User},
    private userService: UserService,
    private fb: FormBuilder,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.data.user.id, Validators.required],
      name: [this.data.user.name, Validators.required],
      lastName: [this.data.user.lastName, Validators.required],
      email: [this.data.user.email, Validators.required],
      birthDate: [this.data.user.birthDate, Validators.required],
      scholarity: [this.data.user.scholarity, Validators.required],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete() {
    this.userService.edit(this.form.value as User).then(() => {
      this.messageService.showSucess("Usuario editado com sucesso!");
      this.dialogRef.close();
    }).catch(() => {
      this.messageService.showError("Erro ao editar usuario :(");
      this.dialogRef.close();
    })
  }

  get formValid(): boolean {
    return this.form.valid;
  }

}
