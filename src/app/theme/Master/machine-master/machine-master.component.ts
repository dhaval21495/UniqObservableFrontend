import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MachineMasterService } from '../../../shared/services/MachineMaster.service';
import { MachineMaster } from '../../../shared/models';

@Component({
  selector: 'app-machineMaster',
  templateUrl: './machine-master.component.html',
  styleUrls: [
    './machine-master.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class MachineMasterComponent implements OnInit {

  machinemaster = new MachineMaster;
  angForm: FormGroup;

  constructor(
    private MachineMasterService: MachineMasterService,
    private appRouter: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    this.MachineMasterService.create(this.machinemaster)
      .then(result => {
        if (result) {
          this.toastr.success('Machine added successfully');
          //this.loading = false;
          console.log('Machine added successfull');
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
  selector: '[appRemoveMachineMaster]'
})
export class RemoveMachineMasterDirective {
  machineMaster_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.machineMaster_parent = (this.elements).nativeElement.parentElement;
    this.machineMaster_parent.remove();
  }
}
