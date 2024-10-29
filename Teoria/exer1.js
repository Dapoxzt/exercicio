// Classe ItemInventario
class ItemInventario {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    calcularValorTotal() {
        return this.quantidade * this.preco;
    }
}

// Objeto literal inventario
const inventario = {
    itens: [],
    
    adicionarItem(item) {
        this.itens.push(item);
    },

    calcularValorTotalInventario() {
        return this.itens.reduce((total, item) => total + item.calcularValorTotal(), 0);
    }
};

// Classe Livro
class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.disponivel = true; // Inicialmente, o livro está disponível
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false; // Marca o livro como não disponível
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
            console.log(`O livro "${this.titulo}" não está disponível.`);
        }
    }

    devolver() {
        this.disponivel = true; // Marca o livro como disponível novamente
        console.log(`O livro "${this.titulo}" foi devolvido.`);
    }
}

// Classe Biblioteca
class Biblioteca {
    constructor() {
        this.livros = []; // Inicializa a lista de livros
    }

    adicionarLivro(livro) {
        this.livros.push(livro); // Adiciona o livro à lista
    }

    listarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel); // Retorna apenas os livros disponíveis
    }

    filtrarPorGenero(genero) {
        return this.livros.filter(livro => livro.genero === genero); // Retorna livros que correspondem ao gênero
    }
}

// Classe Funcionario
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario() {
        return this.salario;
    }

    detalhes() {
        return `Nome: ${this.nome}, Salário: R$ ${this.calcularSalario()}`;
    }
}

// Classe Departamento
class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    removerFuncionario(nome) {
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.nome !== nome);
    }

    listarFuncionarios() {
        return this.funcionarios.map(funcionario => funcionario.detalhes()).join('\n');
    }
}

// Subclasse Desenvolvedor
class Desenvolvedor extends Funcionario {
    constructor(nome, salario, projetoAtual) {
        super(nome, salario);
        this.projetoAtual = projetoAtual;
    }

    detalhes() {
        return `${super.detalhes()}, Projeto Atual: ${this.projetoAtual}`;
    }
}

// Subclasse Designer
class Designer extends Funcionario {
    constructor(nome, salario, portfolio) {
        super(nome, salario);
        this.portfolio = portfolio;
    }

    detalhes() {
        return `${super.detalhes()}, Portfólio: ${this.portfolio}`;
    }
}

// Classe Quarto
class Quarto {
    constructor(numero, tipo, preco) {
        this.numero = numero;
        this.tipo = tipo;
        this.preco = preco;
        this.disponivel = true;
    }

    reservar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`Quarto ${this.numero} reservado.`);
        } else {
            console.log(`Quarto ${this.numero} não está disponível.`);
        }
    }

    cancelarReserva() {
        this.disponivel = true;
        console.log(`Reserva do quarto ${this.numero} cancelada.`);
    }

    verDisponibilidade() {
        return this.disponivel ? "Disponível" : "Indisponível";
    }
}

// Classe Hotel
class Hotel {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.quartos = [];
    }

    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
    }

    verificarDisponibilidade() {
        return this.quartos.filter(quarto => quarto.verDisponibilidade());
    }
}

// Exemplo de uso
const biblioteca = new Biblioteca();
const livro1 = new Livro("1984", "George Orwell", "Ficção");
const livro2 = new Livro("A Revolução dos Bichos", "George Orwell", "Ficção");
const livro3 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
const livro4 = new Livro("Orgulho e Preconceito", "Jane Austen", "Romance");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);
biblioteca.adicionarLivro(livro4);

// Listando livros disponíveis
console.log("Livros disponíveis:");
biblioteca.listarLivrosDisponiveis().forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
});

// Emprestando um livro
livro1.emprestar(); // Empresta "1984"

// Listando livros disponíveis após o empréstimo
console.log("Livros disponíveis após empréstimo:");
biblioteca.listarLivrosDisponiveis().forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
});

// Devolvendo o livro
livro1.devolver(); // Devolve "1984"

// Filtrando livros por gênero
console.log("Livros do gênero Ficção:");
biblioteca.filtrarPorGenero("Ficção").forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
});

// Sistema de Funcionários
const departamentoTI = new Departamento("Tecnologia da Informação");
const dev1 = new Desenvolvedor("Alice", 4000, "Sistema de Gestão");
const designer1 = new Designer("Bob", 3500, "Projeto X");
departamentoTI.adicionarFuncionario(dev1);
departamentoTI.adicionarFuncionario(designer1);
console.log("Funcionários do Departamento de TI:");
console.log(departamentoTI.listarFuncionarios());

// Sistema de Reservas de Hotel
const hotel = new Hotel("Hotel Luxo", "São Paulo");
const quarto1 = new Quarto(101, "Simples", 200);
const quarto2 = new Quarto(102, "Luxo", 500);
hotel.adicionarQuarto(quarto1);
hotel.adicionarQuarto(quarto2);
quarto1.reservar(); // Reserva o quarto 101
console.log(`Quarto 101: ${quarto1.verDisponibilidade()}`); // Indisponível
quarto1.cancelarReserva(); // Cancela a reserva do quarto 101
console.log(`Quarto 101: ${quarto1.verDisponibilidade()}`); // Disponível

// Adicionando itens ao inventário
const item1 = new ItemInventario("Caneta", 100, 2.50);
const item2 = new ItemInventario("Caderno", 50, 5.00);
inventario.adicionarItem(item1);
inventario.adicionarItem(item2);

// Calculando o valor total do inventário
console.log(`Valor total do inventário: R$ ${inventario.calcularValorTotalInventario().toFixed(2)}`); // R$ 325.00
