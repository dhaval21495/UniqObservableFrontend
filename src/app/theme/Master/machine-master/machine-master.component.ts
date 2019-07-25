import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
