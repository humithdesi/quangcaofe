import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostlistService } from '../postlist/postlist.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})

export class PostdetailComponent implements OnInit{
  post:any={}

  constructor( private route:ActivatedRoute,private postlistService:PostlistService ){}
ngOnInit(): void {
 this.getRoute()
 console.log('đã gọi')
}
getRoute(){
  this.postlistService.find(this.route.snapshot.params['slug']).subscribe(data=>this.post=data)
}
}
