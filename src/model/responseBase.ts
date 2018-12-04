import { Link } from './link';

export class ResponseBase {
  returnCode: string;
  returnMessage: string;
  links: Array<Link>;

  constructor(returnCode: string, returnMessage: string, links: Array<Link>){
    this.returnCode = returnCode;
    this.returnMessage = returnMessage;
    this.links = links;
  }

  parse(data: any): ResponseBase {
    this.returnCode = data.returnCode || '';
    this.returnMessage = data.returnMessage || '';
    this.links = data.links || [];
  }
}