const express = require('express');
const router = express.Router();
const childProcess = require('child_process');

router.post("/:key", function (req, res) {


    // if(branch.indexOf('master') > -1 && sender.login === process.env.GITHUB_USERNAME){
    //     deploy(res);
    // }
});

// function deploy(res){
//     childProcess.exec('cd /home/alexhath && ./deploy.sh', function(err, stdout, stderr){
//         if (err) {
//             console.error(err);
//             return res.sendStatus(500);
//         }
//         res.sendStatus(200);
//     });
// }

module.exports = router;