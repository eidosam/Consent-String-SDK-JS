
const { ConsentString } = require('./consent-string');
const { decodeConsentString } = require('./decode');
const { encodeConsentString } = require('./encode');

global.ConsentString = ConsentString;
global.decodeConsentString = decodeConsentString;
global.encodeConsentString = encodeConsentString;
