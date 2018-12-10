import { Query } from "./query";
import { EnumSort } from "./enums";

/**
 * @description Query parameters para o método listarEventos
 * @class QueryListarEventos
 * @url https://developers.sympla.com.br/api-doc/index.html#operation/getAllEvent
 * @extends {Query}
 */
export class QueryListarEventos extends Query {
  /** @description Para filtrar todos os eventos que começam a partir da data informada */
  from: Date;
  /** 
   * @default true
   * @description Por padrão somente os eventos publicados serão listados 
   * */
  published: boolean;
  /** @description Especifica quantos registros por página o usuário deseja. Mínimo 1 e maxímo 200. */
  page_size: number;
  /** 
   * @default 1
   * @description Número da página dos resultados 
   * */
  page: number;
  /** @default ASC */
  sort: EnumSort;
  /** @description Permite que os resultados sejam ordenados. */
  field_sort: string;
  /** @description Deve ser utilizado para retornar apenas os atributos indicados do objeto. Os atributos indicados devem ser separados por "," */
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.from = data.from || undefined;
    this.sort = data.sort || EnumSort.ASC;
    this.published = data.published || true;
    this.page = data.page || 1;
    this.page_size = data.page_size || 100;
    this.field_sort = data.field_sort || undefined;
    this.fields = data.fields || undefined;
  }
}

/**
 * @description Query parameters para o método listarEventosID
 * @class QueryListarEventosID
 * @url https://developers.sympla.com.br/api-doc/index.html#operation/getEventId
 * @extends {Query}
 */
export class QueryListarEventosID extends Query {
  /** @description Deve ser utilizado para retornar apenas os atributos indicados do objeto. Os atributos indicados devem ser separados por "," */
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.fields = data.fields || '';
  }
}