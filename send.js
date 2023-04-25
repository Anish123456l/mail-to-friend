const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
    user: "aneeahanish@gmail.com",
    pass: "qpzrlgncsbjwjvuz"
}

});


const mailOptions = {
    from: "aneeahanish@gmail.com",
    to: "anishvaliyaparambhil@gmail.com",
    subject:"Nodemailer Test",
    text:"Hai Anish "
    

    
};

transporter.sendMail(mailOptions,function(eror, info){
    if(error){
        console.log(error);
    }else{
        console.log("Email sent: " + info.response);
    }
});