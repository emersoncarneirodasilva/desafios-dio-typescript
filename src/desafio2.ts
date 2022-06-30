// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

/* Resposta */
enum Work {
  Atriz,
  Ator,
  Pedreiro,
  Pedreira,
  Caminhoneira,
  Caminhoneiro,
  Professor,
  Professora
};

type Human = {
  name: string,
  age: number,
  profession: Work
};

let person1: Human = {
  name: "Maria G.",
  age: 25,
  profession: Work.Atriz
};

let person2: Human = {
  name: "Franscisco E. Silva",
  age: 45,
  profession: Work.Caminhoneiro
};

let person3: Human = {
  name: "Paulo A. Souza",
  age: 34,
  profession: Work.Ator
};

let person4: Human = {
  name: "Marta R.",
  age: 38,
  profession: Work.Pedreira
};

let person5: Human = {
  name: "Carlos M",
  age: 30,
  profession: Work.Professor
};

let person6: Human = {
  name: "João G.",
  age: 56,
  profession: Work.Pedreiro
};

let person7: Human = {
  name: "Paula A.",
  age: 43,
  profession: Work.Caminhoneira
};

let person8: Human = {
  name: "Julinana M.",
  age: 31,
  profession: Work.Professora
};

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
console.log(person6);
console.log(person7);
console.log(person8);