import { Component, Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyMasterService } from '../../../shared/services/CompanyMaster.service';
import { CompanyMaster } from '../../../shared/models';

import {Input, ViewEncapsulation} from '@angular/core';
import {NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ColorPickerService, Rgba} from 'ngx-color-picker';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;



const now = new Date();

export class Cmyk {
  constructor(public c: number, public m: number, public y: number, public k: number) { }
}


@Component({
  selector: 'app-companyName',
  templateUrl: './company-name.component.html',
  styleUrls: [
    './company-name.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CompanyNameComponent implements OnInit {

  //public maskUsMobile = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,];
  companymaster = new CompanyMaster;
  angForm: FormGroup;
  //loading = false;
  public model: any;
  modelCustomDay: any;

  displayMonths = 3;
  navigation = 'select';
  showWeekNumbers = false;

  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  disabled = true;

  @Input() testRangeDate: Date;

  toggle = false;
  public lastColor: string;
  public rgbaText: string;

  public color = '#2889e9';
  public color2 = 'hsla(300,82%,52%)';
  public color3 = '#fff500';
  public color4 = 'rgb(236,64,64)';
  public color5 = 'rgba(45,208,45,1)';

  public color13 = 'rgba(0, 255, 0, 0.5)';
  public color14 = 'rgb(0, 255, 255)';
  public color15 = '#a51ad633';

  public basicColor = '#4099ff';
  public showColorCode = '#db968d';
  public showColorCodeHSAL = 'hsl(149,27%,65%)';
  public showColorCodeRGBA = 'rgb(221,14,190)';
  public changeMeColor = '#523698';

  public arrayColors: any = {};
  public selectedColor = 'color';

  modelPopup: NgbDateStruct;
  public date: {year: number, month: number};

  modelDisabled: NgbDateStruct = {
    year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()
  };

  public cmyk: Cmyk = new Cmyk(0, 0, 0, 0);

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }

  constructor(
    private CompanyMasterService: CompanyMasterService,
    private appRouter: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private fb: FormBuilder,public parserFormatter: NgbDateParserFormatter, public calendar: NgbCalendar, public cpService: ColorPickerService
  ) {
    // this.FormValid();
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.arrayColors['color'] = '#2883e9';
    this.arrayColors['color2'] = '#e920e9';
    this.arrayColors['color3'] = 'rgb(255,245,0)';
    this.arrayColors['color4'] = 'rgb(236,64,64)';
    this.arrayColors['color5'] = 'rgba(45,208,45,1)';

    const windowWidth = window.innerWidth;
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.displayMonths = 2;
      this.navigation = 'select';
    } else if (windowWidth < 768) {
      this.displayMonths = 1;
      this.navigation = 'select';
    } else {
      this.displayMonths = 3;
      this.navigation = 'none';
    }
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


  selectToday() {
    this.modelPopup = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  
  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  onChangeColor(color: string): Cmyk {
    return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(color)));
  }

  rgbaToCmyk(rgba: Rgba): Cmyk {
    const cmyk: Cmyk = new Cmyk(0, 0, 0, 0);
    let k: number;
    k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k === 1) {
      return new Cmyk(0, 0, 0, 1);
    }
    cmyk.c = (1 - rgba.r - k) / (1 - k);
    cmyk.m = (1 - rgba.g - k) / (1 - k);
    cmyk.y = (1 - rgba.b - k) / (1 - k);
    cmyk.k = k;
    return cmyk;
  }

  onChangeColorHex8(color: string): string {
    return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', null);
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
