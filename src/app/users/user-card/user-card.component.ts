import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: any;

  constructor(
    private _router: Router,
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  public selectItemUser(): void {
    this._usersService.selectUser = this.user
    this._router.navigate(['/users', String(this.user.id)])
  }
}
