// Classe Observer
class Observer {
  update() {
    // Método a ser implementado nas classes concretas
  }
}

// Classe Subject
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update());
  }
}

// Classe Editor (Subject)
class Editor extends Subject {
  constructor() {
    super();
    this.content = [];
  }

  insertLine(lineNumber, text) {
    this.content.splice(lineNumber - 1, 0, text);
    this.notify();
  }
}

// Subclasse TextEditor
class TextEditor extends Editor {
  saveToFile() {
    // Lógica para salvar o conteúdo em um arquivo (poderia ser implementado conforme necessário)
    console.log('Conteúdo salvo no arquivo.');
  }

  printContent() {
    console.log('Conteúdo do arquivo:');
    console.log(this.content.join('\n'));
  }
}

// Classe que representa a interface do usuário (UI)
class UserInterface extends Observer {
  constructor(editor) {
    super();
    this.editor = editor;
    this.lines = [];

    // Adiciona a UI como observadora do editor
    this.editor.addObserver(this);
  }

  update() {
    // Método chamado quando o editor é atualizado
    this.promptUser();
  }

  promptUser() {
    const line = prompt('Digite uma linha de texto (ou "EOF" para encerrar):');
    if (line && line.toUpperCase() !== 'EOF') {
      this.lines.push(line);
      this.promptUser();
    } else {
      this.editor.content = this.lines;
      this.editor.notify();
    }
  }
}

// Teste do editor de texto
const textEditor = new TextEditor();

// Instanciação da interface do usuário
const ui = new UserInterface(textEditor);

// Disparo do evento "open"
textEditor.notify();

// Disparo do evento "save" e impressão do conteúdo do arquivo
textEditor.saveToFile();
textEditor.printContent();
