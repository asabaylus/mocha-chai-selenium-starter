/* jshint evil: true */
module.exports.suite = function(config, browser) {

  describe('Homepage', function(){

      before( function (done) {
        browser
          .init(config.desired)
          .get(config.domain + "/vlog.html")
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

      describe('post title', function(){

        it("should display the A visual log for Git command line", function (done) {
          // the logo should appear on the page
          browser
            .elementByCss('header > #h1').text()
            .should.eventually.equal('A visual log for Git command line')
            .notify(done);
        });

      });

  });

}
