import { type } from "os";

export class CheckIn {
  id: number;
  check_in: boolean;
  check_in_date: string;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.id = data.id || undefined;
    this.check_in = data.check_in || undefined;
    this.check_in_date = data.check_in_date || undefined;
  }
}

export class CustomForm {
  id: number;
  name: string;
  value: string;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.id = data.id || undefined;
    this.name = data.name || undefined;
    this.value = data.value || undefined;
  }
}

export class Participants {
  id: number;
  order_id: string;
  first_name: string;
  last_name: string;
  email: string;
  ticket_number: string;
  ticket_num_qr_code: string;
  ticket_name: string;
  pdv_user: string;
  ticket_sale_price: number;
  checkin: CheckIn;
  custom_form: Array<CustomForm> = [];

  constructor(data: any) {
    this.id = data.id || undefined;
    this.order_id = data.order_id || undefined;
    this.first_name = data.first_name || undefined;
    this.last_name = data.last_name || undefined;
    this.email = data.email || undefined;
    this.ticket_number = data.ticket_number || undefined;
    this.ticket_num_qr_code = data.ticket_num_qr_code || undefined;
    this.ticket_name = data.ticket_name || undefined;
    this.pdv_user = data.pdv_user || undefined;
    this.ticket_sale_price = data.ticket_sale_price || undefined;
    this.checkin = new CheckIn(data.checkin) || undefined;
    data.custom_form = (typeof data.custom_form.length === 'number') ? data.custom_form : [];
    for ( var i = 0; i < data.custom_form.length; i++ ){
      this.custom_form.push(new CustomForm(data.custom_form[i]));
    }
  }
}