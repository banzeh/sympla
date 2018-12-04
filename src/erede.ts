import axios, {  AxiosPromise } from 'axios';
import { AuthorizationResponse } from './model/authorizationResponse';
import { CaptureResponse } from './model/captureResponse';

enum URL {
  producao = "https://api.userede.com.br/erede/v1/transactions",
  sandbox = "https://api.userede.com.br/desenvolvedores/v1/transactions"
}

export class ERede {
  private filiacao: string;
  private token: string;
  private sandbox: boolean;

  constructor(filiacao: string, token: string, sandbox: boolean = false) {
    this.filiacao = filiacao;
    this.token = token;
    this.sandbox = sandbox;
  }

  /**
   * @description retorna a URL para integração dependendo do modo (sandbox ou produção)
   */
  getUrl(): string {
    return (this.sandbox) ? URL.sandbox : URL.producao;
  }

  /**
   * @description retorna a credencial de acesso que deve ser passada no HEAD da requisição
   */
  getCredential(): string {
    let credential = this.filiacao + ':' + this.token;
    return 'Basic '.concat(Buffer.from(credential).toString('base64'));
  }

  /**
   * @description gera uma autorização no eRede
   * @url https://www.userede.com.br/desenvolvedores/pt/produto/e-Rede#documentacao-autorizacao
   */
  authorization(data: any): Promise<AuthorizationResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        let response = new AuthorizationResponse();
        let request = await axios({
          method: 'POST',
          url: this.getUrl(),
          headers: {
            'Authorization': this.getCredential()
          },
          data: data
        })
        return resolve(response.parse(request.data))
      } catch(err){
        return reject(err);
      }
    })
  }

  /**
   * @description Cancela uma venda através do TID
   */
  cancelSale(TID: string, data: any): AxiosPromise {
    return axios({
      method: 'POST',
      url: this.getUrl().concat(`/${TID}/refunds`),
      headers: {
        'Authorization': this.getCredential()
      },
      data: data
    })
  }

  capture(TID: string, data: any): Promise<CaptureResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        axios({
          method: 'PUT',
          url: this.getUrl().concat(`/${TID}`),
          headers: {
            'Authorization': this.getCredential()
          },
          data: data
        })
        .then((response) => {

        })
      } catch(err) {
        return reject(err);
      }
    })
  }
}