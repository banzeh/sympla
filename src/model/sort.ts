import { EnumSort } from "./enums";

export class Sort {
  field_sort: string;
  sort: EnumSort;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.field_sort = data.field_sort || undefined;
    this.sort = data.sort || undefined;
  }
}