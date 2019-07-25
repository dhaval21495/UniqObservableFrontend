import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-positionMaster',
  templateUrl: './position-master.component.html',
  styleUrls: [
    './position-master.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class PositionMasterComponent implements OnInit {

  //public maskUsMobile = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,];

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[appRemovePositionMaster]'
})
export class RemovePositionMasterDirective {
  positionMaster_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.positionMaster_parent = (this.elements).nativeElement.parentElement;
    this.positionMaster_parent.remove();
  }
}
