import { Query } from "./query";
import { EnumSort } from "./enums";

export class QueryListarEventos extends Query {
  from: Date;
  sort: EnumSort;
  published: boolean;
  page_size: number;
  field_sort: string;
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.from = data.from || undefined;
    this.sort = data.sort || undefined;
    this.published = data.published || undefined;
    this.page_size = data.page_size || undefined;
    this.field_sort = data.field_sort || undefined;
    this.fields = data.fields || undefined;
  }
}

export class QueryListarEventosID extends Query {
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.fields = data.fields || '';
  }
}