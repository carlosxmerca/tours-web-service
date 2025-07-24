export class PaginatiedDto<T> {
  data: T[];
  total: number;
  pageIndex: number;
  pageSize: number;
  totalPages: number;

  constructor(partial: PaginatiedDto<T>) {
    Object.assign(this, partial);
  }
}
