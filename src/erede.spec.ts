import { ERede } from './erede'
import { expect } from 'chai';
import 'mocha';
import * as randomstring from 'randomstring'
import { AuthorizationResponse } from './model/authorizationResponse';
import { CaptureResponse } from './model/captureResponse';
import { RefundResponse } from './model/refundResponse';

var erede = new ERede("10000980", "b884f83537a441e7ab96cbfd9a76fa8f", true);

function cancelaVenda(resultCapture: CaptureResponse): Promise<RefundResponse> {
  return new Promise((resolve, reject) => {
    const cancelSaleParams = {
      "amount": 2099
    };

    return erede.cancelSale(resultCapture.tid, cancelSaleParams)
    .then((resultCancel) => {
      expect(resultCancel.returnCode).to.be.oneOf(['359','360']);
      resolve(resultCancel)
    })
    .catch(reject)
  })
}

function capturaVenda(resultAuthorization: AuthorizationResponse): Promise<CaptureResponse> {
  const captureParams = {
    amount: 2099
  };

  return erede.capture(resultAuthorization.tid, captureParams);
}

describe('E-Rede sdk nodejs', () => {
  it('should return base64 credetial token', function (done) {
    this.timeout(0);

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
  
    erede.authorization(authorizationParams)
    .then((resultAuthorization) => {
      expect(resultAuthorization.reference).to.equal(authorizationParams.reference);
      expect(resultAuthorization.returnMessage).to.equal('Success.');
      return resultAuthorization;
    })
    .then(capturaVenda)
    .then(cancelaVenda)
    .catch((err) => {
      console.log('ERRO', err)
    })
  });
})
