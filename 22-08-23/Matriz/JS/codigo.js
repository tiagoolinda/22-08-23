const caixa = document.querySelector("#caixa");
let cursos = [];

//Incluindo cursos
let resposta = "";


// Incluindo na matriz curso//

while (resposta != "N") {
    let curso = prompt("Digita o nome do curso");
    cursos.push(curso.toUpperCase());
    resposta = prompt("Cadastrar outro curso?");

    if (resposta.toUpperCase() == "N") {
        cursos.forEach((aula) => {
            let p = document.createElement("p");
            p.innerHTML = aula + "<br>------------------------<br>"
            caixa.appendChild(p);           
        })
        break;
    }
}

//Excluir
let reposta = prompt("Deseja excluir um curso? S/N");

if (reposta.toUpperCase() == "S"){
    let curso = prompt("Qual curso deseja excluir?");

/* Pegando a posição do elemento dentro da matriz */
alert("posicao do curso dentro da matriz" + cursos.indexOf(curso.toUpperCase(), 1));
let posicao = cursos.indexOf(curso.toUpperCase(), 1);

/* Apagando o curso com método .splice */
cursos.splice(posicao);

cursos.forEach((aula) => {
    let p = document.createElement("p");
    p.innerHTML = aula + "<br>------------------------<br>"
    caixa.appendChild(p);
})
}