import { Query } from "./query";
import { EnumSort } from "./enums";

export class QueryListarParticipantesEvento extends Query {
  /** @description Código escrito no ingresso. Este atributo não deverá ser utilizado com identificador único do ingresso, pois em caso de troca de titularidade esse código irá mudar. */
  ticket_number: string;
  page_size: number;
  /** @description Número da página dos resultados */
  page: number;
  /** @description Permite que os resultados sejam ordenados */
  field_sort: string;
  /** @default ASC */
  sort: EnumSort;
  /** @description Deve ser utilizado para retornar apenas os atributos indicados do objeto. Os atributos indicados devem ser separados por "," */
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
  /** @description Deve ser utilizado para retornar apenas os atributos indicados do objeto. Os atributos indicados devem ser separados por "," */
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.fields = data.fields || undefined;
  }
}