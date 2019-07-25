import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-roleMenuMaster',
  templateUrl: './role-menu-master.component.html',
  styleUrls: [
    './role-menu-master.component.scss',
    '../../../../scss/common.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class RoleMenuMasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[appRemoveRoleMaster]'
})
export class RemoveRoleMenuMasterDirective {
  roleMenuMaster_parent: any;
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    this.roleMenuMaster_parent = (this.elements).nativeElement.parentElement;
    this.roleMenuMaster_parent.remove();
  }
}
