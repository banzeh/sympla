import { Query } from "./query";
import { EnumSort } from "./enums";

export class QueryListarPedidosEvento extends Query {
  status: boolean;
  page_size: number;
  page: number;
  field_sort: string;
  sort: EnumSort;
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.status = data.status || undefined;
    this.page_size = data.page_size || undefined;
    this.page = data.page || undefined;
    this.field_sort = data.field_sort || undefined;
    this.sort = data.sort || undefined;
    this.fields = data.fields || undefined;
  }
}

export class QueryListarPedidosID extends Query {
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.fields = data.fields || '';
  }
}

export class QueryListarParticipantesPedido extends Query {
  page_size: number;
  page: number;
  field_sort: string;
  sort: EnumSort;
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.page_size = data.page_size || undefined;
    this.page = data.page || undefined;
    this.field_sort = data.field_sort || undefined;
    this.sort = data.sort || undefined;
    this.fields = data.fields || undefined;
  }
}