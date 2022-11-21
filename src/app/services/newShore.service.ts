import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { generalConfig } from "../config/general.config";
import { formModel } from "../models/form-model";
import { newShoreModel } from "../models/newShore-model";

@Injectable({
  providedIn:'root'
})
export class gettingDataService{
  url:String=generalConfig.urlNewShore
  constructor(private http:HttpClient){}
  fullData(origin:formModel,destination:formModel):Observable<any>{
    return this.http.get<any>(`url `,{
    //  origin:origin.origin,
     // destination:destination.destination

    },
   );

  }
}

