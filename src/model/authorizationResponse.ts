import { ResponseBase } from "./responseBase";
import { Link } from "./link";

export class AuthorizationResponse extends ResponseBase {
  dateTime: Date = new Date();
  affiliation: string = '';
  status: string = '';
  reference: string = '';
  tid: string = '';
  nsu: string = '';
  authorizationCode: string = '';
  kind: string = '';
  amount: number = 0;
  installments: string = '';
  cardHolderName: string = '';
  cardBin: string = '';
  last4: string = '';
  softDescriptor: string = '';
  origin: string = '';
  subscription: string = '';
  distributorAffiliation: string = '';

  constructor(returnCode: string = '', returnMessage: string = '', links: Array<Link> = []){
    super(returnCode, returnMessage, links);
  }

  parse(result: any) {
    this.returnCode = result.returnCode || '';
    this.returnMessage = result.returnMessage || '';
    this.links = result.links || [];
    this.dateTime = new Date(result.dateTime) || null;
    this.affiliation = result.affiliation || '';
    this.status = result.status || '';
    this.reference = result.reference || '';
    this.tid = result.tid || '';
    this.nsu = result.nsu || '';
    this.authorizationCode = result.authorizationCode || '';
    this.kind = result.kind || '';
    this.amount = result.amount || '';
    this.installments = result.installments || '';
    this.cardHolderName = result.cardHolderName || '';
    this.cardBin = result.cardBin || '';
    this.last4 = result.last4 || '';
    this.softDescriptor = result.softDescriptor || '';
    this.origin = result.origin || '';
    this.subscription = result.subscription || '';
    this.distributorAffiliation = result.distributorAffiliation || '';

    return this;
  }

}