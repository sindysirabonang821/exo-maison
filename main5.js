function aprec(note){
if(note<7){
    return Hideux
}
else if(note<10){
    return Moche
}
else if(note<15){
    return Nice
}
else if(note>=15){
    return Good
}
else{
    return BUG
}
}
console.log(aprec(prompt("saisir une note")));
document.write(aprec())