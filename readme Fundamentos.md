# Conhecendo Typescript - Como Rodar e Instalar

### Instalação typescript globalmente
    -> npm i -g typescript

## Inicializar o typescript
    -> npm i --y

## Instalar 2 dependencias de desenvolvimento
    -> npm i -D typescript
    -> npm i -D ts-node-dev
    -> npm i -D ts-node
    -> npx tsc --init (Iniciar o typescript)

## Para executar o script do typescript é necessário transpilar o arquivo
    ex. -> node index.js ( no javascript funciona legal )
        -> npx tsc ( transpilar o arquivo para funcionar em typescript )

## Para rodar e já tranpilar o arquivo voce usa o comando
    -> npm ts-node-dev app.ts ( não funciona )

## Criar script dev no package.json
    -> "dev": "ts-node-dev ./app.ts"

====================================================================================================================

# Variaveis e Tipos
    -> Importante saber que o typescript funciona assim
    - let a: integer = 2
    - let b: string = 'teste'
    - let c: boolean = true
    - let d: number | any | string = 'teste' -> aceita mais de um tipo

# Objetos e intefaces
    -> Seta sempre as propriedades vc quer que aquele determinado objeto tenha, será sempre o mesmo tipo
    ex. -> interface Pessoa {
        nome: string;
        idade: number;
        profissao?: string; (deixa a proprieda opcional)
     }

     const pessoa: Pessoa = {
        nome: 'Matheus',
        idade: 29
     }

     const outraPessoa: Pessoa = {
        nome: 'Fabio',
        idade: 42,
        profissao: 'Desenvolvedor' ( é opcional, se eu não passar ele não vai dar erro)
     }

     Existe dois jeito de declarar um array do objetos pessoa e são elas:
     -> const arrayPessoas: Pessoa[] = [
        pessoa,
        outraPessoa
     ]
     ou
     -> const arrayPessoas: Array<Pessoa> = [
        pessoa,
        outraPessoa
     ]

# Decisões e repetição
    -> if else o normal de todas as linguagems
    -> o que entrou de novo aqui é o objeto literal
    ex.: -> const typeUser = {
        admin: 'Seja bem vindo',
        student: 'Você é um aluno',
        viewer: 'Você pode visualizar'
    }

    function validateUser(user: string) {
        console.log(typeUser[user as keyof typeof typeUser])
    }

    const usuario = 'admin'

    validateUser(usuario)
    validateUser('student')
    validateUser('viewer')

# Estruturas de Repetição
   for (let i = 0; i < 10; i++) {
    console.log(i)
   }

   while ( n< 6> ) {
    console.log(n)
    n++
   }

# Arrays
    const array: Array<any> = [1, 2, 3, 4, 5] -> aceita todos tipo de valores dentro do array
    const array: Array<number> = [1, 2, 3, 4, 5] -> aceita apenas numeros dentro do array
    cost array: Array<string> = ['a', 'b', 'c', 'd', 'e'] -> aceita apenas strings dentro do array
    ou pode declarar assim:
    const array: number[] = [1, 2, 3, 4, 5]
    const array: string[] = ['a', 'b', 'c', 'd', 'e']
    const array: any[] = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']

    arrays começam sempre no indice 0
    acessar o array na posição 1 -> array[0] se quiser na possição 2 -> array[1]

    pegar o tamanho do array -> array.length

    adcionar um elemento no array -> array.push()
    remover um elemento do array -> array.pop()
    remover o primeiro elemento do array -> array.shift()
    adicionar um elemento no inicio do array -> array.unshift()
    remover um elemento do array pelo indice -> array.splice(indice, 1)
    remover um elemento do array pelo indice e adicionar um novo elemento -> array.splice(indice, 1, 'novo elemento')

# Manipulando Arrays
    const array: Array<any> = [1, 2, 3, 4, 5]
    buscar elemento dentro do array 
        -> array.find( elemento => elemento.id === 4 )
    se eu pegar dessa forma
        -> array.find( elemento => elemento.id > 2 )
        ele vai buscar o primeiro elemento que é maior que 2
    
    forEach -> percorre o array e executa uma função para cada elemento do array
        -> array.forEach( elemento => console.log(elemento) )
        vai varre o array e vai imprimir cada elemento do array

        -> array.forEach( num => {
            if(num % 2 === 0) {
                console.log(num)
            }
        } )

        pode ser um problema se vc tiver usando funcao async porque o forEach não espera a função terminar para continuar a execução
    
    map -> percorre o array e executa uma função para cada elemento do array e retorna um novo array
        -> const novoArray = array.map( elemento => elemento * 2 )
        vai percorrer o array e vai multiplicar cada elemento do array por 2 e vai retornar um novo array

        -> array.map( num => {
            if(num % 2 === 0) {
                console.log(num)
            }
        } )
    
    filter -> percorre o array e executa uma função para cada elemento do array e retorna um novo array com os elementos que passaram no filtro
    -> const novoArray = array.filter( elemento => elemento > 2 )
    vai percorrer o array e vai retornar um novo array com os elementos que são maiores que 2