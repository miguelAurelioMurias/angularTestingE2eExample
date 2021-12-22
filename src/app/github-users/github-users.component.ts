import { Component, OnInit } from '@angular/core';
import { GithubUser } from 'src/data/github-user';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {

  students : Array<GithubUser> = []
  constructor(private githubService: GithubService
    ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() : void {
    this.githubService.getUsers().subscribe((users) => {
      this.students = users
    })
  }

}
