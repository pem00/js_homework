(async ()=> {

    const { expect } = await import('chai');
    var saveAlienMW = require('../../../middleware/alien/saveAlienMW');
    
    describe('saveAlienMW middleware ', function () {
        it('should set res.locals.alien with an alien object from db', function (done) {
            const mw = saveAlienMW({ AlienModel: 'nothing'});
    
            mw({
                boby:{
                    faj: 'hullo',
                    tech: 'magas',
                    kolon_db: '3',
                },
                params: {
                    alienid: '10'
              }
            },
            { 
                locals: {
                    planet: {
                        _id: 'planetid',
                    },
                    alien:{
                        save:(cb)=>{
                            cb(null);
                        }
                    },
                },
                
                redirect: (where)=>{
                    expect(where).to.be.eql('/alien/planetid');
                    done();
                } 
            },
            (err)=> {
              //no next
            }
          );
        });
        it('should call next whit err if there is a bd error', function (done) {
            const mw = saveAlienMW({ AlienModel: 'nothing'});
    
            mw({
                boby:{
                    faj: 'hullo',
                    tech: 'magas',
                    kolon_db: '3',
                },
                params: {
                    alienid: '10'
              }
            },
            { 
                locals: {
                    planet: {
                        _id: 'planetid',
                    },
                    alien:{
                        save:(cb)=>{
                            cb('adatbazishiba');
                        }
                    },
                },
                
                redirect: (where)=>{
                    
                } 
            },
            (err)=> {
              //no next
              expect(err).to.be.eql('adatbazishiba');
              done();
            }
          );
        });
        it('should call next whit num error on invalid kolonizacio darab ertek', function (done) {
            const mw = saveAlienMW({ AlienModel: 'nothing'});
    
            mw({
                boby:{
                    faj: 'hullo',
                    tech: 'magas',
                    kolon_db: '3',
                },
                params: {
                    alienid: '10'
              }
            },
            { 
                locals: {
                    planet: {
                        _id: 'planetid',
                    },
                    alien:{
                        save:(cb)=>{
                            cb(null);
                        }
                    },
                },
                
                redirect: (where)=>{
                    
                } 
            },
            (err)=> {
              //no next
              expect(err).to.be.instanceOf(Error);
              expect(err.toString()).to.be.eql('almafa');
              done();
            }
          );
        });
        it('should set res.locals.alien with an alien object created by teh MW', function (done) {
           
            class AlienMockModel {
                save(cb){
                    cb(null)
                }
            }
            const mw = saveAlienMW({ AlienModel:  AlienMockModel});
    
            mw({
                boby:{
                    faj: 'hullo',
                    tech: 'magas',
                    kolon_db: '3',
                },
                params: {
                    alienid: '10'
              }
            },
            { 
                locals: {
                    planet: {
                        _id: 'planetid',
                    },
                },
                
                redirect: (where)=>{
                    expect(where).to.be.eql('/alien/planetid')
                    done();
                } 
            },
            (err)=> {
              //no next
            }
          );
        });

    });

});