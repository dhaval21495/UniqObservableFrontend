import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-CompanyReports',
  templateUrl: './company-Reports.component.html',
  styleUrls: [
    './company-Reports.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class CompanyReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[appRemoveCompanyReports]'
})
export class RemoveCompanyReportsDirective {
  CompanyReports_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.CompanyReports_parent = (this.elements).nativeElement.parentElement;
    this.CompanyReports_parent.remove();
  }
}
