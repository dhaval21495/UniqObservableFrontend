import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuMasterService } from '../../../shared/services/MenuMaster.service';
import { MenuMaster } from '../../../shared/models';

@Component({
  selector: 'app-menuMaster',
  templateUrl: './menu-master.component.html',
  styleUrls: [
    './menu-master.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class MenuMasterComponent implements OnInit {

  menumaster = new MenuMaster;
  angForm: FormGroup;

  constructor(
    private MenuMasterService: MenuMasterService,
    private appRouter: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    this.MenuMasterService.create(this.menumaster)
      .then(result => {
        if (result) {
          this.toastr.success('Menu added successfully');
          //this.loading = false;
          console.log('Menu added successfull');
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
  selector: '[appRemoveMenuMaster]'
})
export class RemoveMenuMasterDirective {
  menuMaster_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.menuMaster_parent = (this.elements).nativeElement.parentElement;
    this.menuMaster_parent.remove();
  }
}
