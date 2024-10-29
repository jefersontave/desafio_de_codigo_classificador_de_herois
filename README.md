# Sistema de Níveis de Experiência do Herói
Este programa em JavaScript calcula o nível de um herói baseado em sua experiência (xp) e exibe uma mensagem indicando o nome e o nível do herói.

## Descrição
O código define um objeto heroi que contém:

- nome: Nome do herói.
- xp: Pontuação de experiência do herói, que determina seu nível.
Com base nos pontos de experiência (xp), o código utiliza uma estrutura if-else para verificar o nível do herói de acordo com as seguintes faixas de pontuação:

- <= 1000: Nível Ferro
- 1001 - 2000: Nível Bronze
- 2001 - 5000: Nível Prata
- 5001 - 7000: Nível Ouro
- 7001 - 8000: Nível Platina
- 8001 - 9000: Nível Ascendente
- 9001 - 10000: Nível Imortal
- > 10000: Nível Radiante
Após determinar o nível, o código exibe o nível no console.

## Exemplo de Saída
Para o herói Destemido com 100000 de experiência, a saída será:

- Radiante

Uso
Defina o nome e a experiência (xp) do herói no objeto heroi.
Execute o código em um ambiente JavaScript (ex: navegador ou Node.js).
O nível correspondente ao xp será exibido no console.
Esse README resume o funcionamento do código, as faixas de experiência, e como executá-lo.
