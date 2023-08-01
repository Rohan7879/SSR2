import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { MyPageComponent } from './my-page/my-page.component';
import { ServiceCallComponent } from './service-call/service-call.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'blog/:id/:name', component: BlogComponent },
  { path: 'mypage', component: MyPageComponent },
  { path: 'api', component: ServiceCallComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
