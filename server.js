const express = require('express');
const path = require('path');
var nodemailer = require('nodemailer')
const cors = require("cors");
const { text } = require('express');
const { MongoClient } = require("mongodb");

const route = express.Router();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.resolve(__dirname, './build')));

app.use(express.json());
app.use(cors())

const connectionString = "mongodb+srv://dbgobbe:dbgbb05bbe@cluster0.fo1f1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

MongoClient.connect(connectionString, (err, client) => {
  console.log(client)
  console.log(err)
});

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  port: 465,               // true for 465, false for other ports
  host: "smtp.gmail.com",
     auth: {
          user: 'gabbe05gr@gmail.com',
          pass: 'gbb05bbe',
       },
  secure: true,
  });

app.post("/send", (req, res) => {
  let mailData = {
    from: `${req.body.mailerState.email}`,
    to: "gabbe05gr@gmail.com",
    name: `${req.body.mailerState.name}`,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  };

  mailData.html = `<b>Message Recieved </b>`+ `<br>` + mailData.from + `<br>` + `<br>`+ mailData.name + `<br>` + mailData.text + `<br/>`

  console.log(mailData)

    transporter.sendMail(mailData, (error, info) => {
      if(error) {
        res.json({
          status: "fail",
        })
      console.log(error)
      }
      else {
        console.log('==MESAGE SENT==')
        console.log(mailData.from)
        console.log(mailData.text)
        console.log(mailData.html)
        res.json({
          status: "success",
        });
      }
      
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });