import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiquangcaoService implements OnInit{

  constructor(private http:HttpClient) { }
  getPostAll(){
    return this.http.get('https://web-production-2ab7.up.railway.app/post')
   }
  getLamBangHieu(){
   return this.http.get('https://web-production-2ab7.up.railway.app/lam-bang-hieu')
  }
  getTinTuc(){
    return this.http.get('https://web-production-2ab7.up.railway.app/category/in-an')
   }

  findPost(slug:string):Observable<any>{
    return this.http.get('https://web-production-2ab7.up.railway.app/post/'+slug)
  }
  findCategory(slug:string):Observable<any>{
    return this.http.get('https://web-production-2ab7.up.railway.app/category/'+slug)
  }
  
  ngOnInit(): void {
    
  }
}
