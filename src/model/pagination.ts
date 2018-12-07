export class Pagination {
  has_next: boolean;
  has_prev: boolean;
  quantity: number;
  offset: number;
  page: number;
  page_size: number;
  total_page: number;

  constructor(data: any){
    this.has_next = data.has_next || undefined;
    this.has_prev = data.has_prev || undefined;
    this.quantity = data.quantity || undefined;
    this.offset = data.offset || undefined;
    this.page = data.page || undefined;
    this.page_size = data.page_size || undefined;
    this.total_page = data.total_page || undefined;
  }
}