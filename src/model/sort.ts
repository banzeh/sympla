import { EnumSort } from "./enums";

export class Sort {
  /** @description Nome do parâmetro pelo qual os resultados serão ordenados */
  field_sort: string;
  /** @description Ordenação aplicada */
  sort: EnumSort;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.field_sort = data.field_sort || undefined;
    this.sort = data.sort || undefined;
  }
}