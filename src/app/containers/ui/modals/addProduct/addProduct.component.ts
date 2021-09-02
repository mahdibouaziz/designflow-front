import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-product',
  templateUrl: './addProduct.component.html'
})
export class addProduct  {
  modalRef: BsModalRef;
   constructor(private modalService: BsModalService) { 
   
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }




}
