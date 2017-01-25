var router = require('express').Router();
var sg = require('sendgrid')('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');

router.post('/mail', function(req, res) {
    var helper = require('sendgrid').mail;
    var from_email = new helper.Email(req.body.email);
    var to_email = new helper.Email("david.lky.123@gmail.com");
    var subject = '[TOOLSWITHIMPACT WEBSITE] Message from ' + req.body.name;
    var content = new helper.Content('text/plain', req.body.comments);
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, function(err, response) {
        if (err) {
            res.send({msg: "Your message has failed! Please double check your information or contact me on LinkedIn or Facebook.", error:true});
            return console.error(err); 
        }
        console.log(response);
        res.send({msg: "Your message has been sent! I will get back to you ASAP!", error:false});
    });
});

module.exports = router;