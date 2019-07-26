import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  login(){
    console.log('comming');
    this.toastr.success('User added successfully');
  }
}
