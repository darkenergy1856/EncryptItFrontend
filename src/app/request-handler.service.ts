import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as saveAs from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class RequestHandlerService {
  constructor(private httpClient: HttpClient) {}

  startEncryption(formData: FormData) {
    return this.httpClient.post(environment.baseURL + 'encrypt' , formData,{responseType: 'text'});
  }

  startDecryption(formData: FormData) {
    return this.httpClient.post(environment.baseURL + 'decrypt' , formData ,{responseType: 'text'} );
  }

  downloadFile(fileId : string , fileName :  string){
    var temp = 'downloadFile?fileId=' + fileId ;
    console.log(temp)
    this.httpClient.get(environment.baseURL+temp , {responseType : 'blob'} ).subscribe({
      next: (n) => saveAs(new Blob([n] , {type : n.type}),fileName),
      error: (e) => console.log(e),
      complete: () => console.log(),
    })
  }
}
