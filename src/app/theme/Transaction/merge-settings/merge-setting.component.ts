import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-mergeSetting',
  templateUrl: './merge-setting.component.html',
  styleUrls: [
    './merge-setting.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class MergeSettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[appRemoveMergeSetting]'
})
export class RemoveMergeSettingDirective {
  mergeSetting_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.mergeSetting_parent = (this.elements).nativeElement.parentElement;
    this.mergeSetting_parent.remove();
  }
}
