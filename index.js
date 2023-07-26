function writeCards(names){
    const thankyoumessages = []
    for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    thankyoumessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thankyoumessages
}
    
function countDown(number) {
    while (number>-1) {
        console.log(number--)
    }
}