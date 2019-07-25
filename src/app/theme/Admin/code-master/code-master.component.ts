import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
