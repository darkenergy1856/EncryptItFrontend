import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestHandlerService } from '../request-handler.service';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {
  File !: File;

  constructor(private requestService: RequestHandlerService,) { }

  ngOnInit(): void {
  }

  decrypt(form: NgForm) {
    var formData: FormData = new FormData();
    formData.append('key', form.value.password);
    formData.append('files', this.File);

    this.requestService
      .startDecryption(formData)
      .subscribe({
        next: (n) => {console.log(n);
          this.requestService.downloadFile(n , 'decrypted')},
        error: (e) => console.log(e),
        complete: () => console.log(),
      });
  }

  selectedFile(event: { target: any; }) {
    this.File = <File>event.target!.files[0];
  }
}
