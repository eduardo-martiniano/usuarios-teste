import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form: any;
  startDate = new Date(1990, 0, 1);
  today = new Date();

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.startForm();
  }

  startForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      scholarity: ['', Validators.required],
    });
  }

  submit() {
    let user = this.form.value as User;
    this.userService.create(user).then(() => {
      this.messageService.showSucess("Usuario cadastrado com sucesso!")
      this.form.reset();
    }).catch(() => this.messageService.showError("Algo deu errado!"));
  }

  get formValid(): boolean {
    return this.form.valid;
  }

}
