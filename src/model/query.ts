import { Library } from "../uLibrary";

export class Query {
  // []: any;

  /**
   *@description Transforma as variáveis da classe em um objeto de query na requisição
   */
  parse(): (string | undefined)[] {
    var self = (<any>this);
    let properties = Object.getOwnPropertyNames(this);
    return properties.map((value) => {
      let val = self[value];
      // Verifica se o objeto é uma data
      if (val && typeof val.getMonth === 'function') {
        return `${value}=${Library.formatDate(val)}`
      }

      if (self[value] !== '') { // Se existir algum valor
        return `${value}=${self[value]}`;
      }
    }).filter(function (el) { 
      return el != null; // Remove elementos nulos
    });
  }
}