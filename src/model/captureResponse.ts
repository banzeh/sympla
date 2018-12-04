import { ResponseBase } from "./responseBase";
import { Link } from './link'

export class CaptureResponse extends ResponseBase {
  
  dateTime: Date = new Date();
  nsu: string = '';
  amount: number = 0;


  constructor(returnCode: string = '', returnMessage: string = '', links: Array<Link> = []){
    super(returnCode, returnMessage, links)
  }

  parse(result: any) {
    this.dateTime = new Date(result.dateTime) || new Date();
    this.nsu = result.nsu || '';
    this.amount = result.amount || 0;
    
    return this;
  }

}