import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as saveAs from 'file-saver';
import { RequestHandlerService } from '../request-handler.service';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent {
  constructor(private requestService : RequestHandlerService,private elementRef: ElementRef){}

  title = 'EncryptIt'

  File !: File

  encrypt (form : NgForm){
    var formData: FormData = new FormData()
    formData.append('key' , form.value.password)
    formData.append('file' , this.File)

    // console.log(this.elementRef.nativeElement.getElement('invalidCheck'))

    this.requestService.startEncryption(formData).subscribe(res=>{
      saveAs(new Blob([res] , {type : res.type}),"encrypt");
      console.log("I received response");
    })
  }

  // checkFormValidity(formValidity  : Boolean, checkBoxValidity : Boolean){
  //   console.log(formValidity , checkBoxValidity)
  //   if(formValidity === true && checkBoxValidity === true){
  //     return false
  //   }
  //   return true
  // }

  selectedFile(event: { target: any; }) {
    this.File = <File>event.target!.files[0];
  }
}
