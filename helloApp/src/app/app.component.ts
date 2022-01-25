import { Component} from '@angular/core';
import { NgbModal,ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { GlobalshareService } from './globalshare.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloApp';
  closeModal: string ="";
  modalOptions:NgbModalOptions;
  constructor(private modalService: NgbModal,private shareService:GlobalshareService){
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }

  }

  ngOnInit(){
  }


  
}
