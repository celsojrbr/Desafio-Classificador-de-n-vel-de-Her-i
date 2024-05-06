
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
eu primeiro fiz um arquivo index.js 

dentro do index.js criei 2 consts para as mensagem padrão dividido em 2 partes, para depois utilizar no console.log

"

const mensagemsaidapt1 = "O Herói de Nome ";

const mensagemsaidapt2 = " está no nível de ";

"

depois criei 3 Arrays, 1 para guardar o nome, 1 para a experiencia, 1 para salvar o nome da classe depois da estrutura de decisão

"

let NomeHeroi = ["Aparecido Celso","Felipe Aguiar","Mary Ballesta","Regiane Araujo","Iglá Generoso","Aline Antunes"];

let ExperienciaHeroi = ["1001","5001","9001","10000","20001"];

let NivelDoHerois = ["sem definição","sem definição","sem definição","sem definição","sem definição"];

"


para poder usar a parte de repetição eu criei as variaveis como vetor de 5 valores.

"

for (let index = 0; index < NivelDoHerois.length; index++) 

"

assim usei um for para percorrer todos dos dados dentro dos arrays e validar todos os valores da experiencias guardando dentro do NivelDoHerois, para as codições usei IF e ELSEIF 


depois de pegar e salvar os dados, dentro do mesmo 'for' fiz o console.log concatenando as variaveis e constantes para exibir os dados.

por fim usei um arquivo index.html para chamar os dados do index.js

*OBS: eu usei 3 variaveis justamente para caso futuro precisar usar essas informações para exibir, ja estão salvo dentro dos arrays, sem a necessidade de fazer novamente os if e elseif para pegar os resultados
