import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalshareService } from '../globalshare.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public closeModal : string ="";
  authForm: FormGroup;
  isSubmitting = false;
  constructor(private fb: FormBuilder,private modalService: NgbModal,private shareService:GlobalshareService,private router: Router) { 
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'acceptTerms': [false, Validators.required]
    });
  }

  ngOnInit(): void {
    this.authForm.reset();
  }
  acceptCondtions(eve:any,content:any){
    if(eve.target.checked){
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeModal = `Closed with: ${result}`;
      }, (reason) => {
        this.closeModal = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {debugger;
    $("#acceptTerms").prop( "checked", false );
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  submitForm() {
    let logobj = {'user_id': this.authForm.value.email ,'password':this.authForm.value.password};
    this.isSubmitting = true; 
    let val = this.shareService.login(logobj)
      if(val){
         console.log(val);
         this.authForm.reset();
        this.shareService.isToken.next(true);
        this.shareService.currUser = logobj.user_id;
        localStorage.setItem('userid',logobj.user_id);
        this.router.navigate(['home']);
      }
    }
}