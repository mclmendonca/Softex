let person = {
    nome: 'Bond',
    age: 30,
    isDeveloper: true,
    address: "rua dos bobos",
    numero: 0,

    showMyInfo: () => `meu nome ${person.nome} e eu moro na ${person.address}, numero: ${person.numero}`

};

console.log(person.showMyInfo)
console.log(person.showMyInfo())
