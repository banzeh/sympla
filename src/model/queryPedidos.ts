import { Query } from "./query";
import { EnumSort } from "./enums";

export class QueryListarPedidosEvento extends Query {
  /** 
   * @description Retorna todos os pedidos com qualquer status 
   * @true: Retorna os pedidos de todos os status; 
   * @false: Retorna apenas os pedidos com status "A". 
   * @default false
   * */
  status: boolean;
  /** @description  Especifica quantos registros por página o usuário deseja */
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
    this.status = data.status || false;
    this.page_size = data.page_size || 100;
    this.page = data.page || 1;
    this.field_sort = data.field_sort || undefined;
    this.sort = data.sort || EnumSort.ASC;
    this.fields = data.fields || undefined;
  }
}

export class QueryListarPedidosID extends Query {
  /** @description Deve ser utilizado para retornar apenas os atributos indicados do objeto. Os atributos indicados devem ser separados por "," */
  fields: string;

  constructor(data: any) {
    super();
    data = (typeof data === 'undefined') ? {} : data;
    this.fields = data.fields || '';
  }
}

export class QueryListarParticipantesPedido extends Query {
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
    this.page_size = data.page_size || undefined;
    this.page = data.page || undefined;
    this.field_sort = data.field_sort || undefined;
    this.sort = data.sort || undefined;
    this.fields = data.fields || undefined;
  }
}