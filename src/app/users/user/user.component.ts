import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public id!: number
  public infoUser: any | null

  constructor(
    private _usersService: UsersService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.id = +params['Id']
    })
    if (this._usersService.dataUsers.length === 0) {
      this._router.navigate(['/users'])
    } else {
      this.infoUser = this._usersService.selectUser
    }
  }

}
