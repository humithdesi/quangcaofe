import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailComponent } from './postdetail/postdetail.component';

import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'postlist', component: PostlistComponent },
  { path: 'postDetail/:slug', component: PostdetailComponent},
  { path: 'category/:slug', component: CategorydetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
