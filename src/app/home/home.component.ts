import { Component, OnInit } from '@angular/core';
import { ApiquangcaoService } from '../apiquangcao.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postAll:any[]=[]
  constructor(private http:HttpClient,private apiquangcaoService:ApiquangcaoService) { }
  ngOnInit(): void {
    this.getPostAll()
  }
  getPostAll(){
    this.apiquangcaoService.getPostAll().subscribe(data=>this.postAll=data as any)
  }

  slideConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
  prevArrow: '<i class="fa-solid fa-arrow-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right next"></i>',
  responsive: [{
      breakpoint: 768,
      settings: {
        prevArrow: '<i></i>',
        nextArrow: '<i></i>',
        dots: false,
      }}]
}
}
