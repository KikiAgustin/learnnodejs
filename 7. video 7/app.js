
// core module
const fs = require('fs');


// menuliskan string ke file (syncronus)
// try{

//     fs.writeFileSync('data/test.txt', 'Hello Word Secara Synchrounus');
// }catch(e){
//     console.log(e);
// }

// menuliskan string ke file menggunakan (asynchronous)

// fs.writeFile('data/test.txt', 'Hello World Secara Asyncronous', (err) => {
//     console.log(err);
// })



// membaca file secara (synchcronus)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);


// membaca file secara (asyncronus)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })


// readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan Nama Anda :', (nama) => {
    rl.question('Masukan Nomor Handphone :', (hp) => {
        const contact = {nama, hp};
        const file = fs.readFileSync('data/contact.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
        console.log('Terimakasih telah mengisi data');
        rl.close;
    })

})
