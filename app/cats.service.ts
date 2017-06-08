import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestMethod } from "@angular/http";
import { User } from "./user";
import { Config } from "./config";


@Injectable()
export class CatsService {
  constructor(private http:Http, private config:Config) {
  }

  index() {
    let appSettings = require("application-settings");
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("token-type", "Bearer");
    headers.append("client", appSettings.getString("client"));
    headers.append("access-token", appSettings.getString("accessToken"));
    headers.append("expiry", appSettings.getString("expiry"));
    headers.append("uid", appSettings.getString("uid"));
    return this.http.get(
            this.config.apiUrl + '/cats',
        {headers: headers}
        )

  }
  //shuffle() {
  //  let timenow = new Date().getTime();
  //  return this._tokenService.get('cats/shuffle')
  //}
  //
  //
  //vote(voted, unvoted) {
  //  let data = JSON.stringify({
  //    voted: voted,
  //    unvoted: unvoted
  //  })
  //  return this._tokenService.post('cats/vote', data)
  //
  //}

}
