import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../../interfaces';
import { ApiService } from '../../../core/services';
import { PaginationInterface } from 'src/interfaces/pagination.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: any[] = [];
  pagesCount: number;
  perPage: number;
  loading = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService) {
  }

  ngOnInit() {
    this.loading = true;
    this.apiService.fetchUsers(1)
      .subscribe((respond: PaginationInterface) => {
        this.userList = respond.data;
        this.pagesCount = respond.total;
        this.perPage = respond.per_page;
        this.loading = false;
      });
  }

  pageChanged(event: PageEvent): void {
    let page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
    this.apiService.fetchUsers(page)
      .subscribe((respond: PaginationInterface) => {
        this.userList = respond.data;
      });
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
