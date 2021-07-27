import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  routes = new DRQRoutes();
  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
  });

  constructor(protected navCtrl: NavController) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(`email: `, this.loginForm.get('email').value);
    console.log(`password: `, this.loginForm.get('password').value);
    this.navCtrl.navigateForward(`/${this.routes.PESSOA_FISICA}`);
  }
}
