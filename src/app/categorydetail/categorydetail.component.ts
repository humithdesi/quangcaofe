import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core'
import { ApiquangcaoService } from '../apiquangcao.service';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategorydetailComponent implements OnInit{
  category:any={}

constructor( private route:ActivatedRoute,private apiquangcaoService:ApiquangcaoService ){}
ngOnInit(): void {
 this.getRoute()
 console.log('đã gọi')
}
getRoute(){
  this.apiquangcaoService.findCategory(this.route.snapshot.params['slug']).subscribe(data=>this.category=data)
}
}