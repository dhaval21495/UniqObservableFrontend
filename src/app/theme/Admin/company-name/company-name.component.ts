import { Component, Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyMasterService } from '../../../shared/services/CompanyMaster.service';
import { CompanyMaster } from '../../../shared/models';

@Component({
  selector: 'app-companyName',
  templateUrl: './company-name.component.html',
  styleUrls: [
    './company-name.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class CompanyNameComponent implements OnInit {

  //public maskUsMobile = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,];
  companymaster = new CompanyMaster;
  angForm: FormGroup;
  //loading = false;

  constructor(
    private CompanyMasterService: CompanyMasterService,
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

      // let neww = {
      //   Comp_Code: 151511,
      //   Comp_Name : "first data",
      //   Owner_Name : "Vl",
      //   Address:"maru ghar",
      //   City:"surat",
      //   State:"gujarat",
      //   Country:"india",
      //   Comp_Email:"dhaval@gmail.com",
      //   Comp_Mobile_No:4865486,
      //   Landline_No:4856284,
      //   Web_Url:"dhaval.com",
      //   Date_Of_Reg:"21-04-1995",
      //   License_No:485584,
      //   Buss_Type:"Buss_Type",
      //   Buss_Nature:"Buss_Nature",
      //   Remark:"Remark",
      //   Active_YN:"Active_YN"
      //   }

    this.CompanyMasterService.create(this.companymaster)
      .then(result => {
        if (result) {
          this.toastr.success('Company master added successfully');
          //this.loading = false;
          console.log('Company master added successfull');
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
  selector: '[appRemoveCompanyName]'
})
export class RemoveCompanyNameDirective {
  companyName_parent: any;
  constructor(private elements: ElementRef) { }

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.companyName_parent = (this.elements).nativeElement.parentElement;
    this.companyName_parent.remove();
  }
}
