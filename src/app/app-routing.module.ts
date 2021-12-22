import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUsersComponent } from './github-users/github-users.component';

const routes: Routes = [{
  component: GithubUsersComponent,
  path: ""
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
