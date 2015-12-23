/**
 * Created by openerp on 12/23/15.
 */

var async = require('async');

module.exports = function(app){
  var mysqlDBs = app.datasources.mysqlDBs;

  async.parallel({
    personInfo :async.apply(createPersonInfo),
    salaryCard: async.apply(createSalaryCard)
  },function(err,results){
    if(err) throw err;
    console.log('models created successfully');
  }
  );

  function createPersonInfo(cb){
    mysqlDBs.automigrate('personInfo',function(err){
      if(err) return cb(err);
    })
  }

  function createSalaryCard(cb){
    mysqlDBs.automigrate('salaryCard',function(err){
      if(err) return cb(err);
    })
  }
};
