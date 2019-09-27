import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CodeType} from '../../../shared/models';
import {CodeTypeMasterService} from '../../../shared/services/CodeTypeMaster.service';
//import { MenuMasterService } from '../../../shared/services/MenuMaster.service';

@Component({
  selector: 'app-codeMaster',
  templateUrl: './code-master.component.html',
  styleUrls: [
    './code-master.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class CodeMasterComponent implements OnInit {

  CodeType: CodeType[];
  constructor(
    private CodeTypeMasterService: CodeTypeMasterService,
    // private appRouter: Router,
     private toastr: ToastrService
    // private route: ActivatedRoute,
    // private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAllCodeType();
  }

  getAllCodeType() {
    this.CodeTypeMasterService.getAllCodeType().then(CodeType => this.CodeType = CodeType)
    .catch(statusData => {
      if (statusData === '500') {
        this.toastr.error('Internal server error!');
      }
      if (statusData === '403') {
        this.toastr.error('Access denied for this page.');
      }
    });
  }
}

@Directive({
  selector: '[appRemoveCodeMaster]'
})
export class RemoveCodeMasterDirective {
  codeMaster_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.codeMaster_parent = (this.elements).nativeElement.parentElement;
    this.codeMaster_parent.remove();
  }
}
