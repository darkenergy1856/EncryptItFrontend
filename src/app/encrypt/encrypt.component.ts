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
    formData.append('files' , this.File)

      this.requestService.startEncryption(formData).subscribe(res=>{
        console.log(res);
        console.log("I received response");
    })
  }

  selectedFile(event: { target: any; }) {
    this.File = <File>event.target!.files[0];
  }
}
