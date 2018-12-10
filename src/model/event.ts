export class EventAddress {
  /** @description Título da localização */
  name: string;
  /** @description Endereço */
  address: string;
  /** @description Número do local */
  address_num: string;
  /** @description Complemento on-line as propriedades city e name serão Evento online e o restante será null.

*/
  address_alt: string;
  /** @description Bairro */
  neighborhood: string;
  /** @description Cidade */
  city: string;
  /** @description Estado - Abreviação de 2 dígitos */
  state: string;
  /** @description CEP */
  zip_code: string;
  /** @description Pais */
  country: string;

  constructor(data: any){
    data = (typeof data === 'undefined') ? {} : data;
    this.name = data.name || undefined;
    this.address = data.address || undefined;
    this.address_num = data.address_num || undefined;
    this.address_alt = data.address_alt || undefined;
    this.neighborhood = data.neighborhood || undefined;
    this.city = data.city || undefined;
    this.state = data.state || undefined;
    this.zip_code = data.zip_code || undefined;
    this.country = data.country || undefined;
  }

}

export class EventHost {
  /** @description Nome do organizador */
  name: string;
  /** @description Descrição do organizador */
  description: string;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.name = data.name || undefined;
    this.description = data.description || undefined;
  }
}

export class EventCategory {
  /** @description Nome da categoria */
  name: string;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.name = data.name || undefined;
  }
}

export class Event {
  /** @description Identificador único do evento */
  id: number;
  /** @description Data de início do evento */
  start_date: string;
  /** @description Data final do evento */
  end_date: string;
  /** @description Nome do evento */
  name: string;
  /** @description Descrição do evento */
  detail: string;
  /** Se o evento está como privado */
  private_event: boolean;
  /** Se o evento está publicado */
  published: boolean;
  /** @description Se o evento está cancelado */
  cancelled: boolean;
  /** @description Url da imagem do evento */
  image: string;
  /** @description Url do evento */
  url: string;
  /** @⚠ Caso o evento seja on-line as propriedades city e name serão Evento online e o restante será null. */
  address: EventAddress;
  host: EventHost;
  category_prim: EventCategory;
  category_sec: EventCategory;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.id = data.id || undefined;
    this.start_date = data.start_date || undefined;
    this.end_date = data.end_date || undefined;
    this.name = data.name || undefined;
    this.detail = data.detail || undefined;
    this.private_event = data.private_event || undefined;
    this.published = data.published || undefined;
    this.cancelled = data.cancelled || undefined;
    this.image = data.image || undefined;
    this.url = data.url || undefined;
    this.address = new EventAddress(data.address) || undefined;
    this.host = new EventHost(data.host) || undefined;
    this.category_prim = new EventCategory(data.category_prim) || undefined;
    this.category_sec = new EventCategory(data.category_sec) || undefined;
  }
}