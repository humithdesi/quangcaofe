import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiquangcaoService } from '../apiquangcao.service';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  postAll:any[]=[]
  constructor(private http:HttpClient,private apiquangcaoService:ApiquangcaoService) { }
  ngOnInit(): void {
    this.getPostAll()
  }
  getPostAll(){
    this.apiquangcaoService.getPostAll().subscribe(data=>this.postAll=data as any)
  }




 
}
