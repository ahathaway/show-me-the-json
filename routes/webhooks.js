const express = require('express');
const router = express.Router();
const childProcess = require('child_process');

//our github webhook receiver
router.post("/github", function (req, res) {
    let sender = req.body.sender;
    let branch = req.body.ref;

    if(branch.indexOf('master') > -1 && sender.login === process.env.GITHUB_USERNAME){
        deploy(res);
    }
});

function deploy(res){
    childProcess.exec('cd /home/alexhath && ./deploy.sh', function(err, stdout, stderr){
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
}

router.post("/loopback", function (req, res) {
    global.io.emit('messages', JSON.stringify(req.body));
    res.json(req.body);
});

module.exports = router;