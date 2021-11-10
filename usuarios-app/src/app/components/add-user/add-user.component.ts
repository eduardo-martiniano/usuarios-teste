import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form: any;
  startDate = new Date(1990, 0, 1);

  
  constructor(private fb: FormBuilder) { }

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
    console.log(this.form.value);
    this.form.reset();
  }

  get formValid(): boolean {
    return this.form.valid;
  }

}
