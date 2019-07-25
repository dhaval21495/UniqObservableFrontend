import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CompanyMaster } from '../models';
// import { AuthenticationService } from './authentication.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Pipe } from '@angular/core';
import { promise } from 'protractor';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CompanyMasterService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
    // private authenticationService: AuthenticationService
  ) { }

  create(CompanyMaster: CompanyMaster) {
    console.log(CompanyMaster);
    return this.http
      // .post('http://localhost:3001/CompanyMaster/add', CompanyMaster)
      .post('/companymaster/addCompanyMaster', CompanyMaster)
      .toPromise()
      .catch(this.handleError);
  }

  update(id: number, CompanyMaster: CompanyMaster): Promise<CompanyMaster> {
    // CompanyMaster['id'] = id;
    return this.http.put('CompanyMaster/' + id, CompanyMaster)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    if (error.status === 409) {
      return Promise.reject("409");
    }
    if (error.status === 500) {
      return Promise.reject("500");
    }
    if (error.status === 404) {
      return Promise.reject("404");
    }
    if (error.status === 406) {
      return Promise.reject("406");
    }
  }
}
