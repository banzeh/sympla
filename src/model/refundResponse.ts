import { ResponseBase } from "./responseBase";
import { Link } from "./link";

export class RefundResponse extends ResponseBase {

  refundId: string = '';
  tid: string = '';
  nsu: string = '';
  cancelId: string = '';
  refundDateTime: Date = new Date();
  status: string = '';
  amount: number = 0;


  constructor(returnCode: string = '', returnMessage: string = '', links: Array<Link> = []){
    super(returnCode, returnMessage, links);
  }

  parse(result: any): RefundResponse {
    this.returnCode = result.returnCode || '';
    this.returnMessage = result.returnMessage || '';
    this.links = result.links || [];
    this.refundId = result.refundId || '';
    this.tid = result.tid || '';
    this.nsu = result.nsu || '';
    this.cancelId = result.authorizationCode || '';
    this.refundDateTime = result.dateTime || new Date();
    this.status = result.status || '';
    this.amount = result.amount || 0;
    return this;
  }

}