const inventores = [
    { primeiroNome: 'Albert', ultimoNome: 'Einstein', nascimento: 1879, morte: 1955 },
    { primeiroNome: 'Isaac', ultimoNome: 'Newton', nascimento: 1643, morte: 1727 },
    { primeiroNome: 'Galileo', ultimoNome: 'Galilei', nascimento: 1564, morte: 1642 },
    { primeiroNome: 'Marie', ultimoNome: 'Curie', nascimento: 1867, morte: 1934 },
    { primeiroNome: 'Johannes', ultimoNome: 'Kepler', nascimento: 1571, morte: 1630 },
    { primeiroNome: 'Nicolaus', ultimoNome: 'Copernicus', nascimento: 1473, morte: 1543 },
    { primeiroNome: 'Max', ultimoNome: 'Planck', nascimento: 1858, morte: 1947 },
    { primeiroNome: 'Katherine', ultimoNome: 'Blodgett', nascimento: 1898, morte: 1979 },
    { primeiroNome: 'Ada', ultimoNome: 'Lovelace', nascimento: 1815, morte: 1852 },
    { primeiroNome: 'Sarah E.', ultimoNome: 'Goode', nascimento: 1855, morte: 1905 },
    { primeiroNome: 'Lise', ultimoNome: 'Meitner', nascimento: 1878, morte: 1968 },
    { primeiroNome: 'Hanna', ultimoNome: 'Hammarström', nascimento: 1829, morte: 1909 }
  ];

  const pessoas = 
        ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 
                'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 
                'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 
                'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 
                'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 
                'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 
                'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 
                'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 
                'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filtrar a lista de inventores e sekecionar aqueles que nasceram nos meados do ano 1500;

// const fifteen = inventores.filter(inventor => {
//     if(inventor.nascimento >= 1500 && inventor.nascimento < 1600){
//         return true; // guarde o valor
//     }
// });

const fifteen = inventores.filter(i => i.nascimento >= 1500 && i.nascimento < 1600);
console.table(fifteen);

// Array.prototype.map() -> retorna um array do mesmo tamanho do original.
// 2. Criar uma coleção contendo o primeiro e ultimo nome dos inventores;

//const nomes = inventores.map(i => i.primeiroNome + ' ' + i.ultimoNome);
const nomes = inventores.map(i => `${i.primeiroNome} ${i.ultimoNome}`);
console.log(nomes);

// Array.prototype.sort()
// 3. Ordene os inventores por nascimento, do mais velho para o mais novo;
// const ordemNascimento = inventores.sort((a, b)=>{
//     if (a.nascimento > b.nascimento) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

const ordemNascimento = inventores.sort((a, b) => a.nascimento > b.nascimento ? 1 : -1);
console.table(ordemNascimento);


// Array.prototype.reduce() -> retorna um total
// 4. Quantos anos cada invetor viveu?
const anos = inventores.reduce((total, i)=>{
    return total + (i.morte - i.nascimento);
}, 0);
console.log(anos);

// 5. Ordene os inventores por idade.
const maisVelho = inventores.sort((a, b)=>{
    const anosAtual = a.morte - a.nascimento;
    const anosProximo = b.morte - b.nascimento;
    return anosAtual > anosProximo ? -1 : 1;
});
console.table(maisVelho);


// 6. Crie uma lista de Boulevards em Paris que possui 'de' no nome;
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const categoria = document.querySelector('.mw-category');
// const links = Array.from(categoria.querySelectorAll('a'));
// const de = links
//                 .map(link => link.textContent)
//                 .filter(nomeDaRua => nomeDaRua.includes('de'));
// console.log(de);

// 7. sort Exercise
// Ordene todas as pessoas em ordem alfabética pelo último nome;
const alfa = pessoas.sort((u, p)=>{
    const [uUltimo, uPrimeiro] = u.split(', ') ;
    const [pUltimo, pPrimeiro] = p.split(', ') ;
    return uUltimo > pUltimo ? 1 : -1;     
});
console.table(alfa);

// 8. Reduce Exercise
// Some as instancias de cada item;
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 
              'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const quantidade = data.reduce((obj, item)=>{
    //obj = {}
    if (!obj[item]) { // obj["car"]
        obj[item] = 0;    
    }
    obj[item]++;
    return obj;
},{});

console.log(quantidade);