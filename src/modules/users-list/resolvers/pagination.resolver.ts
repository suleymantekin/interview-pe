import { Injectable } from '@angular/core';
import { PaginationApiService } from '../../core/services';

@Injectable()
export class PaginationResolver {

  constructor(private paginationApiService: PaginationApiService) { }

  resolve() {
    return this.paginationApiService.fetchPaginationInfo();
  }

}
