(async ()=> {

const { expect } = await import('chai');
var getAlienMW = require('../../../middleware/alien/getAlienMW');

describe('getAlienMW middleware ', function () {

  it('should set res.locals.alien with an alien object from db', function (done) {
        const mw = getAlienMW({
          AlienModel:{
            findOne: (p1,cb)=> {
              expect(p1).to.be.eql({ _id: '10' })
              cb(null,'mockalien');
            }
          }
        });

        const resMock = { locals: {} };

        mw({
          params:{
            alienid: '10'
          }
        },
        resMock,
        (err)=> {
          expect(err).to.be.eql(undifined);
          expect(p1).to.be.eql({ _id: 'mockalien' })
           done(); 
        }
      );
    });

    it('should set call next with error when there is a db problem', function (done) {
      const mw = getAlienMW({
        AlienModel:{
          findOne: (p1,cb)=> {
            expect(p1).to.be.eql({ _id: '10' })
            cb('adatbazishiba',null);
          }
        }
      });

      const resMock = { locals: {} };

      mw({
        params:{
          alienid: '10'
        }
      },
      resMock,
      (err)=> {
        expect(err).to.be.eql('adatbazishiba');
         done(); 
      }
    );
  }); 

  it('should call next when no aline in the db', function (done) {
    const mw = getAlienMW({
      AlienModel:{
        findOne: (p1,cb)=> {
          expect(p1).to.be.eql({ _id: '10' })
          cb(undifined,null);
        }
      }
    });

    const resMock = { locals: {} };

    mw({
      params:{
        alienid: '10'
      }
    },
    resMock,
    (err)=> {
      expect(err).to.be.eql(undifined);
      expect(p1).to.be.eql({})
       done(); 
    }
  );
});

});

});