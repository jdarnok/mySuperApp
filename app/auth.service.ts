import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { User } from "./user";
import { Config } from "./config";


@Injectable()
export class AuthService {
    constructor(private http:Http, private config:Config) {
    }


    sign_in(user:User) {
        let headers = new Headers();
        let appSettings = require("application-settings");
        headers.append("Content-Type", "application/json");
        headers.append("Content-Type", "application/json");
        headers.append("token-type", "Bearer");
        headers.append("client", appSettings.getString("client"));
        headers.append("access-token", appSettings.getString("accessToken"));
        headers.append("expiry", appSettings.getString("expiry"));
        headers.append("uid", appSettings.getString("uid"));
        return this.http.post(
                this.config.apiUrl + '/auth/sign_in',
            JSON.stringify({
                email: user.email,
                password: user.password,
            }),
            {headers: headers}
            )
            .catch(this.handleErrors);
    }

    handleErrors(error:Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
