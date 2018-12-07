import { Participants } from "./participants";
import { Sort } from "./sort";
import { Pagination } from "./pagination";

export class ResponseListarParticipantesEvento {
  data: Array<Participants>;
  sort: Sort;
  pagination: Pagination;

  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    data.data = (typeof data.data.length === 'number') ? data.data : [];
    this.data = [];
    for ( var i = 0; i < data.data.length; i++){
      this.data.push( new Participants(data.data[i]) );
    }
    this.sort = new Sort(data.sort);
    this.pagination = new Pagination(data.pagination);
  }
}

export class ResponseListarParticipantesIngresso {
  data: Participants;
  constructor(data: any) {
    data = (typeof data === 'undefined') ? {} : data;
    this.data = new Participants(data.data);
  }
}