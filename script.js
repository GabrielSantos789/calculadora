var math = {
    number: [null, null]
};

var text = {
    paragraph: document.createElement("p"),
    result: {
        add: null,
        subtract: null,
        multiply: null,
        divide: null
    }
};

function Soma() {
    //Seleciona os elementos <input>
    math.number = [
        Number(document.getElementById("number-01").value),
        Number(document.getElementById("number-02").value)
    ]

    //Realiza o cálculo
    text.result.add = math.number[0] + math.number[1]

    //Exibe o resultado na tela
    text.paragraph.textContent = `A soma entre ${math.number[0]} e ${math.number[1]} é igual a ${text.result.add}`

    //Adiciona o parágrafo no corpo do documento
    document.body.appendChild(text.paragraph)

    //Adiciona um seletor CSS
    text.paragraph.classList.add("js-paragraph")
}

function Subtrai() {
    //Seleciona os elementos <input>
    math.number = [
        Number(document.getElementById("number-01").value),
        Number(document.getElementById("number-02").value)
    ]

    //Realiza o cálculo
    text.result.subtract = math.number[0] - math.number[1]

    //Exibe o resultado na tela
    text.paragraph.textContent = `A subtração entre ${math.number[0]} e ${math.number[1]} 
    é igual a ${text.result.subtract}`

    //Adiciona o parágrafo no corpo do documento
    document.body.appendChild(text.paragraph)

    //Adiciona um seletor CSS
    text.paragraph.classList.add("js-paragraph")
}

function Divide() {
    //Seleciona os elementos <input>
    math.number = [
        Number(document.getElementById("number-01").value),
        Number(document.getElementById("number-02").value)
    ]

    // Verifica se o número inserido pelo usuário é igual a 0
    if (math.number[1] !== 0) {
        //Realiza o cálculo
        text.result.divide = math.number[0] / math.number[1]

        //Exibe o resultado na tela
        text.paragraph.textContent = `A divisão entre ${math.number[0]} e ${math.number[1]} 
        é igual a ${text.result.divide}`

        //Adiciona o parágrafo no corpo do documento
        document.body.appendChild(text.paragraph)

        //Adiciona um seletor CSS
        text.paragraph.classList.add("js-paragraph")
    }

    // Se o número for igual a 0, exibe esta mensagem:
    else {
        window.alert("É impossível dividir por 0, por favor escolha outro número.")
    }
} 

function Multiplica() {
    //Seleciona os elementos <input>
    math.number = [
        Number(document.getElementById("number-01").value),
        Number(document.getElementById("number-02").value)
    ]

    //Realiza o cálculo
    text.result.multiply = math.number[0] * math.number[1]

    //Exibe o resultado na tela
    text.paragraph.textContent = `A multiplicação entre ${math.number[0]} e ${math.number[1]} 
    é igual a ${text.result.multiply}`

    //Adiciona o parágrafo no corpo do documento
    document.body.appendChild(text.paragraph)

    //Adiciona um seletor CSS
    text.paragraph.classList.add("js-paragraph")
}