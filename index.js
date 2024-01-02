class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Exemplo de uso
const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 1000, 'mago');

heroi1.atacar(); // Saída esperada: "O guerreiro atacou usando espada"
heroi2.atacar(); // Saída esperada: "O mago atacou usando magia"
