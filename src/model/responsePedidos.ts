import { Sort } from "./sort";
import { Pagination } from "./pagination";
import { Order } from "./order";
import { Participants } from "./participants";

export class ResponseListarPedidosEvento {
  /** @description Array of object (Order) */
  data: Array<Order>;
  /** @description object (Sort) */
  sort: Sort;
  /** @description object (Pagination) */
  pagination: Pagination;

  constructor(data: any) {
    this.data = [];
    for ( var i = 0; i < data.data.length; i++ ){
      this.data.push(new Order(data.data[i]));
    }
    this.sort = new Sort(data.sort) || undefined;
    this.pagination = new Pagination(data.pagination) || undefined;
  }
}

export class ResponseListarPedidosIdentificador {
  /** @description object (Order) */
  data: Order;

  constructor(data: any) {
    this.data = new Order(data.data);
  }
}

export class ResponseListarParticipantesPedido {
  /** @description Array of object (Order) */
  data: Array<Participants>;
  /** @description object (Participants) */
  sort: Sort;
  /** @description object (Pagination) */
  pagination: Pagination;

  constructor(data: any) {
    this.data = [];
    for ( var i = 0; i < data.data.length; i++ ){
      this.data.push(new Participants(data.data[i]));
    }
    this.sort = new Sort(data.sort) || undefined;
    this.pagination = new Pagination(data.pagination) || undefined;
  }
}