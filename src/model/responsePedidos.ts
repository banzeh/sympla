import { Sort } from "./sort";
import { Pagination } from "./pagination";
import { Order } from "./order";
import { Participants } from "./participants";

export class ResponseListarPedidosEvento {
  data: Array<Order>;
  sort: Sort;
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
  data: Order;

  constructor(data: any) {
    this.data = new Order(data.data);
  }
}

export class ResponseListarParticipantesPedido {
  data: Array<Participants>;
  sort: Sort;
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