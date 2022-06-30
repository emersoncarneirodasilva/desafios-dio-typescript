"use strict";
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
var Work;
(function (Work) {
    Work[Work["Atriz"] = 0] = "Atriz";
    Work[Work["Ator"] = 1] = "Ator";
    Work[Work["Pedreiro"] = 2] = "Pedreiro";
    Work[Work["Pedreira"] = 3] = "Pedreira";
    Work[Work["Caminhoneira"] = 4] = "Caminhoneira";
    Work[Work["Caminhoneiro"] = 5] = "Caminhoneiro";
    Work[Work["Professor"] = 6] = "Professor";
    Work[Work["Professora"] = 7] = "Professora";
})(Work || (Work = {}));
;
let person1 = {
    name: "Maria G.",
    age: 25,
    profession: Work.Atriz
};
let person2 = {
    name: "Franscisco E. Silva",
    age: 45,
    profession: Work.Caminhoneiro
};
let person3 = {
    name: "Paulo A. Souza",
    age: 34,
    profession: Work.Ator
};
let person4 = {
    name: "Marta R.",
    age: 38,
    profession: Work.Pedreira
};
let person5 = {
    name: "Carlos M",
    age: 30,
    profession: Work.Professor
};
let person6 = {
    name: "João G.",
    age: 56,
    profession: Work.Pedreiro
};
let person7 = {
    name: "Paula A.",
    age: 43,
    profession: Work.Caminhoneira
};
let person8 = {
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
