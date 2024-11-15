let cor = prompt("Digite uma cor para o fundo da página (exemplo: red, blue, green); Você pode usar valores Hexadecimal (exemplo: #369369); Caso a cor seja invalida o fundo será definido como Branco,");
document.body.style.backgroundColor = cor;

let nome = document.getElementById("nome")
nome.textContent = 'Leonardo Peixoto Xavier Bezerra';
nome.style.color = 'white';