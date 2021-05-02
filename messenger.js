//messaging
function myFunction(no,message) {
    
    var numbers=[];
    var length=no.length;

    for(var i=0;i<length;i++){
        numbers.push(JSON.stringify({binding_type:'sms',address:'+91'+no[i]}));
        }

    
    var accountSid=process.env.ACCOUNT_SID;
    var authToken=process.env.AUTH_TOKEN;
    var SERVICE_SID=process.env.SID
    var client=require('twilio')(accountSid,authToken);

    const notificationOpts={
        toBinding:numbers,
        body:message
      };
      
    client.notify.services(SERVICE_SID).notifications.create(notificationOpts).then(notification=>console.log(notification.sid)).catch(error=> console.log("ERROR:",error));

  }

  module.exports = myFunction