import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users = []

  constructor(
    private _usersService: UsersService,
  ) {
  }

  ngOnInit(): void {
    if (this._usersService.dataUsers.length === 0) {
      this._usersService.getUsers()
        .subscribe(users => {
          this._usersService.dataUsers = users
          this.users = this._usersService.dataUsers
        })
    } else {
      this.users = this._usersService.dataUsers
    }
  }
}
