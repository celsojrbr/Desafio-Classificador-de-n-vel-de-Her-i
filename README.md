
## Desafio Classificador de nível de Herói


**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"


## solução
eu primeiro fiz um arquivo index.js criei 2 consts para as mensagem padrão dividido em 2 partes, para depois utilizar no console.log

depois criei 3 variaveis, 1 para guardar o nome, 1 para a experiencia, 1 para salvar o nome da classe depois da estrutura de decisão

para poder usar a parte de repetição eu criei as variaveis como vetor de 5 valores.

assim usei um for para percorrer todos dos dados dentro do array e validar todos os valores da experiencias e tambem para exibir no console.log

por fim usei um arquivo index.html para chamar os dados do index.js 
