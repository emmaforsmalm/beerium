//Hämta näst kommande event
export const getReference = () => {

    //Hämta in dagens datum
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const date = `${year}-${month}-${day}`;

    //generera ett slumpmässigt tal
    const number = Math.floor(Math.random() * 10000).toString().padStart(4,'0');

    //generera slumpmässiga bokstäver
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    const randomLetters = letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)];

    return `${date}-${number}-${randomLetters}`;

}