export class EventAddress {
  name: string;
  address: string;
  address_num: string;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;

  constructor(data: any){
    data = (typeof data === 'undefined') ? {} : data;
    this.name = data.name || undefined;
    this.address = data.address || undefined;
    this.address_num = data.address_num || undefined;
    this.neighborhood = data.neighborhood || undefined;
    this.city = data.city || undefined;
    this.state = data.state || undefined;
    this.zip_code = data.zip_code || undefined;
    this.country = data.country || undefined;
  }

}

export class EventHost {
  name: string;
  description: string;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.name = data.name || undefined;
    this.description = data.description || undefined;
  }
}

export class EventCategory {
  name: string;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.name = data.name || undefined;
  }
}

export class Event {
  id: number;
  start_date: string;
  end_date: string;
  name: string;
  detail: string;
  private_event: boolean;
  published: boolean;
  cancelled: boolean;
  image: string;
  url: string;
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