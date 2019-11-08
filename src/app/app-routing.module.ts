import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [{
    path: "", component: HomeComponent
  },{
    path: "travel", component: TravelsComponent
  },{
    path: "blog", component: BlogComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
