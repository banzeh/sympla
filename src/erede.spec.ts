import { ERede } from './erede'
import { expect } from 'chai';
import * as randomstring from 'randomstring'
import { AuthorizationResponse } from './model/authorizationResponse';
import { CaptureResponse } from './model/captureResponse';
import { RefundResponse } from './model/refundResponse';

var erede = new ERede("10000980", "b884f83537a441e7ab96cbfd9a76fa8f", true);

const authorizationParams = {
  "capture": false,
  "reference": randomstring.generate(15),
  "amount": 2099,
  "cardholderName": "John Snow", 
  "cardNumber": "5448280000000007",
  "expirationMonth": 12, 
  "expirationYear": 2020, 
  "securityCode": "235"
};

describe('Teste SDK E-Rede', () => {
  let authorization = erede.authorization(authorizationParams);
  let captura       = authorization.then(capturaVenda);
  let cancelamento  = captura.then(cancelaVenda);
  let listaCancelamentos = cancelamento.then(getCancelamento);
  
  var refundResponse: RefundResponse;
  var resultAuthorization: AuthorizationResponse;
  var captureResponse: CaptureResponse;

  it('Teste de Autorização da Transação', async function() {
    this.timeout(0);
    resultAuthorization = await authorization;
    expect(resultAuthorization.reference).to.be.equal(authorizationParams.reference);
    expect(resultAuthorization.returnMessage).to.be.equal('Success.');

  })

  it('Teste de Captura da Transação', async function() {
    this.timeout(0);
    captureResponse = await captura;
    expect(captureResponse.returnMessage).to.be.equal('Success.');
    expect(captureResponse.returnCode).to.be.equal('00');
    expect(captureResponse.tid).to.be.equal(resultAuthorization.tid);
  })

  it('Teste de Cancelamento da Transação', async function() {
    this.timeout(0);
    refundResponse = await cancelamento;
    expect(refundResponse.returnCode).to.be.oneOf(['359','360']);
    expect(refundResponse.returnMessage).to.be.equal('Refund successful.');
    expect(refundResponse.tid).to.be.equal(captureResponse.tid);
  })

  it('Lista de Cancelamento', async function() {
    this.timeout(0);
    let lista = await listaCancelamentos;
    expect(lista[0].status).to.be.equal('Done');
    expect(lista[0].amount).to.be.equal(authorizationParams.amount);
    expect(lista[0].refundId).to.be.equal(refundResponse.refundId);
  })
})




function capturaVenda(resultAuthorization: AuthorizationResponse): Promise<CaptureResponse> {
  const captureParams = {
    amount: 2099
  };
  return erede.capture(resultAuthorization.tid, captureParams);
}

function cancelaVenda(resultCapture: CaptureResponse): Promise<RefundResponse> {
  const cancelSaleParams = {
    "amount": 2099
  };
  return erede.cancelSale(resultCapture.tid, cancelSaleParams)
}

function getCancelamento(refundResponse: RefundResponse): Promise<RefundResponse[]> {
  return Promise.resolve(erede.getRefunds(refundResponse.tid));
}
