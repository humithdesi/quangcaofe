import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostlistService implements OnInit{

constructor(private http:HttpClient) { }
getPostAll(){
 return this.http.get('http://127.0.0.1:8000/post')
}
find(slug:string):Observable<any>{
  return this.http.get('http://127.0.0.1:8000/post/'+slug)
}


ngOnInit(): void {
  
}
}
