const a = [18, 11, 2005]
a.push(1)
a.sort()
console.log(`O vetor tem ${a.length} posições`);
console.log(`O primeiro vetor tem o valor de ${a[0]}`);
let pos = a.indexOf(110)
if (pos == -1){
    console.log('O valor não foi encontrado');
}else {
    console.log(`O valor 11 está na posição ${pos}`);
}
