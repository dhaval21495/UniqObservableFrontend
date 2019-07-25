import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-sectionMaster',
  templateUrl: './section-master.component.html',
  styleUrls: [
    './section-master.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class SectionMasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[appRemoveSectionMaster]'
})
export class RemoveSectionMasterDirective {
  sectionMaster_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.sectionMaster_parent = (this.elements).nativeElement.parentElement;
    this.sectionMaster_parent.remove();
  }
}
