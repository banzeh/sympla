export class Pagination {
  /** @description Se há uma próxima página com resultados */
  has_next: boolean;
  /** @description Se há uma página anterior de resultados */
  has_prev: boolean;
  /** @description Total de resultados */
  quantity: number;
  /** @description Quantidade de resultados anteriores à página atual */
  offset: number;
  /** @description Página atual */
  page: number;
  /** 
   * @description Quantidade de resultados por página. Mínimo 1 e máximo 200 
   * @default 100
   **/
  page_size: number;
  /** @description Total de páginas */
  total_page: number;

  constructor(data: any){
    this.has_next = data.has_next || false;
    this.has_prev = data.has_prev || false;
    this.quantity = data.quantity || undefined;
    this.offset = data.offset || undefined;
    this.page = data.page || undefined;
    this.page_size = data.page_size || 100;
    this.total_page = data.total_page || undefined;
  }
}