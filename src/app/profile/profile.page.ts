import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {

  constructor(private router: Router) { }

  accountName : string = 'Lâm Ngọc Yến';
  accountNumber : string = '5400 **** **** ****';
  dateOfBirth : string = '23/01/2002';
  address : string = 'Đà Lạt';
  balance : number = 100000;

  //Quay lại trang chủ
  backHome(){
    this.router.navigate(['/home']);
  }


}
