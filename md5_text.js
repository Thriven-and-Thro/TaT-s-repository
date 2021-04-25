const crypto = require('crypto');

const password = '169861a49613a4d576a9185fe1b5340d'
const md5 = crypto.createHash('md5');
const result = md5.update(password).digest('hex');
console.log(result);
// cfe04e125bd50bcb874670ce96530140 => 041255 => 087467 => 096530
// baa2aeb5842c492ceb1ff2891e5f9f86 => 258424 => 921289 
// 7ff7b580d52cdb1767d42242dac53985 => 775805 => 521767 => 422425
// 169861a49613a4d576a9185fe1b5340d => 168961 => 496134 => 576918 => 515340
// 520a7e31368c829323f733417c88610e => 520731 => 368829 => 323733 => 417886