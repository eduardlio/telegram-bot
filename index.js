var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

app.post('/new-message', (req, res) => {
   const {message} = req.body;
   
   console.log("Message: " + message.text);

   if(!message || !message.text || message.text.toLowerCase().indexOf('marco') < 0){
      console.log("message wasn't marco it was: " + message.text);
      return res.end();
   }

   axios.post("https://api.telegram.org/bot610487851:AAHB5keDmCUqT5GhB2vu-kh1-BbiyEozgwc/sendMessage", {
      chat_id: message.chat.id,
      text: "Polo!"
   })
   .then(response => {
      console.log('successfully posted!');
      res.end('ok');
   })
   .catch(err => {
      console.log("Error: " + err);
      res.end("Error: " + err);
   });
});
app.listen(3000, function() {
   console.log("telegram listening on port 3000");
});

