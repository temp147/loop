/**
 * Created by openerp on 12/26/15.
 */
module.exports = function(app, cb) {
  var ds = app.dataSources.odooDS;
  if (ds.connected) {
    var PersonInfoOdoo = ds.createModel('PersonInfoOdoo', {}, {base: 'Model'});
    app.model(PersonInfoOdoo);
    process.nextTick(cb);
    console.log("Soap connected")
  } else {
    ds.once('connected', function() {
      var PersonInfoOdoo = ds.createModel('PersonInfoOdoo', {}, {base: 'Model'});
      app.model(PersonInfoOdoo);
      console.log("Soap connected");
      cb();
    });
  }
};
