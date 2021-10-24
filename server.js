const express = require('express');
const path = require('path');
var nodemailer = require('nodemailer')
const cors = require("cors");
const { text } = require('express');
const route = express.Router();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.resolve(__dirname, './build')));

app.use(express.json());
app.use(cors())

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

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.post("/send", (req, res) => {
  let mailData = {
    from: `${req.body.mailerState.email}`,
    to: "gabbe05gr@gmail.com",
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  };

  mailData.html = `<b>Hey there</b>`+ mailData.to + `<br>` + mailData.text + `<br/>`

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