// Criando objecto

const livro = {
    titulo: "A bela e o monstro",
    autor: " feito por George Orwell",
    anoPublicacao: "1949 depois de cristo em paris france",
    
    getInfo() {
      return `${this.titulo}${this.autor}, publicado em ${this.anoPublicacao}`;
    },
    
    isClassico() {
      return this.anoPublicacao < 1990;
    }
  };
  
  console.log(livro.getInfo()); // Saída: "1984 por George Orwell, publicado em 1949"
  console.log(livro.isClassico()); // Saída: true
  
  // Função para criar classe

  function criarPessoa(nome, idade, profissao) {
    return {
      nome,
      idade,
      profissao,
      
      saudar() {
        return `Olá, meu nome é ${this.nome}!`;
      },
      
      mostrarInfo() {
        return `${this.nome} tem ${this.idade} anos e trabalha como ${this.profissao}.`;
      }
    };
  }
  
  // Testando a função criando várias pessoas
  const pessoa1 = criarPessoa("Ana", 30, "Engenheira");
  const pessoa2 = criarPessoa("Carlos", 25, "Designer");
  const pessoa3 = criarPessoa("Mariana", 40, "Professora");
  
  // Chamando os métodos para verificar o funcionamento
  console.log(pessoa1.saudar()); // Saída: "Olá, meu nome é Ana!"
  console.log(pessoa1.mostrarInfo()); // Saída: "Ana tem 30 anos e trabalha como Engenheira."
  
  console.log(pessoa2.saudar()); // Saída: "Olá, meu nome é Carlos!"
  console.log(pessoa2.mostrarInfo()); // Saída: "Carlos tem 25 anos e trabalha como Designer."
  
  console.log(pessoa3.saudar()); // Saída: "Olá, meu nome é Mariana!"
  console.log(pessoa3.mostrarInfo()); // Saída: "Mariana tem 40 anos e trabalha como Professora."
  
  // Criando uma classe basica
  class Produto {
    constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
    }
  
    aplicarDesconto(percentual) {
      this.preco -= (this.preco * percentual) / 100;
    }
  
    mostrarDetalhes() {
      return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}`;
    }
  }
  
  // Testando a classe Produto
  const produto1 = new Produto("Camisa", 100, "Vestuário");
  console.log(produto1.mostrarDetalhes()); // Saída: "Produto: Camisa, Preço: R$100.00, Categoria: Vestuário"
  
  produto1.aplicarDesconto(10);
  console.log(produto1.mostrarDetalhes()); // Saída: "Produto: Camisa, Preço: R$90.00, Categoria: Vestuário"
  
  // Criar uma classe herança nesse caso a classe eletronica herdara da classe produto
  
  class Eletronico extends Produto {
    constructor(nome, preco, categoria, garantia) {
      super(nome, preco, categoria); // Chama o construtor da classe pai
      this.garantia = garantia; // Nova propriedade específica de Eletronico
    }
  
    mostrarDetalhes() {
      // Modifica o método para incluir a garantia
      return `${super.mostrarDetalhes()}, Garantia: ${this.garantia} anos`;
    }
  }
  
  // Testando a classe Eletronico
  const eletronico1 = new Eletronico("Smartphone", 2000, "Eletrônicos", 2);
  console.log(eletronico1.mostrarDetalhes());
  // Saída: "Produto: Smartphone, Preço: R$2000.00, Categoria: Eletrônicos, Garantia: 2 anos"
  
  // Testando herança chamando métodos da classe pai
  eletronico1.aplicarDesconto(10);
  console.log(eletronico1.mostrarDetalhes());
  // Saída: "Produto: Smartphone, Preço: R$1800.00, Categoria: Eletrônicos, Garantia: 2 anos"
  
  // Encapsulamento

class ContaBancaria {
  #saldo; // Propriedade privada
  #titular; // Propriedade privada

  constructor(titular) {
    this.#titular = titular;
    this.#saldo = 0; // Inicializa o saldo com 0
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("O valor de depósito deve ser positivo.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Saque inválido. Verifique o valor ou saldo disponível.");
    }
  }

  verSaldo() {
    return `Saldo atual: R$${this.#saldo.toFixed(2)}`;
  }
}

// Testando a classe ContaBancaria
const conta1 = new ContaBancaria("João");

conta1.depositar(1000);        // Saída: "Depósito de R$1000.00 realizado com sucesso."
console.log(conta1.verSaldo()); // Saída: "Saldo atual: R$1000.00"

conta1.sacar(200);              // Saída: "Saque de R$200.00 realizado com sucesso."
console.log(conta1.verSaldo()); // Saída: "Saldo atual: R$800.00"

conta1.sacar(1000);             // Saída: "Saque inválido. Verifique o valor ou saldo disponível."
console.log(conta1.verSaldo()); // Saída: "Saldo atual: R$800.00"

// Polimorfismo
// Classe base Funcionario


// Subclasse Gerente que estende Funcionario
class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario); // Chama o construtor da classe base
        this.bonus = bonus;
    }

    // Método sobrescrito para incluir o bônus no cálculo de salário
    calcularSalario() {
        return this.salario + this.bonus;
    }
}

// Exemplo de uso
const funcionario1 = new Funcionario("Alice", 3000);
const gerente1 = new Gerente("Bob", 5000, 2000);

console.log(`Salário do Funcionário ${funcionario1.nome}: R$ ${funcionario1.calcularSalario()}`); // 3000
console.log(`Salário do Gerente ${gerente1.nome}: R$ ${gerente1.calcularSalario()}`);           // 7000

// Classes objectos literais
// Classe ItemInventario
class ItemInventario {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    // Método para calcular o valor total do item
    calcularValorTotal() {
        return this.quantidade * this.preco;
    }
}

// Objeto literal inventario
const inventario = {
    itens: [],  // Array para armazenar os itens

    // Método para adicionar um item ao inventário
    adicionarItem(item) {
        this.itens.push(item);
    },

    // Método para calcular o valor total de todos os itens
    calcularValorTotalInventario() {
        let valorTotal = 0;
        for (const item of this.itens) {
            valorTotal += item.calcularValorTotal();
        }
        return valorTotal;
    }
};

// Exemplo de uso
const item1 = new ItemInventario("Produto A", 10, 5.00);
const item2 = new ItemInventario("Produto B", 5, 20.00);
const item3 = new ItemInventario("Produto C", 2, 15.00);

// Adicionando itens ao inventário
inventario.adicionarItem(item1);
inventario.adicionarItem(item2);
inventario.adicionarItem(item3);

// Calculando o valor total do inventário
const valorTotalInventario = inventario.calcularValorTotalInventario();
console.log(`Valor total do inventário: R$ ${valorTotalInventario.toFixed(2)}`); // Valor total
// Gestão de funcionarios e polimorfismo
// Classe Funcionario
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    // Método para calcular o salário
    calcularSalario() {
        return this.salario;
    }

    // Método para obter informações do funcionário
    detalhes() {
        return `Nome: ${this.nome}, Salário: R$ ${this.calcularSalario()}`;
    }
}

// Classe Departamento
class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = []; // Lista de funcionários
    }

    // Método para adicionar um funcionário
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    // Método para remover um funcionário
    removerFuncionario(nome) {
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.nome !== nome);
    }

    // Método para listar funcionários
    listarFuncionarios() {
        return this.funcionarios.map(funcionario => funcionario.detalhes()).join('\n');
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, salario, projetoAtual) {
        super(nome, salario);
        this.projetoAtual = projetoAtual;
    }

    // Método específico para obter detalhes do desenvolvedor
    detalhes() {
        return `${super.detalhes()}, Projeto Atual: ${this.projetoAtual}`;
    }
}

// Classe Designer que herda de Funcionario
class Designer extends Funcionario {
    constructor(nome, salario, portifolio) {
        super(nome, salario);
        this.portifolio = portifolio;
    }

    // Método específico para obter detalhes do designer
    detalhes() {
        return `${super.detalhes()}, Portfólio: ${this.portifolio}`;
    }
}

// Exemplo de uso
const departamentoTI = new Departamento("Tecnologia da Informação");

const desenvolvedor1 = new Desenvolvedor("Alice", 6000, "Sistema de Gestão");
const designer1 = new Designer("Bob", 5000, "Design de Interfaces");

departamentoTI.adicionarFuncionario(desenvolvedor1);
departamentoTI.adicionarFuncionario(designer1);

// Listando funcionários do departamento
console.log(`Funcionários do Departamento de ${departamentoTI.nome}:\n${departamentoTI.listarFuncionarios()}`);

// Removendo um funcionário
departamentoTI.removerFuncionario("Alice");

// Listando funcionários após remoção
console.log(`\nFuncionários após remoção:\n${departamentoTI.listarFuncionarios()}`);

// Sistemas de reservas de hotel
// Classe Quarto
class Quarto {
    constructor(numero, tipo, preco) {
        this.numero = numero;
        this.tipo = tipo;
        this.preco = preco;
        this.reservado = false; // Indica se o quarto está reservado
    }

    // Método para verificar a disponibilidade
    verificarDisponibilidade() {
        return !this.reservado;
    }

    // Método para reservar o quarto
    reservar() {
        if (this.verificarDisponibilidade()) {
            this.reservado = true;
            return `Quarto ${this.numero} reservado com sucesso.`;
        } else {
            return `Quarto ${this.numero} já está reservado.`;
        }
    }

    // Método para cancelar a reserva
    cancelarReserva() {
        if (!this.verificarDisponibilidade()) {
            this.reservado = false;
            return `Reserva do quarto ${this.numero} cancelada com sucesso.`;
        } else {
            return `Quarto ${this.numero} não estava reservado.`;
        }
    }

    // Método para obter o preço do quarto
    obterPreco() {
        return this.preco;
    }
}

// Subclasse QuartoSimples que estende Quarto
class QuartoSimples extends Quarto {
    constructor(numero) {
        super(numero, "Simples", 100); // Preço fixo para quarto simples
    }
}

// Subclasse SuiteLuxo que estende Quarto
class SuiteLuxo extends Quarto {
    constructor(numero) {
        super(numero, "Luxo", 300); // Preço fixo para suíte de luxo
    }

    // Sobrescreve o método obterPreco para incluir um desconto
    obterPreco() {
        return this.preco * 0.9; // 10% de desconto
    }
}

// Classe Hotel
class Hotel {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.quartos = []; // Lista de quartos
    }

    // Método para adicionar um quarto ao hotel
    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
    }

    // Método para ver a disponibilidade de quartos
    verificarDisponibilidade() {
        return this.quartos.filter(quarto => quarto.verificarDisponibilidade());
    }

    // Método para reservar um quarto
    reservarQuarto(numeroQuarto) {
        const quarto = this.quartos.find(q => q.numero === numeroQuarto);
        if (quarto) {
            return quarto.reservar();
        } else {
            return `Quarto ${numeroQuarto} não encontrado.`;
        }
    }

    // Método para cancelar uma reserva
    cancelarReserva(numeroQuarto) {
        const quarto = this.quartos.find(q => q.numero === numeroQuarto);
        if (quarto) {
            return quarto.cancelarReserva();
        } else {
            return `Quarto ${numeroQuarto} não encontrado.`;
        }
    }
}

// Exemplo de uso
const hotel = new Hotel("Hotel Maravilha", "Rio de Janeiro");

const quarto1 = new QuartoSimples(101);
const quarto2 = new SuiteLuxo(102);
const quarto3 = new QuartoSimples(103);

hotel.adicionarQuarto(quarto1);
hotel.adicionarQuarto(quarto2);
hotel.adicionarQuarto(quarto3);

// Verificando a disponibilidade
console.log("Quartos disponíveis:", hotel.verificarDisponibilidade().map(q => q.numero)); // [101, 102, 103]

// Reservando um quarto
console.log(hotel.reservarQuarto(101)); // Reserva bem-sucedida
console.log(hotel.reservarQuarto(101)); // Tentativa de reservar novamente

// Verificando a disponibilidade novamente
console.log("Quartos disponíveis:", hotel.verificarDisponibilidade().map(q => q.numero)); // [102, 103]

// Cancelando uma reserva
console.log(hotel.cancelarReserva(101)); // Cancelamento bem-sucedido
console.log(hotel.cancelarReserva(101)); // Tentativa de cancelar novamente

// Verificando a disponibilidade final
console.log("Quartos disponíveis:", hotel.verificarDisponibilidade().map(q => q.numero)); // [101, 102, 103]

// Obtendo o preço dos quartos
console.log(`Preço do Quarto Simples: R$ ${quarto1.obterPreco()}`);
console.log(`Preço da Suite Luxo (com desconto): R$ ${quarto2.obterPreco()}`);

// Sistemas de gestão de biblioteca

// Classe Livro
class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.disponivel = true; // Status de disponibilidade
    }

    // Método para emprestar o livro
    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            return `Livro "${this.titulo}" emprestado com sucesso.`;
        } else {
            return `Livro "${this.titulo}" não está disponível para empréstimo.`;
        }
    }

    // Método para devolver o livro
    devolver() {
        if (!this.disponivel) {
            this.disponivel = true;
            return `Livro "${this.titulo}" devolvido com sucesso.`;
        } else {
            return `Livro "${this.titulo}" já está disponível.`;
        }
    }
}

// Classe Biblioteca
class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = []; // Lista de livros
    }

    // Método para adicionar um livro à biblioteca
    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    // Método para retornar todos os livros disponíveis
    livrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }

    // Método para filtrar livros disponíveis por gênero
    livrosDisponiveisPorGenero(genero) {
        return this.livrosDisponiveis().filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }
}

// Exemplo de uso
const biblioteca = new Biblioteca("Biblioteca Municipal");

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
const livro2 = new Livro("1984", "George Orwell", "Ficção Científica");
const livro3 = new Livro("Dom Casmurro", "Machado de Assis", "Ficção");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

// Emprestando um livro
console.log(livro1.emprestar()); // Livro emprestado
console.log(livro1.emprestar()); // Tentativa de emprestar novamente

// Listando livros disponíveis
console.log("Livros disponíveis:", biblioteca.livrosDisponiveis().map(l => l.titulo)); // [1984, Dom Casmurro]

// Devolvendo um livro
console.log(livro1.devolver()); // Livro devolvido
console.log(livro1.devolver()); // Tentativa de devolver novamente

// Filtrando livros disponíveis por gênero
const generosFiltrados = biblioteca.livrosDisponiveisPorGenero("Ficção");
console.log("Livros disponíveis de Ficção:", generosFiltrados.map(l => l.titulo)); // [1984, Dom Casmurro]
