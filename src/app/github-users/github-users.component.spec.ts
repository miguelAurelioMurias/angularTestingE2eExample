import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GithubUser } from 'src/data/github-user';
import { GithubService } from '../github.service';

import { GithubUsersComponent } from './github-users.component';

describe('GithubUsersComponent', () => {
  let component: GithubUsersComponent;
  let fixture: ComponentFixture<GithubUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GithubUsersComponent],
      providers: [HttpClientModule, GithubService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Should get a list of users", () => {
    // given
    const restService = TestBed.inject(GithubService);
    const userMock: GithubUser = {
      avatar_url: "test://url",
      login: "testlogin",
      type: "user"
    }
    const data = [
      userMock
    ] // define your rest call data
    spyOn(restService, 'getUsers').and.returnValue(of(data));
    component.getUsers()
    // then
    expect(component.students.length).toBe(1);
  })
});
