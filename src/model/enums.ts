export enum EnumSort {
  ASC = "ASC",
  DESC = "DESC"
}

export enum EnumOrderStatus {
  A = "Approved",
  P = "Pending",
  NA = "Not approved",
  NP = "Not paid",
  R = "Request for refund",
  C = "Cancelled"
}

export enum EnumTransactionType {
  BOLETO_BANCARIO,
  CREDIT_CARD,
  DEBITO_ONLINE,
  DEBIT_CARD,
  FREE,
  MANUAL,
  PAYPAL,
  PDV
}