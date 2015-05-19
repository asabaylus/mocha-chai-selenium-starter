/* jshint evil: true */
module.exports.suite = function(config, browser) {

  describe('Homepage', function(){

      before( function (done) {
        browser
          .init(config.desired)
          .get(config.domain + "/")
          .fin(function(){
            done();
        })
      });

      after(function (done) {
        browser
          .quit()
          .fin(function(){
            done();
          });
      });

      it("should have an appropriate title tag and URL", function (done) {
        browser
          .title()
          .should.eventually.equal('Baylus.com')
          .notify(done);
      });

      describe('header', function(){

        it("should display the Nat Geo logo", function (done) {
          // the logo should appear on the page
          browser
            .elementByCss('#h1.logo').displayed()
            .should.eventually.equal(true)
            .notify(done);
        });

      });

  });

}
