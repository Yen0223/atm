import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  private subscription: Subscription = new Subscription(); // khai báo: subscription
  @ViewChild('email') email: any; // khai báo: email
  public userForm: FormGroup; // khai báo: form

  user = {
    email: 'lamngocyen@gmail.com',
    name: 'Yen',
    password: '1234',
    balance: 1000000,
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
  ) {
    // huỷ thông tin account ở dưới local trước khi đăng nhập
    // localStorage.removeItem('account');

    // tạo form đăng nhập
    this.userForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // yêu cầu không được rỗng và định dạng email
      password: ['', Validators.required], // yêu cầu không được rỗng
      save: [false] // không yêu cầu, mặc định giá trị là false
    });
  }

  // ngOnDestroy(): void {
  //   // huỷ subscription khi thoát ra khỏi màn hình login
  //   this.subscription.unsubscribe();
  // }

  ngOnInit(): void {
    
  }

  // ionViewDidLoad(): void {
  //   // sau 0.5s tự động focus vào field email
  //   setTimeout(() => {
  //     this.email.setFocus();
  //   }, 500);
  // }

  // reset(): void {
  //   this.userForm.reset();
  // }

  login(): void {
    // kiểm tra form đã nhập đúng yêu cầu chưa
    if (this.userForm.invalid) {
      // form nhập sai, yêu cầu nhập cho đúng
    } else {
      // form nhập đúng, gửi request lên server thông qua Api
      // để kiểm tra thông tin của user
      // 
    }
  }

  add(){
    // if (this.user.email === 'lamngocyen@gmail.com' && this.user.password === '1234'){
      
    // }
  }
  delete(){}

  async viewAll() {
    const alert = await this.alertController.create({
      header: 'Tất cả tài khoản',
      // subHeader: '',
      message: '1. '+ this.user.email,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
