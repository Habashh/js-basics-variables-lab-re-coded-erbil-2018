<<<<<<< HEAD
const expect = chai.expect;

describe('index.js', function () {
  describe('companyName', function () {
=======
const expect = 'chai.expect';
var companyName="Scuber";
var mostProfitableNeighborhood='Chelsea';
var companyCeo='Susan Smith';
describe('index.js', function () {
  describe('comanyName', function () {
>>>>>>> 2586677466b84e1eb1df81de35bef441b1319624
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('raises error if the companyName is changed', function () {
      expect(function () { companyName = 'specialCompany' }).to.throw(TypeError);
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('does not raise error if the mostProfitableNeighborhood is changed', function () {
      expect(function () { mostProfitableNeighborhood = 'Upper West Side' }).to.not.throw(TypeError);
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('does not raise error if the companyCeo is changed', function () {
      expect(function () { companyCeo = 'Lauren Hart' }).to.not.throw(TypeError);
    });
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 2586677466b84e1eb1df81de35bef441b1319624
