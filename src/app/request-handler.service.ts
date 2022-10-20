import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestHandlerService {
  constructor(private httpClient: HttpClient) {}

  startEncryption(formData: FormData) {
    return this.httpClient.get(environment.baseURL + 'encrypt/' + formData, {
      responseType: 'blob',
    });
  }

  startDecryption(formData: FormData) {
    return this.httpClient.get(environment.baseURL + 'decrypt/' + formData, {
      responseType: 'blob',
    });
  }
}
