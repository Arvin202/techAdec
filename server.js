const express =require('express');
const app = express();

const nodemailer=require("nodemailer");
const PORT = process.env.PORT || 5000;


//middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/public/ADEC.html')
});

app.post('/',(req,res)=>{
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'arvin838383@gmail.com',
      pass: ''
    }
  })

  const mailOptions ={
    from: req.body.email,
    to: 'arvin838383@gmail.com',
    subject: `Message from ${req.body.name} ,Phone: ${req.body.phone}`,
    text: req.body.message
  }
  transporter.sendMail(mailOptions, (error,info)=>{
    if(error){
      console.log(error);
      res.send('error');
    }else{
      console.log('Email sent: '+ info.response);
      res.send('success');
    }
  })
});
app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`)
});
