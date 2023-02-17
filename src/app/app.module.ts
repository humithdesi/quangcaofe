import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { HttpClientModule } from '@angular/common/http';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { TaglistComponent } from './taglist/taglist.component';
import { ApiquangcaoService } from './apiquangcao.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostdetailComponent,
    NavbarComponent,

    CategorydetailComponent,
    TaglistComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    NgbCollapseModule, 
    LayoutModule, FontAwesomeModule,
    SlickCarouselModule
    

  ],
  providers: [ApiquangcaoService,Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
