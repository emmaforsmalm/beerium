//Hämta näst kommande event
export const getReference = () => {

    //generera ett slumpmässigt tal
    const number = Math.floor(Math.random() * 100000).toString().padStart(4,'0');

    //generera slumpmässiga bokstäver
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    const randomLetters = letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)];

    return `${number}-${randomLetters}`;

}