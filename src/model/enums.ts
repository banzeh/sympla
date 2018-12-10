export enum EnumSort {
  ASC = "ASC",
  DESC = "DESC"
}

export enum EnumOrderStatus {
  /** @description Significa que o pedido está aprovado e não varia de acordo com o método de pagamento. */
  A = "Approved",
  /** @description Significa que o pedido está pendente de aprovação (cartão de crédito) ou pendente de pagamento (boleto e débito bancário) */
  P = "Pending",
  /** @description Significa que o pedido não foi aprovado e, portanto, não foi pago. Esse status é exibido apenas para pedidos adquiridos por cartão de crédito */
  NA = "Not approved",
  /** @description Significa que o pagamento não foi concluído e, portanto, não foi pago. Esse status é exibido apenas para pedidos adquiridos por boleto bancário ou débito online */
  NP = "Not paid",
  /** @description Significa que foi solicitado o reembolso de um pedido */
  R = "Request for refund",
  /** @description Significa que o pedido foi reembolsado */
  C = "Cancelled"
}

export enum EnumTransactionType {
  /** @description Pagamento via boleto bancário */
  BOLETO_BANCARIO,
  /** @description Pagamento via cartão de crédito */
  CREDIT_CARD,
  /** @description Pagamento via débito online */
  DEBITO_ONLINE,
  /** @description Pagamento via cartão de débito */
  DEBIT_CARD,
  /** @description Pedido grátis */
  FREE,
  /** @description O pedido foi criado via ferramenta de "adicionar pedido" na aba de "Participantes" */
  MANUAL,
  /** @description Pagamento via Paypal */
  PAYPAL,
  /** @description Pagamento realizado junto ao ponto de venda */
  PDV
}