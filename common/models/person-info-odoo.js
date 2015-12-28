module.exports = function(PersonInfoOdoo) {
  PersonInfoOdoo.getPersonInfoById = function(id,cb){
    PersonInfoOdoo.personInfo({person_id:id||1},function(err,response){
      console.log('Response:',response);

      var result = (!err && response.get_person_infoResult)?
        response.get_person_infoResult:[];
      cb(err,result);
    })
  };

  PersonInfoOdoo.helloWorld = function(msg,cb){
    cb(null,'Greetings'+msg)
  };


  PersonInfoOdoo.remoteMethod(
    'getPersonInfoById',{
      accepts:[
        {arg:'id',type:'number',required:true,http:{source:'query'}}
      ],
      returns:{arg:'result',type:'string'},
      http: {verb:'get',path:'/getPersonInfoById'}
    }
  );

  PersonInfoOdoo.remoteMethod(
    'helloWorld',{
      accepts:[
        {arg:'msg',type:'string'}
      ],
      returns:{arg:'greet',type:'string'}
    }
  )
};
