import { EnumOrderStatus, EnumTransactionType } from "./enums";
import { Sort } from "./sort";
import { Pagination } from "./pagination";

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
    this.mei = data.mei || undefined;
  }
}

export class Order {
  id: string;
  event_id: string;
  order_date: string;
  order_status: EnumOrderStatus;
  updated_date: string;
  discount_code: string;
  transaction_type: EnumTransactionType;
  order_total_sale_price: number;
  buyer_first_name: string;
  buyer_last_name: string;
  buyer_email: string;
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