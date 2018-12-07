import axios, {  AxiosPromise } from 'axios';
import { QueryListarEventos, QueryListarEventosID } from "./model/queryEventos";
import { ResponseListarEventos, ResponseListarEventosID } from './model/responseEventos';
import { QueryListarPedidosEvento, QueryListarPedidosID, QueryListarParticipantesPedido } from './model/queryPedidos';
import { ResponseListarPedidosEvento, ResponseListarPedidosIdentificador, ResponseListarParticipantesPedido } from './model/responsePedidos';
import { QueryListarParticipantesEvento, QueryListarParticipantesIngresso } from './model/queryParticipants';
import { ResponseListarParticipantesEvento, ResponseListarParticipantesIngresso } from './model/responseParticipants';

export class Sympla {
  private token: string;
  private url: string = 'https://api.sympla.com.br';

  constructor(token: string = '') {
    if ( token === '' ) throw 'Informe o token para acesso ao Sympla';
    this.token = token;
  }

  // TODO Retornar um objeto do tipo ResponseListarEventos
  listarEventos(queryListarEventos ? : QueryListarEventos): Promise < ResponseListarEventos > {
    return new Promise((resolve, reject) => {
      axios({
          method: 'GET',
          url: this.url.concat('/public/v3/events'),
          params: queryListarEventos,
          headers: {
            's_token': this.token
          }
        })
        .then((result) => resolve(new ResponseListarEventos(result.data)))
        .catch(reject)
    })
  }

  listarEventosID(event_id: number, queryListarEventos ? : QueryListarEventosID): Promise<ResponseListarEventosID> {
    return new Promise((resolve, reject) => {
      axios({
          method: 'GET',
          url: this.url.concat(`/public/v3/events/${event_id}`),
          params: queryListarEventos,
          headers: {
            's_token': this.token
          }
        })
        .then((result) => resolve(new ResponseListarEventosID(result.data)))
        .catch(reject)
    })
  }

  listarPedidosEvento(event_id: number, queryListarPedidosEvento? : QueryListarPedidosEvento): Promise<ResponseListarPedidosEvento> {
    return new Promise((resolve, reject) => {
      axios({
          method: 'GET',
          url: this.url.concat(`/public/v3/events/${event_id}/orders`),
          params: queryListarPedidosEvento,
          headers: {
            's_token': this.token
          }
        })
        .then((result) => resolve(new ResponseListarPedidosEvento(result.data)))
        .catch(reject)
    })
  }

  listarPedidosIdentificador(event_id: number, order_id: string, queryListarPedidosId? : QueryListarPedidosID): Promise<ResponseListarPedidosIdentificador> {
    return new Promise((resolve, reject) => {
      axios({
          method: 'GET',
          url: this.url.concat(`/public/v3/events/${event_id}/orders/${order_id}`),
          params: queryListarPedidosId,
          headers: {
            's_token': this.token
          }
        })
        .then((result) => resolve(new ResponseListarPedidosIdentificador(result.data)))
        .catch(reject)
    })
  }

  listarParticipantesPedido(event_id: number, order_id: string, queryListarParticipantesPedido? : QueryListarParticipantesPedido): Promise<ResponseListarParticipantesPedido> {
    return new Promise((resolve, reject) => {
      axios({
          method: 'GET',
          url: this.url.concat(`/public/v3/events/${event_id}/orders/${order_id}/participants`),
          params: queryListarParticipantesPedido,
          headers: {
            's_token': this.token
          }
        })
        .then((result) => resolve(new ResponseListarParticipantesPedido(result.data)))
        .catch(reject)
    })
  }

  listarParticipantesEvento(event_id: number, queryListarParticipantesEvento ?: QueryListarParticipantesEvento): Promise<ResponseListarParticipantesEvento> {
    return new Promise((resolve, reject) => {
      axios({
          method: 'GET',
          url: this.url.concat(`/public/v3/events/${event_id}/participants`),
          params: queryListarParticipantesEvento,
          headers: {
            's_token': this.token
          }
        })
        .then((result) => resolve(new ResponseListarParticipantesEvento(result.data)))
        .catch(reject)
    })
  }

  listarParticipantesIngresso(event_id: number, participant_id: number, queryListarParticipantesEvento ?: QueryListarParticipantesIngresso): Promise<ResponseListarParticipantesIngresso> {
    return new Promise((resolve, reject) => {
      axios({
          method: 'GET',
          url: this.url.concat(`/public/v3/events/${event_id}/participants/${participant_id}`),
          params: queryListarParticipantesEvento,
          headers: {
            's_token': this.token
          }
        })
        .then((result) => resolve(new ResponseListarParticipantesIngresso(result.data)))
        .catch(reject)
    })
  }
}