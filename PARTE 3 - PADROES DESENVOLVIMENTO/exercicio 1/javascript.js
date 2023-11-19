// Interface comum para produtos
class Computer {
  constructor(ram, hdd, cpu, type) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

  toString() {
    return `Computador [RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz, Type: ${this.type}]`;
  }
}

// Fábrica abstrata
class ComputerFactory {
  createComputer(ram, hdd, cpu) {
    throw new Error("O método createComputer deve ser implementado");
  }
}

// Fábrica concreta para PCs
class PCFactory extends ComputerFactory {
  createComputer(ram, hdd, cpu) {
    return new Computer(ram, hdd, cpu, "PC");
  }
}

// Fábrica concreta para Servidores
class ServerFactory extends ComputerFactory {
  createComputer(ram, hdd, cpu) {
    return new Computer(ram, hdd, cpu, "Server");
  }
}

// Cliente utiliza a fábrica para criar instâncias do tipo abstrato
const pcFactory = new PCFactory();
const serverFactory = new ServerFactory();

const myPC = pcFactory.createComputer(8, 500, 2.5);
const myServer = serverFactory.createComputer(32, 1000, 3.0);

console.log(myPC.toString());
console.log(myServer.toString());
