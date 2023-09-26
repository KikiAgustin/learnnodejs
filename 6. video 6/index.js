
// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); // third party module

const coba = require('./coba');

console.log(
    coba.cetakNama('Kiki Agustin'), 
    coba.PI, 
    coba.mahasiswa.cetakMHS(),
    new coba.Orang
    );
