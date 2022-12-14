export default {
  data() {
    return {
    nome: '',
    deOndeVemEssaFrase: '',
    };
  },
  methods: {
    deOndeVemEssaFuncao() {
     const adjetivos = 
        [
        'feliz',
        'bom',
        'grande',
        'simpático',
        'corajoso',
        'certo',
        'último',
        'vermelho',
        'pequeno',
        'áspero',
        'feio',
        'alto',
        'dourado',
        'rápido',
        'maravilhoso',
        'enorme',
        'brilhante',
        'novo',
        'belo',
        'fresco',
        'sujo',
        'carinhoso',
        'obediente',
        'responsável',
        'desconfortável'
        ];

        const sujeitos = [
          'sujeito',
          'amigo',
          'vingador',
          'menino',
          'chefe',
          'proletário',
          'advogado',
          'criminoso',
          'vovô',
          'gato',
          'alien'
        ];

        const emoji = [
          '🦷',
          '🧔🏼‍♂️',
          '🪖',
          '🐥',
          '❄️',
          '🌬',
          '🎲',
          '🔫',
          '🚬',
          '⚰️',
          '🛀🏻',
        ]
        const randomizer = () => Math.floor(Math.random() * 10);
        randomizer()
        const adjetivoSorteado = adjetivos[randomizer()]
        const sujeitoSorteado = sujeitos[randomizer()]
        const emojiSorteado = emoji[randomizer()]

        this.deOndeVemEssaFrase = `${this.nome} é um ${sujeitoSorteado} ${adjetivoSorteado} ${emojiSorteado}`
    }
  },
}