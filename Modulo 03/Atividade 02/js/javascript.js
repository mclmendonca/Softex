let animais = []
animais.push(['Dumbo','Elefante','9 anos','1 tromba'])
animais.push(['Chiken','Galinha','1 ano','1 bico'])
animais.push(['Caramelo','Cachorro','6 anos','1 fuçinho'])

for (let i = 0; i < animais.length; i++) {
    for (let j = 0; j < animais[i].length; j++) {
        document.write(animais[i][j]+", ")

        
        
    }
    
    document.write('<br>')
}