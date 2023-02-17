import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiquangcaoService } from '../apiquangcao.service';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.scss']
})
export class TaglistComponent implements OnInit {
  banghieus:any=[]
  constructor(private http:HttpClient,private apiquangcaoService:ApiquangcaoService) { }
  ngOnInit(): void {
    this.getLamBangHieu()
  }
  getLamBangHieu(){
    this.apiquangcaoService.getLamBangHieu().subscribe(data=>this.banghieus=data)
  }
}
