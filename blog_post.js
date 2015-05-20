/* jshint evil: true */
module.exports.suite = function(config, browser) {

  describe('Blog Post', function(){

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

      it("should have an appropriate title", function (done) {
        browser
          .title()
          .should.eventually.equal('Baylus.com')
          .and.notify(done);
      });

      describe('post body', function(){


        it("should have at least 1 body tag with some text", function (done) {
          // the logo should appear on the page
          browser
            .elementByCss(".post > p").text()
            .should.eventually.have.length.above(0)
            .and.notify(done);
        });

      });

  });

}
