alert("Bem vindo ao simulador de pontos!");
alert("Criado por: Pedro Pereira e Breno Nelson");
alert("Atualizado em: 22/07/2023");

var numberOfOparations = prompt("Digite a quantidade de operações que você deseja realizar");

var cards = [
    {
        id: 1,
        name: 'Personnalite Black/Infinite',
        intro: ['Aí sim! Então você escolheu o cartão Personnalite Black/Infinite',
            'Esse cartão faz 2 pontos por dólar gasto no Brasil e 3 pontos por dólar gasto no exterior, além disso lembre-se que seus pontos não expiram',
            'Com o acelerador ele passa a fazer 4 pontos por dólar gasto no Brasil e 6 no exterior!',
            'Além disso, a cobrança é apenas 2.5%',
            'Sabendo disso, vamos calcular',
        ],
        normalPoints: 2,
        costMultiplicator: 0.025,
        ponta1: 4,
    },
    {
        id: 2,
        name: 'Personnalite Signature/Platinum',
        intro: ['Top! O cartão escolhido foi o Personnalite Signature/Platinum',
            'Esse cartão faz 1.5 pontos por dólar gasto no Brasil e cada ponto tem uma validade de 36 meses',
            'Com o acelerador ele passa a fazer 3 pontos por dólar gasto e sua validade aumenta para 10 anos!',
            'Além disso, a cobrança é apenas 2%',
            'Sabendo disso, vamos calcular'],
        normalPoints: 1.5,
        costMultiplicator: 0.02,
        ponta1: 3,
    },
    {
        id: 3,
        name: 'cartão varejo',
        intro: ['Beleza! Então vou te explicar como funciona para o cartão varejo',
            'Esse cartão faz 1 pontos por dólar gasto',
            'Com o acelerador ele passa a fazer 2 pontos por dólar gasto',
            'Além disso, a cobrança é apenas 1%'],
        normalPoints: 1,
        costMultiplicator: 0.01,
        ponta1: 2,
    }
];

function makeSimulation(card) {
    card.intro.forEach(intro => {
        alert(intro);
    })

    var fatura = prompt("Digite o valor da fatura");
    var dolar = prompt("Digite o valor da cotação do dólar");

    fatura = fatura.replace(',', '.');
    dolar = dolar.replace(',', '.');

    //Pontuação normal
    var pont1 = (fatura / dolar) * card.normalPoints;
    alert("A pontuação que ele iria ganhar sem o acelerador é: " + pont1.toFixed(0).replace('.', ',') + " pontos");
    var custo1 = fatura * card.costMultiplicator;
    //Valor a ser cobrado
    alert("Valor cobrado: " + custo1.toFixed(2).replace('.', ',') + " reais");
    //Pontuação acelerada
    var ponta1 = ((custo1 / dolar) * card.ponta1);
    var pontfa1 = (pont1 * 2);
    var soma1 = ponta1 + pontfa1;
    alert("A pontuação que ele irá ganhar com o acelerador é: " + soma1.toFixed(0).replace('.', ',') + " pontos");
    alert("Lembre que o valor que ele (a) pagou a mais também pontua!");
    alert("Ele(a) ganhou " + pont1.toFixed(0).replace('.', ',') + " pontos a mais" + " apenas por ter dobrado sua pontuação");
    alert("E ganhou mais " + ponta1.toFixed(0).replace('.', ',') + " pontos só pelo pagamento do acelerador");
}

for (i = 0; i < numberOfOparations; i++) {
    alert("Escolha de 1-5 qual cartão do seu cliente de acordo com a lista de cartões a seguir");
    alert("1) Personnalite Black/Infinite\n" + "2) Personnalite Signature/Platinum\n" + "3) Varejo\n" + "4) Cartão da Azul\n" + "5) Cartão da LATAM");
    var cartao = prompt("Escolha o modelo do cartão");

    if (cartao < 4) {
        var selectedCard = cards.find(card => card.id == cartao);
        makeSimulation(selectedCard);
    } else if (cartao == 4) {
        alert("Show! A Azul tem quatro tipos de cartões aqui com a gente, vamos conhecê-los!")
        alert("Escolha de 1-4 qual é o modelo do cartão Azul do nosso cliente");
        alert("1) Azul Internacional\n" + "2) Azul Gold\n" + "3) Azul Platinum\n" + "4) Azul Infinite");
        var A = prompt("Escolha o modelo do cartão");
        //submodelos
        if (A == 1) {

            alert("Beleza! Você escolheu o cartão Azul Internacional");
            alert("Esse cartão faz 1.4 pontos por dólar gasto");
            alert("Com o acelerador ele passa a fazer 2.8 pontos por dólar gasto");
            alert("Além disso, a cobrança é apenas 2%");
            alert("Sabendo disso, vamos calcular");
            var fatura = prompt("Digite o valor da fatura");
            var dolar = prompt("Digite o valor da cotação do dólar");

            fatura = fatura.replace(',', '.');
            dolar = dolar.replace(',', '.');

            //Pontuação normal
            var pont1 = (fatura / dolar) * 1.4;
            alert("A pontuação que ele iria ganhar sem o acelerador é: " + pont1.toFixed(0).replace('.', ',') + " pontos");
            var custo1 = fatura * 0.02;
            //Valor a ser cobrado
            alert("Valor cobrado: " + custo1.toFixed(2).replace('.', ',') + " reais");
            //Pontuação acelerada
            var ponta1 = ((custo1 / dolar) * 2.8);
            var pontfa1 = (pont1 * 2);
            var soma1 = ponta1 + pontfa1;
            alert("A pontuação que ele irá ganhar com o acelerador é: " + soma1.toFixed(0).replace('.', ',') + " pontos");
            alert("Lembre que o valor que ele (a) pagou a mais também pontua!");
            alert("Ele(a) ganhou " + pont1.toFixed(0).replace('.', ',') + " pontos a mais" + " apenas por ter dobrado sua pontuação");
            alert("E ganhou mais " + ponta1.toFixed(0).replace('.', ',') + " pontos só pelo pagamento do acelerador");
        }
        else if (A == 2) {

            alert("Certo! O cartão escolhido foi o Azul Gold");
            alert("Esse cartão faz 1.7 pontos por dólar gasto");
            alert("Com o acelerador ele passa a fazer 3.4 pontos por dólar gasto");
            alert("Além disso, a cobrança é apenas 2%");
            alert("Sabendo disso, vamos calcular");
            var fatura = prompt("Digite o valor da fatura");
            var dolar = prompt("Digite o valor da cotação do dólar");

            fatura = fatura.replace(',', '.');
            dolar = dolar.replace(',', '.');

            //Pontuação normal
            var pont1 = (fatura / dolar) * 1.7;
            alert("A pontuação que ele iria ganhar sem o acelerador é: " + pont1.toFixed(0).replace('.', ',') + " pontos");
            var custo1 = fatura * 0.02;
            //Valor a ser cobrado
            alert("Valor cobrado: " + custo1.toFixed(2).replace('.', ',') + " reais");
            //Pontuação acelerada
            var ponta1 = ((custo1 / dolar) * 3.4);
            var pontfa1 = (pont1 * 2);
            var soma1 = ponta1 + pontfa1;
            alert("A pontuação que ele irá ganhar com o acelerador é: " + soma1.toFixed(0).replace('.', ',') + " pontos");
            alert("Lembre que o valor que ele (a) pagou a mais também pontua!");
            alert("Ele(a) ganhou " + pont1.toFixed(0).replace('.', ',') + " pontos a mais" + " apenas por ter dobrado sua pontuação");
            alert("E ganhou mais " + ponta1.toFixed(0).replace('.', ',') + " pontos só pelo pagamento do acelerador");
        }
        else if (A == 3) {

            alert("Ok! Você escolheu o cartão Azul Platinum");
            alert("Esse cartão faz 2.2 pontos por dólar gasto");
            alert("Com o acelerador ele passa a fazer 4.4 pontos por dólar gasto");
            alert("Além disso, a cobrança é apenas 2%");
            alert("Sabendo disso, vamos calcular");
            var fatura = prompt("Digite o valor da fatura");
            var dolar = prompt("Digite o valor da cotação do dólar");

            fatura = fatura.replace(',', '.');
            dolar = dolar.replace(',', '.');

            //Pontuação normal
            var pont1 = (fatura / dolar) * 2.2;
            alert("A pontuação que ele iria ganhar sem o acelerador é: " + pont1.toFixed(0).replace('.', ',') + " pontos");
            var custo1 = fatura * 0.02;
            //Valor a ser cobrado
            alert("Valor cobrado: " + custo1.toFixed(2).replace('.', ',') + " reais");
            //Pontuação acelerada
            var ponta1 = ((custo1 / dolar) * 4.4);
            var pontfa1 = (pont1 * 2);
            var soma1 = ponta1 + pontfa1;
            alert("A pontuação que ele irá ganhar com o acelerador é: " + soma1.toFixed(0).replace('.', ',') + " pontos");
            alert("Lembre que o valor que ele (a) pagou a mais também pontua!");
            alert("Ele(a) ganhou " + pont1.toFixed(0).replace('.', ',') + " pontos a mais" + " apenas por ter dobrado sua pontuação");
            alert("E ganhou mais " + ponta1.toFixed(0).replace('.', ',') + " pontos só pelo pagamento do acelerador");
        }
        else if (A == 4) {

            alert("Top! Você deu sorte, o cartão Azul Infinite é um dos melhores para ofertar");
            alert("Esse cartão já faz 3 pontos por dólar gasto e 3.5 no exterior");
            alert("Com o acelerador ele passa a fazer 6 pontos por dólar gasto no Brasil e 7 pontos por dólar gasto no exterior");
            alert("É A MAIOR PONTUAÇÃO QUE UM CARTÃO CONSEGUE ATINGIR AQUI NO ITAÚ");
            alert("Deixe isso bem claro para o cliente");
            alert("Além disso, a cobrança é apenas 2%");
            alert("Sabendo disso, vamos calcular");
            var fatura = prompt("Digite o valor da fatura");
            var dolar = prompt("Digite o valor da cotação do dólar");

            fatura = fatura.replace(',', '.');
            dolar = dolar.replace(',', '.');

            //Pontuação normal
            var pont1 = (fatura / dolar) * 3;
            alert("A pontuação que ele iria ganhar sem o acelerador é: " + pont1.toFixed(0).replace('.', ',') + " pontos");
            var custo1 = fatura * 0.02;
            //Valor a ser cobrado
            alert("Valor cobrado: " + custo1.toFixed(2).replace('.', ',') + " reais");
            //Pontuação acelerada
            var ponta1 = ((custo1 / dolar) * 6);
            var pontfa1 = (pont1 * 2);
            var soma1 = ponta1 + pontfa1;
            alert("A pontuação que ele irá ganhar com o acelerador é: " + soma1.toFixed(0).replace('.', ',') + " pontos");
            alert("Lembre que o valor que ele (a) pagou a mais também pontua!");
            alert("Ele(a) ganhou " + pont1.toFixed(0).replace('.', ',') + " pontos a mais" + " apenas por ter dobrado sua pontuação");
            alert("E ganhou mais " + ponta1.toFixed(0).replace('.', ',') + " pontos só pelo pagamento do acelerador");
        }
    } else if (cartao == 5) {
        alert("Aí sim! A nossa parceira Latam Pass tem quatro tipos de cartões com o Itaú, vamos conhecê-los!")

        alert("Escolha de 1-4 qual cartão da LATAM do seu cliente de acordo com a lista de cartões a seguir");
        alert("1) LATAM Pass internacional\n" + "2) LATAM Pass Gold\n" + "3) LATAM Pass Platinum\n" + "4) LATAM Pass Black/infinite");
        var L = prompt("Escolha o modelo do cartão");
        if (L == 1) {
            //Pontuação normal
            alert("Top! Você escolheu o cartão Latam Pass Internacional");
            alert("Esse cartão faz 1.3 pontos por dólar gasto");
            alert("Com o acelerador ele passa a fazer 2.6 pontos por dólar gasto");
            alert("Além disso, a cobrança é apenas 2.5%");
            alert("Sabendo disso, vamos calcular");
            var fatura = prompt("Digite o valor da fatura");
            var dolar = prompt("Digite o valor da cotação do dólar");

            fatura = fatura.replace(',', '.');
            dolar = dolar.replace(',', '.');

            var pont1 = (fatura / dolar) * 1.3;
            alert("A pontuação que ele iria ganhar sem o acelerador é: " + pont1.toFixed(0).replace('.', ',') + " pontos");
            var custo1 = fatura * 0.025;
            //Valor a ser cobrado
            alert("Valor cobrado: " + custo1.toFixed(2).replace('.', ',') + " reais");
            //Pontuação acelerada
            var ponta1 = ((custo1 / dolar) * 2.6);
            var pontfa1 = (pont1 * 2);
            var soma1 = ponta1 + pontfa1;
            alert("A pontuação que ele irá ganhar com o acelerador é: " + soma1.toFixed(0).replace('.', ',') + " pontos");
            alert("Lembre que o valor que ele (a) pagou a mais também pontua!");
            alert("Ele(a) ganhou " + pont1.toFixed(0).replace('.', ',') + " pontos a mais" + " apenas por ter dobrado sua pontuação");
            alert("E ganhou mais " + ponta1.toFixed(0).replace('.', ',') + " pontos só pelo pagamento do acelerador");
        }
        else if (L == 2) {
            //Pontuação normal

            alert("Ok! Você escolheu o cartão Latam Pass Gold");
            alert("Esse cartão faz 1.6 pontos por dólar gasto");
            alert("Com o acelerador ele passa a fazer 3.2 pontos por dólar gasto");
            alert("Além disso, a cobrança é apenas 2.5%");
            alert("Sabendo disso, vamos calcular");
            var fatura = prompt("Digite o valor da fatura");
            var dolar = prompt("Digite o valor da cotação do dólar");

            fatura = fatura.replace(',', '.');
            dolar = dolar.replace(',', '.');

            var pont1 = (fatura / dolar) * 1.6;
            alert("A pontuação que ele iria ganhar sem o acelerador é: " + pont1.toFixed(0).replace('.', ',') + " pontos");
            var custo1 = fatura * 0.025;
            //Valor a ser cobrado
            alert("Valor cobrado: " + custo1.toFixed(2).replace('.', ',') + " reais");
            //Pontuação acelerada
            var ponta1 = ((custo1 / dolar) * 3.2);
            var pontfa1 = (pont1 * 2);
            var soma1 = ponta1 + pontfa1;
            alert("A pontuação que ele irá ganhar com o acelerador é: " + soma1.toFixed(0).replace('.', ',') + " pontos");
            alert("Lembre que o valor que ele (a) pagou a mais também pontua!");
            alert("Ele(a) ganhou " + pont1.toFixed(0).replace('.', ',') + " pontos a mais" + " apenas por ter dobrado sua pontuação");
            alert("E ganhou mais " + ponta1.toFixed(0).replace('.', ',') + " pontos só pelo pagamento do acelerador");
        }
        else if (L == 3) {
            //Pontuação normal

            alert("Ok! Você escolheu o cartão Latam Pass Platinum");
            alert("Esse cartão faz 2 pontos por dólar gasto");
            alert("Com o acelerador ele passa a fazer 4 pontos por dólar gasto");
            alert("Além disso, a cobrança é apenas 2.5%");
            alert("Sabendo disso, vamos calcular");
            var fatura = prompt("Digite o valor da fatura");
            var dolar = prompt("Digite o valor da cotação do dólar");

            fatura = fatura.replace(',', '.');
            dolar = dolar.replace(',', '.');

            var pont1 = (fatura / dolar) * 2;
            alert("A pontuação que ele iria ganhar sem o acelerador é: " + pont1.toFixed(0).replace('.', ',') + " pontos");
            var custo1 = fatura * 0.025;
            //Valor a ser cobrado
            alert("Valor cobrado: " + custo1.toFixed(2).replace('.', ',') + " reais");
            //Pontuação acelerada
            var ponta1 = ((custo1 / dolar) * 4);
            var pontfa1 = (pont1 * 2);
            var soma1 = ponta1 + pontfa1;
            alert("A pontuação que ele irá ganhar com o acelerador é: " + soma1.toFixed(0).replace('.', ',') + " pontos");
            alert("Lembre que o valor que ele (a) pagou a mais também pontua!");
            alert("Ele(a) ganhou " + pont1.toFixed(0).replace('.', ',') + " pontos a mais" + " apenas por ter dobrado sua pontuação");
            alert("E ganhou mais " + ponta1.toFixed(0).replace('.', ',') + " pontos só pelo pagamento do acelerador");
        }
        else if (L == 4) {
            //Pontuação normal

            alert("Show! Você deu sorte, o cartão Latam Pass Black/Infinite é um dos melhores para ofertar");
            alert("Esse cartão já faz 2.5 pontos por dólar gasto e 3.5 no exterior");
            alert("Com o acelerador ele passa a fazer 5 pontos por dólar gasto no Brasil e 7 pontos por dólar gasto no exterior");
            alert("É UMA DAS MAIORES PONTUAÇÃO QUE UM CARTÃO CONSEGUE ATINGIR AQUI NO ITAÚ");
            alert("Além disso, a cobrança é apenas 2.05%");
            alert("Deixe isso bem claro para o cliente 🙂");
            alert("Sabendo disso, vamos calcular");
            var fatura = prompt("Digite o valor da fatura");
            var dolar = prompt("Digite o valor da cotação do dólar");

            fatura = fatura.replace(',', '.');
            dolar = dolar.replace(',', '.');

            var pont1 = (fatura / dolar) * 2.5;
            alert("A pontuação que ele iria ganhar sem o acelerador é: " + pont1.toFixed(0).replace('.', ',') + " pontos");
            var custo1 = fatura * 0.0205;
            //Valor a ser cobrado
            alert("Valor cobrado: " + custo1.toFixed(2).replace('.', ',') + " reais");
            //Pontuação acelerada
            var ponta1 = ((custo1 / dolar) * 5);
            var pontfa1 = (pont1 * 2);
            var soma1 = ponta1 + pontfa1;
            alert("A pontuação que ele irá ganhar com o acelerador é: " + soma1.toFixed(0).replace('.', ',') + " pontos");
            alert("Lembre que o valor que ele (a) pagou a mais também pontua!");
            alert("Ele(a) ganhou " + pont1.toFixed(0).replace('.', ',') + " pontos a mais" + " apenas por ter dobrado sua pontuação");
            alert("E ganhou mais " + ponta1.toFixed(0).replace('.', ',') + " pontos só pelo pagamento do acelerador");
        }
    } else {
        alert('Número inválido, tente novamente.')
    }
}