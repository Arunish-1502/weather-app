const request=require('request');

var getWeather=(lat,lng,callback)=>{

request({
  url:`https://api.forecast.io/forecast/ce940be359a3ca4c7a7018b13191655c/${lat},${lng}`,
  json:true
},(error,response,body)=>{
  if(error){
    callback('Unable to connect to the server');
  }
  else if(response.statusCode==400){
    callback('Unable to fetch weather');
  }
  else if(response.statusCode==200){
  var apparent=body.currently.apparentTemperature;
  var temp=body.currently.temperature;
  var celsius=(temp-32)/1.8;
  var cel=(apparent-32)/1.8;
  callback(undefined,{
  Temperature:celsius,
  ApparentTemperature:cel
});
}
});
};



module.exports={
  getWeather
};
