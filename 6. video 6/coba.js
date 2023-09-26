function cetakNama(nama){
    return `Hallo nama saya ${nama}`;

}

const PI = 3.14;

const mahasiswa = {
    nama: 'Kiki Agustin',
    umur: 24,
    cetakMHS(){
        return `Hallo nama saya ${this.nama} dan saya berusia ${this.umur}`;
    }
}

class Orang {
    constructor(){
        console.log('Objek orang telah dibuat');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;


// module.exports = {
//     cetakNama   : cetakNama,
//     PI          : PI,
//     mahasiswa   : mahasiswa,
//     Orang       : Orang               
// }

module.exports = {cetakNama, PI, mahasiswa, Orang}