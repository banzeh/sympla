export class CheckIn {
  /** @description Identificador único do check-in */
  id: number;
  /** @description Indica se o check-in do ingresso foi realizado */
  check_in: boolean;
  /** Data e hora em que o check-in foi realizado */
  check_in_date: string;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.id = data.id || undefined;
    this.check_in = data.check_in || false;
    this.check_in_date = data.check_in_date || undefined;
  }
}

export class CustomForm {
  /** @description Identificador único do campo personalizado */
  id: number;
  /** @description Nome do campo personalizado */
  name: string;
  /** @description Valor do campo personalizado */
  value: string;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.id = data.id || undefined;
    this.name = data.name || undefined;
    this.value = data.value || undefined;
  }
}

export class Participants {
  /** @description Identificador único do ingresso */
  id: number;
  /** @description Identificador único do pedido */
  order_id: string;
  /** @description Nome que está escrito no ingresso */
  first_name: string;
  /** @description Sobrenome que está escrito no ingresso */
  last_name: string;
  /** @description E-mail que está escrito no ingresso */
  email: string;
  /** @description Código escrito no ingresso. Este atributo não deverá ser utilizado como identificador único do ingresso, pois em caso de troca de titularidade esse código irá mudar. */
  ticket_number: string;
  /** @description Código escrito no QR Code. Este atributo não deverá ser utilizado como identificador único do ingresso, pois em caso de troca de titularidade esse código irá mudar. */
  ticket_num_qr_code: string;
  /** @description Título do ingresso */
  ticket_name: string;
  /** @description Nome do usuário PDV que realizou a venda */
  pdv_user: string;
  /** @description Preço de venda do ingresso */
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