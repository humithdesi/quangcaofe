import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { HttpClientModule } from '@angular/common/http';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PostlistService } from './postlist/postlist.service';


@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostdetailComponent,
    NavbarComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    NgbCollapseModule, 
    LayoutModule

  ],
  providers: [PostlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
