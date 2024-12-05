(async () => {
    const { expect } = await import('chai');
    const delAlienMW = require('../../../middleware/alien/delAlienMW');

    describe('delAlienMW middleware', function () {
        it('should remove the alien and redirect to /overview', function (done) {
            const mw = delAlienMW({});
            
            const mockAlien = {
                remove: (cb) => cb(null),
            };

            const resMock = {
                locals: { alien: mockAlien },
                redirect: (url) => {
                    expect(url).to.be.eql('/overview');
                    done();
                },
            };

            mw({}, 
            resMock, 
            (err) => {
                expect.fail('next should not be called');
                done();
            });
        });

        it('should call next(err) when there is an error during removal', function (done) {
            const mw = delAlienMW({});
            
            const mockAlien = {
                remove: (cb) => cb('database error'),
            };

            const resMock = {
                locals: { alien: mockAlien },
                redirect: (url) => {
                    expect.fail('redirect should not be called');
                    done();
                },
            };

            mw({}, 
            resMock, 
            (err) => {
                expect(err).to.be.eql('database error');
                done();
            });
        });

        it('should call next when res.locals.alien is undefined', function (done) {
            const mw = delAlienMW({});

            const resMock = {
                locals: {},
                redirect: (url) => {
                    expect.fail('redirect should not be called');
                    done();
                },
            };

            mw({}, 
            resMock, 
            (err) => {
                expect(err).to.be.undefined;
                done();
            });
        });
    });
})();
