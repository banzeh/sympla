export class Link {
  method: string;
  rel: string;
  href: string;

  constructor(method: string, rel: string, href: string){
    this.method = method;
    this.rel    = rel;
    this.href   = href;
  }

  parse(result: any): Link {
    this.method = result.method;
    this.rel    = result.rel;
    this.href   = result.href;
    return this;
  }
}