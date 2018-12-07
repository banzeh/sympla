export class Library {

  // retorna uma string com a data formatada no padrão da S
  static formatDate(data: Date): string {
    let month = "0".concat((data.getMonth() + 1).toString()).slice(-2);
    let day = "0".concat((data.getDate()).toString()).slice(-2);
    let hour = "0".concat((data.getHours()).toString()).slice(-2);
    let minutes = "0".concat((data.getMinutes()).toString()).slice(-2);

    return `${data.getFullYear()}-${month}-${day} ${hour}:${minutes}`;
  }
}