import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestHandlerService {
  constructor(private httpClient: HttpClient) {}

  startEncryption(formData: FormData) {
    return this.httpClient.post(environment.baseURL + 'encrypt' , formData);
  }

  startDecryption(formData: FormData) {
    return this.httpClient.post(environment.baseURL + 'decrypt/' + formData, {
      responseType: 'blob',
    });
  }
}
