import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {
  File !: File;

  constructor() { }

  ngOnInit(): void {
  }

  decrypt (form : NgForm){
    var formData: FormData = new FormData()
    formData.append('key' , form.value.password)
    formData.append('file' , this.File)

    // this.requestService.startEncryption(formData).subscribe(res=>{
    //   console.log(res);
    //   saveAs(new Blob([res] , {type : res.type}),"encrypt");
    //   console.log("I received response");
    // })
  }

  selectedFile(event: { target: any; }) {
    this.File = <File>event.target!.files[0];
  }
}
