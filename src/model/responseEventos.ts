import { Event } from "./event";
import { Sort } from "./sort";
import { Pagination } from "./pagination";

export class ResponseListarEventos {
  /** @description Array of object (Events) */
  data: Array<Event>;
  /** @description object (Sort) */
  sort: Sort;
  /** @description object (Pagination) */
  pagination: Pagination;

  constructor(data: any) {
    this.data = [];
    for ( var i = 0; i < data.data.length; i++ ){
      this.data.push(new Event(data.data[i]));
    }
    this.sort = new Sort(data.sort) || undefined;
    this.pagination = new Pagination(data.pagination) || undefined;
  }
}

export class ResponseListarEventosID {
  /** @description object (Events) */
  data:Event;

  constructor(data: any) {
    this.data = new Event(data.data) || undefined;
  }
}