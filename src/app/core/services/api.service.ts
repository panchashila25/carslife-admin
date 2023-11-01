import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  map
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   
  constructor(public http: HttpClient,) { }
  _header:any;


  
  login(data:any){
    console.log(data)
    return this.http.post<any>(`${environment.baseURL}auth/authenticate`,data,{
      headers:this._header
    })
    .pipe(map((data,re)=>{
      return data;
    }));
}


register(data:any){
  console.log(data)
  return this.http.post<any>(`${environment.baseURL}auth/register`,data,{
    headers:this._header
  })
  .pipe(map((data,re)=>{
    return data;
  }));
}


  // Create driver
  createDriver(data: any) {
    return this.http.post < any > (`${environment.baseURL}driver`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



// Get all driver
  getAllDrivers(data:any) {
    return this.http.post < any > (`${environment.baseURL}driver/get`,data, {
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  // Update driver
  updateDriver(id:any,data:any){
    return this.http.put<any>(`${environment.baseURL}driver/`+id,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



// DeleteDriver
  deleteDriver(id:any){
    return this.http.delete<any>(`${environment.baseURL}driver/`+id,{
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



  // Create dealers
  createDealers(data: any) {
    return this.http.post < any > (`${environment.baseURL}dealers`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Get Dealers
  getAllDealers(data:any) {
    return this.http.post < any > (`${environment.baseURL}dealers/get`,data,{
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Update Dealers
  updateDealers(id:any,data:any){
    return this.http.put<any>(`${environment.baseURL}dealers/`+id,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



  // delete Dealers
  deleteDealers(id:any){
    return this.http.delete<any>(`${environment.baseURL}dealers/`+id,{
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



// Get all Coupon
createCoupon(data:any) {
  return this.http.post < any > (`${environment.baseURL}coupons`, data,{
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .pipe(map((data: any) => {
      return data;
    }));

}


  // Get Coupon
  getAllCoupon(data:any) {
    return this.http.post < any > (`${environment.baseURL}coupons/get`,data,{
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Update Coupon
  updateCoupon(id:any,data:any){
    return this.http.put<any>(`${environment.baseURL}coupons/`+id,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



// Delete Coupon
deleteCoupon(id:any){
  return this.http.delete<any>(`${environment.baseURL}coupons/`+id,{
})
.pipe(map((data:any)=>{
  return data;
}))
}

onupload(data: any){
  return this.http.post<any>(`${environment.baseURL}comman/upload`, data)
    .pipe(map(data => {
      return data;
    }));
  }



}




// items

