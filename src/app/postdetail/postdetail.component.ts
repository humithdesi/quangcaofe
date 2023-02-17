import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiquangcaoService } from '../apiquangcao.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PostdetailComponent implements OnInit{
  post:any={}
taone=''
  constructor( private route:ActivatedRoute,private apiquangcaoService:ApiquangcaoService,private title:Title){
    console.log(this.post.image)
  }
ngOnInit(): void {
 this.getRoute()

 console.log('đã gọi')

}
getRoute(){
  this.apiquangcaoService.findPost(this.route.snapshot.params['slug']).subscribe(data=>this.post=data)
  console.log()
}
}
