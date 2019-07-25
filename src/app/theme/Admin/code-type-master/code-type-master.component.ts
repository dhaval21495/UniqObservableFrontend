import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodeTypeMasterService } from '../../../shared/services/CodeTypeMaster.service';
import { CodeTypeMaster } from '../../../shared/models';

@Component({
  selector: 'app-codeTypeMaster',
  templateUrl: './code-type-master.component.html',
  styleUrls: [
    './code-type-master.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class CodeTypeMasterComponent implements OnInit {

  codetypemaster = new CodeTypeMaster;
  angForm: FormGroup;

  constructor(
    private CodeTypeMasterService: CodeTypeMasterService,
    private appRouter: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    this.CodeTypeMasterService.create(this.codetypemaster)
      .then(result => {
        if (result) {
          this.toastr.success('Code Type added successfully');
          //this.loading = false;
          console.log('Code Type added successfull');
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
  selector: '[appRemoveCodeTypeMaster]'
})
export class RemoveCodeTypeMasterDirective {
  codeTypeMaster_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.codeTypeMaster_parent = (this.elements).nativeElement.parentElement;
    this.codeTypeMaster_parent.remove();
  }
}
