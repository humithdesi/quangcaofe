import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostlistService } from './postlist.service';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent {
  obj:any=[]
  constructor(private http:HttpClient,private postlistService:PostlistService) { }
  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.postlistService.getPostAll().subscribe(data=>this.obj=data)
  }
}
