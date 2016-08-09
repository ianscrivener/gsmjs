/**
 * Created by ianscrivener on 9/08/2016.
 */

var GSM = require('./lib/gsm');

var gsm = new GSM();
gsm.connect(function(err) {
    if(err) return console.log('Error connecting to GSM', err);
    console.log('GSM connected');
    gsm.status(function(err, resp, raw){
        console.log('Status...' + raw[1] + ',' + raw[2]);
        gsm.initialize(function(err, resp, raw){
            // Do things here
        });
    });
});


gsm.request('https://httpbin.org/ip', function(response) {
    console.log('-> ' + response);
});