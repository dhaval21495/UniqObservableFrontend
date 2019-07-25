import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserMasterService } from '../../../shared/services/UserMaster.service';
import { UserMaster } from '../../../shared/models';

@Component({
  selector: 'app-userMaster',
  templateUrl: './user-master.component.html',
  styleUrls: [
    './user-master.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class UserMasterComponent implements OnInit {

  usermaster = new UserMaster;
  angForm: FormGroup;

  constructor(
    private UserMasterService: UserMasterService,
    private appRouter: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { 
    // this.FormValid();
  }

  // FormValid() {
  //   this.angForm = this.fb.group({
  //     name: ['',
  //       [
  //         Validators.required,
  //         Validators.minLength(4),
  //         Validators.pattern('^[A-Za-z -]+$')
  //       ]
  //     ],
  //   });
  // }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    this.UserMasterService.create(this.usermaster)
      .then(result => {
        if (result) {
          this.toastr.success('User added successfully');
          //this.loading = false;
          console.log('User added successfull');
        }
      })
      .catch(statusData => {
        $('#oppsend').prop('disabled', false);
        if (statusData === '409') {

        }
        if (statusData === '500') {
          this.toastr.error('Internal server error!');
        }
      });
  }
}

@Directive({
  selector: '[appRemoveUserMaster]'
})
export class RemoveUserMasterDirective {
  userMaster_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.userMaster_parent = (this.elements).nativeElement.parentElement;
    this.userMaster_parent.remove();
  }
}
