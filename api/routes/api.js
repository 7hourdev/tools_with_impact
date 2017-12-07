var router = require('express').Router();
const sgMail = require('@sendgrid/mail');
const config = require('../../config');
sgMail.setApiKey(config.sendgrid_key);

router.post('/mail', function(req, res) {
    const msg = {
      to: "toolswithimpact@gmail.com",
      from: req.body.email,
      subject: '[TOOLSWITHIMPACT WEBSITE] Message from ' + req.body.name,
      text: req.body.comments,
    };
    sgMail.send(msg,(error, result) => {
    if (error) {
        res.send({msg: "Your message has failed! Please double check your information or contact me on LinkedIn or Facebook.", error:true});
        return console.error(err); 
    }
    else {
        res.send({msg: "Your message has been sent! I will get back to you ASAP!", error:false});
    }
  });
});

module.exports = router;
