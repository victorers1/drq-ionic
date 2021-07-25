import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(protected navCtrl: NavController) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    });
  }

  ngOnInit() {
  }

  doLogin() {
    console.log(`email: `, this.loginForm.get('email').value);
    console.log(`password: `, this.loginForm.get('password').value);
    this.navCtrl.navigateForward('/pessoa_fisica');
  }
}
