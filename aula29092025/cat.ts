interface Icat{
    color: string,
    weight: number,
    meow(): string
}



let cat = {
    color: 'orange',
    weight: 5,

    meow: () => 'meow'    
}

console.log(cat.color)
