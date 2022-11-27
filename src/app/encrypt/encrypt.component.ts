import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as saveAs from 'file-saver';
import { RequestHandlerService } from '../request-handler.service';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css'],
})
export class EncryptComponent {
  constructor(
    private requestService: RequestHandlerService,
  ) {}

  title = 'EncryptIt';

  File!: File;

  encrypt(form: NgForm) {
    var formData: FormData = new FormData();
    formData.append('key', form.value.password);
    formData.append('files', this.File);

    this.requestService
      .startEncryption(formData)
      .subscribe({
        next: (n) => {console.log(n);
          this.requestService.downloadFile(n , 'encrypted')},
        error: (e) => console.log(e),
        complete: () => console.log(),
      });
  }



  selectedFile(event: { target: any }) {
    this.File = <File>event.target!.files[0];
  }
}
