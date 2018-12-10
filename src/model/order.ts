import { EnumOrderStatus, EnumTransactionType } from "./enums";

export class InvoiceInfo {
  doc_type: string;
  doc_number: string;
  client_name: string;
  address_zip_code: string;
  address_street: string;
  address_street2: string;
  address_neighborhood: string;
  address_city: string;
  address_states: string;
  mei: boolean;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.doc_type = data.doc_type || undefined;
    this.doc_number = data.doc_number || undefined;
    this.client_name = data.client_name || undefined;
    this.address_zip_code = data.address_zip_code || undefined;
    this.address_street = data.address_street || undefined;
    this.address_street2 = data.address_street2 || undefined;
    this.address_neighborhood = data.address_neighborhood || undefined;
    this.address_city = data.address_city || undefined;
    this.address_states = data.address_states || undefined;
    this.mei = data.mei || false;
  }
}

export class Order {
  /** @description Identificador único do pedido */
  id: string;
  /** @description Identificador único do evento */
  event_id: string;
  /** @description Data do pedido */
  order_date: string;
  /** @description Situação do pedido */
  order_status: EnumOrderStatus;
  /** @description Data de quando um pedido foi atualizado. Campo atualizado quando ocorre uma mudança no campo order_status ou troca de titularidade */
  updated_date: string;
  /** @description Código promocional utilizado */
  discount_code: string;
  /** @description Forma de pagamento */
  transaction_type: EnumTransactionType;
  /** @description Valor total do pedido */
  order_total_sale_price: number;
  /** @description Nome do comprador */
  buyer_first_name: string;
  /** @description Sobrenome do comprador */
  buyer_last_name: string;
  /** E-mail do comprador */
  buyer_email: string;
  /** 
   * @description Dados pessoais e de endereço do tomador do pedido.  
   * @obs Para que esses dados sejam habilitados, é necessário solicitar à Sympla.
   * @url https://ajuda.sympla.com.br/hc/pt-br/articles/360000508286-Como-posso-coletar-os-dados-dos-participantes-para-emiss%C3%A3o-de-Nota-Fiscal-
  */
  invoice_info: InvoiceInfo;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.id = data.id || undefined;
    this.event_id = data.event_id || undefined;
    this.order_date = data.order_date || undefined;
    this.order_status = data.order_status || undefined;
    this.updated_date = data.updated_date || undefined;
    this.discount_code = data.discount_code || undefined;
    this.transaction_type = data.transaction_type || undefined;
    this.order_total_sale_price = data.order_total_sale_price || undefined;
    this.buyer_first_name = data.buyer_first_name || undefined;
    this.buyer_last_name = data.buyer_last_name || undefined;
    this.buyer_email = data.buyer_email || undefined;
    this.invoice_info = new InvoiceInfo(data.invoice_info || undefined);
  }
}