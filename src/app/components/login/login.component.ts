import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  loginObj = this._initLoginObj();
  isLoginPage: boolean = true;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  private _initLoginObj() {
    return {
      userName: '',
      idNum: '',
      password: ''
    }
  }

  checkIfOnlyNumbers(e) {
    // todo - numbers only validation
  }

  private _isFormValid(): boolean {
    let isFormValid = true;
    for (let value of Object.values(this.loginObj)) {
      if (value.trim() == '') isFormValid = false;
    }
    return isFormValid;
  }

  submit() {
    if (!this._isFormValid()) { return this.toastr.error('יש להזין ערכים בכל השדות'); }
    this.isLoginPage = false;
  }
}
