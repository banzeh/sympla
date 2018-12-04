import { ResponseBase } from "./responseBase";
import { Link } from './link'

/**
 * @description Classe com o modelo de resposta base
 * @author Flavio Takeuchi <flavio@banzeh.com.br>
 */
export class CaptureResponse extends ResponseBase {
  
  dateTime: Date = new Date();
  tid: string = '';
  nsu: string = '';
  reference: string = '';
  authorizationCode: string = '';

  constructor(returnCode: string = '', returnMessage: string = '', links: Array<Link> = []){
    super(returnCode, returnMessage, links)
  }

  /**
   * @description Realiza o parse no objeto utilizando um objeto javascript
   * @param result Objeto com os dados base para fazer o parse no objeto
   */
  parse(result: any) {
    this.dateTime = new Date(result.dateTime) || new Date();
    this.tid = result.tid || '';
    this.nsu = result.nsu || '';
    this.reference = result.reference || '';
    this.authorizationCode = result.authorizationCode || '';
    this.returnCode = result.returnCode;
    this.returnMessage = result.returnMessage;
    this.links = result.links || [];
    
    return this;
  }

}