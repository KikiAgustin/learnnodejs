// syncrounus

const getUserSync = (id) => {
    // let nama = '';
    // if(id === 1){
    //     nama = 'Sandika';
    // }else {
    //     nama = 'Galih';
    // }

//     const nama = id === 1 ? 'Sandika' : 'Galih';
//     return {id,nama};
// }

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = "Hello World";
// console.log(halo);



// Asyncronus

const getUser = (id, cb) => {
    const time = id === 1 ? 3000 : 200;
    setTimeout(() => {
        const nama = id === 1 ? 'Sandika' : 'Galih';
        cb({id, nama});
    }, time);
};

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

const halo = 'Hello Word';
console.log(halo);