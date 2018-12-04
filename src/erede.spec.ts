import { ERede } from './erede'
import { expect } from 'chai';
import 'mocha';
import * as randomstring from 'randomstring'

var erede = new ERede("10000980", "b884f83537a441e7ab96cbfd9a76fa8f", true);

function cancelaVenda(resultAuthorization: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const cancelSaleParams = {
      "amount": 2099
    };

    erede.cancelSale(resultAuthorization.tid, cancelSaleParams)
    .then((resultCancel) => {
      expect(resultCancel.data.returnCode).to.be.oneOf(['359','360']);
      resolve(resultCancel)
    })
    .catch(reject)
  })
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
      console.log('resultAuthorization', resultAuthorization)
      // expect(resultAuthorization.status).to.equal(200);
      expect(resultAuthorization.reference).to.equal(authorizationParams.reference);
      expect(resultAuthorization.returnMessage).to.equal('Success.');
      return resultAuthorization;
    })
    .catch((err) => {
      console.log('Erro na autorização', err)
    })
    .then(cancelaVenda)
    .catch((err) => {
      console.log('Erro no cancelamento', err)
    })
  });
})
