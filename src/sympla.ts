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

  /**
   * 
   * @param token Chave de acesso do Sympla. Deve ser obtido através do meny "Minha Conta" e navegar até a aba Integrações
   * @url https://ajuda.sympla.com.br/hc/pt-br/articles/360020278592-A-Sympla-possui-uma-API-p%C3%BAblica-
   * 
   */
  constructor(token: string) {
    if ( token === '' ) throw 'Informe o token para acesso ao Sympla';
    this.token = token;
  }

  /**
   * @description Retorna os eventos criados pelo organizador.
   * @url https://developers.sympla.com.br/api-doc/index.html#operation/getAllEvent
   * @param queryListarEventos Query com os filtros para obter a lista de eventos
   */
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

  /**
   * @description Retorna o evento correspondente ao identificador informado
   * @url https://developers.sympla.com.br/api-doc/index.html#operation/getEventId
   * @param event_id Identificador único do evento
   * @param queryListarEventosID Query com os filtros para obter a lista de eventos por identificador
   */
  listarEventosID(event_id: number, queryListarEventosID ? : QueryListarEventosID): Promise<ResponseListarEventosID> {
    return new Promise((resolve, reject) => {
      axios({
          method: 'GET',
          url: this.url.concat(`/public/v3/events/${event_id}`),
          params: queryListarEventosID,
          headers: {
            's_token': this.token
          }
        })
        .then((result) => resolve(new ResponseListarEventosID(result.data)))
        .catch(reject)
    })
  }

  /**
   * 
   * @description Retorna os pedidos de um determinado evento
   * @url https://developers.sympla.com.br/api-doc/index.html#operation/getListOrders
   * @param event_id Identificador único do evento
   * @param queryListarPedidosEvento Query com os filtros para obter a lista de pedidos do evento
   */
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

  /**
   * 
   * @description Retorna o pedido correspondente ao identificador informado.
   * @param event_id Identificador único do evento
   * @param order_id Identificador único do pedido
   * @param queryListarPedidosId 
   */
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

  /**
   * @description Retorna o(s) participante(s) contido(s) em um determinado pedido.
   * @param event_id Identificador único do evento
   * @param order_id Identificador único do pedido
   * @param queryListarParticipantesPedido 
   */
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

  /**
   * @description Retorna os participantes de um determinado evento.
   * @param event_id Identificador único do evento
   * @param queryListarParticipantesEvento 
   */
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

  /**
   * @description Retorna o participante correspondente ao ingresso informado
   * @param event_id Identificador único do evento
   * @param participant_id Identificador único do ingresso
   * @param queryListarParticipantesEvento 
   */
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

export { 
  QueryListarEventos, 
  QueryListarEventosID, 
  ResponseListarEventos, 
  ResponseListarEventosID,
  QueryListarPedidosEvento, 
  QueryListarPedidosID,
  ResponseListarPedidosEvento, 
  ResponseListarPedidosIdentificador,
  QueryListarParticipantesEvento, 
  QueryListarParticipantesIngresso,
  ResponseListarParticipantesEvento, 
  ResponseListarParticipantesIngresso,
  QueryListarParticipantesPedido, 
  ResponseListarParticipantesPedido
}