import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
// import { AuthenticationService } from './authentication.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Pipe } from '@angular/core';
import { promise } from 'protractor';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CodeTypeMaster, CodeType } from '../models';
//import { CodeType } from '../models';

@Injectable()

export class CodeTypeMasterService {

    constructor(
        private http: Http,
        private httpClient: HttpClient
        // private authenticationService: AuthenticationService
    ) { }


    create(CodeTypeMaster: CodeTypeMaster) {
        //console.log(CodeTypeMaster);
        return this.http
            .post('http://localhost:3001/codetypemaster/addCodeTypeMaster', CodeTypeMaster)
            // .post('/codetypemaster/addCodeTypeMaster', CodeTypeMaster)
            .toPromise()
            .catch(this.handleError);
    }

    update(id: number, CodeTypeMaster: CodeTypeMaster): Promise<CodeTypeMaster> {
        // CompanyMaster['id'] = id;
        return this.http.put('CodeTypeMaster/' + id, CodeTypeMaster)
            .toPromise()
            .catch(this.handleError);
    }

    getAllCodeType(): Promise<CodeType[]> {
        return this.httpClient.get('/allCodeTypeMaster')
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