import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-machineMapping',
  templateUrl: './machine-mapping.component.html',
  styleUrls: [
    './machine-mapping.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class MachineMappingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[appRemoveMachineMapping]'
})
export class RemoveMachineMappingDirective {
  machineMapping_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.machineMapping_parent = (this.elements).nativeElement.parentElement;
    this.machineMapping_parent.remove();
  }
}
