import { Query } from "./query";
import { EnumSort } from "./enums";

export class QueryListarParticipantesEvento extends Query {
  ticket_number: string;
  page_size: number;
  page: number;
  field_sort: string;
  sort: EnumSort;
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.ticket_number = data.ticket_number || undefined;
    this.page_size = data.page_size || undefined;
    this.page = data.page || undefined;
    this.field_sort = data.field_sort || undefined;
    this.sort = data.sort || undefined;
    this.fields = data.fields || undefined;
  }
}

export class QueryListarParticipantesIngresso extends Query {
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.fields = data.fields || undefined;
  }
}