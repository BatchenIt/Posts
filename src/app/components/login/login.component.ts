import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myForm = this.formBuilder.group({
    userName: ["", Validators.required],
    idNum: ["", Validators.required],
    password: ["", Validators.required]
  });
  // myForm = new FormGroup({
  //   userName: new FormControl(""),
  //   idNum: new FormControl(""),
  //   password: new FormControl("")
  // });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  submit() {
    console.log(this.myForm.value);
  }
}
