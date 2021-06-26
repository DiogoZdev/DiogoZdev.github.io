let numbersJSON = [
    {word:"one", translation:"um"},
    {word:"two", translation:"dois"},
    {word:"three", translation:"três"},
    {word:"four", translation:"quatro"},
    {word:"five", translation:"cinco"},
    {word:"six", translation:"seis"},
    {word:"seven", translation:"sete"},
    {word:"eight", translation:"oito"},
    {word:"nine", translation:"nove"},
    {word:"ten", translation:"dez"},
    {word:"eleven", translation:"onze"},
    {word:"twelve", translation:"doze"},
    {word:"thirteen", translation:"treze"},
    {word:"fourteen", translation:"quatorze"},
    {word:"fifteen", translation:"quinze"},
    {word:"sixteen", translation:"dezesseis"},
    {word:"seventeen", translation:"dezessete"},
    {word:"eighteen", translation:"dezoito"},
    {word:"nineteen", translation:"dezenove"},
    {word:"twenty", translation:"vinte"},
    {word:"thirty", translation:"trinta"},
    {word:"forty", translation:"quarenta"},
    {word:"fifty", translation:"cinquenta"},
    {word:"sixty", translation:"sessenta"},
    {word:"seventy", translation:"setenta"},
    {word:"eighty", translation:"oitenta"},
    {word:"ninety", translation:"noventa"},
    {word:"one hundred", translation:"cem"},
    {word:"one thousand", translation:"mil"},
    {word:"one million", translation:"Um Milhão"},
];


let pronounsJSON = [
    {word:"I" , translation:"Eu" },
    {word:"You" , translation:"Você" },
    {word:"He" , translation:"Ele" },
    {word:"She" , translation:"Ela" },
    {word:"It" , translation:"usado para gênero desconhecido ou objeto" },
    {word:"We" , translation:"Nós" },
    {word:"They" , translation:"Eles" },
    {word:"Me" , translation:"Mim (objeto)" },
    {word:"Him" , translation:"Ele (objeto)" },
    {word:"Her" , translation:"Ela (objeto)" },
    {word:"Us" , translation:"Nós (obejto)" },
    {word:"Them" , translation:"Eles (objeto)" },
    {word:"My" , translation:"Meu" },
    {word:"Your" , translation:"Seu / Vosso" },
    {word:"His" , translation:"Dele" },
    {word:"Her" , translation:"Dela" },
    {word:"Our" , translation:"Nosso" },
    {word:"Their" , translation:"Deles" },
];


let colorsJSON = [
    {word:"White" , translation:"Branco" },
    {word:"Light-Gray" , translation:"Cinza claro" },
    {word:"Gray" , translation:"Cinza" },
    {word:"Dark-Gray" , translation:"Cinza escuro" },
    {word:"Black" , translation:"Preto" },
    {word:"Red" , translation:"Vermelho" },
    {word:"Orange" , translation:"Laranja" },
    {word:"Yellow" , translation:"Amarelo" },
    {word:"Green" , translation:"Verde" },
    {word:"Blue" , translation:"Azul" },
    {word:"Purple" , translation:"Roxo" },
    {word:"Pink" , translation:"Rosa" },
    {word:"Brown" , translation:"Marron" }
];


let placesJSON = [
    {word:"House" , translation:"Casa" },
    {word:"Apartment" , translation:"Apartamento" },
    {word:"Building" , translation:"Construção / Prédio" },
    {word:"Mansion" , translation:"Mansão" },
    {word:"Stadium" , translation:"Estádio" },
    {word:"School" , translation:"Escola" },
    {word:"University" , translation:"Universidade" },
    {word:"GYM" , translation:"Ginásio / Academia" }, 
    {word:"Hospital" , translation:"Hospital" }, 
    {word:"Gas station" , translation:"Posto de combustível" }, 
    {word:"Post Office" , translation:"Correio" }, 
    {word:"Police Office" , translation:"Delegacia" }, 
    {word:"Office" , translation:"Escritório" }, 
    {word:"Bank" , translation:"Banco" }, 
    {word:"Mall" , translation:"Shopping" }, 
    {word:"Grocery store" , translation:"Mercado" },
    {word:"Supermarket" , translation:"Supermercado" }, 
    {word:"Bakery" , translation:"Padaria / Confeitaria" },
    {word:"Camp" , translation:"Acampamento" },
    {word:"Forest" , translation:"Floresta" }, 
    {word:"Island" , translation:"Ilha" }, 
    {word:"Desert" , translation:"Deserto" }, 
    {word:"Mountain" , translation:"Montanha" }, 
    {word:"Beach" , translation:"Praia" }, 
    {word:"Lake" , translation:"Lago" }, 
    {word:"River" , translation:"Rio" },  
    {word:"Ocean" , translation:"Oceano" }, 
    {word:"City" , translation:"Cidade" }, 
    {word:"Village" , translation:"Vila" },
    {word:"State" , translation:"Estado" }, 
    {word:"Country" , translation:"País" },
    {word:"Continent" , translation:"Continente" },    
];



let countriesJSON = [
    {word:"Brazil" , translation:"" },
    {word:"Uruguay" , translation:"" },
    {word:"Argentina" , translation:"" },
    {word:"Paraguay" , translation:"" },
    {word:"Equador" , translation:"" },
    {word:"Chile" , translation:"" },
    {word:"Colombia" , translation:"" },
    {word:"Venezuela" , translation:"" },
    {word:"French Guiana" , translation:"" },
    {word:"Costa Rica" , translation:"" },
    {word:"Honduras" , translation:"" },
    {word:"Mexico" , translation:"" },
    {word:"Haiti" , translation:"" },
    {word:"Canada" , translation:"" },
    {word:"United States of America" , translation:"" },
    {word:"Greenland" , translation:"" },
    {word:"South Africa" , translation:"" },
    {word:"Namibia" , translation:"" },
    {word:"Tanzania" , translation:"" },
    {word:"Kenya" , translation:"" },
    {word:"Ethiopia" , translation:"" },
    {word:"Cameroon" , translation:"" },
    {word:"Ghana" , translation:"" },
    {word:"Sudan" , translation:"" },
    {word:"Morocco" , translation:"" },
    {word:"Egypt" , translation:"" },
    {word:"Saudi Arabia" , translation:"" },
    {word:"Iraq" , translation:"" },
    {word:"Iran" , translation:"" },
    {word:"Syria" , translation:"" },
    {word:"Turkey" , translation:"" },
    {word:"Greece" , translation:"" },
    {word:"Italy" , translation:"" },
    {word:"France" , translation:"" },
    {word:"Spain" , translation:"" },
    {word:"Germany" , translation:"" },
    {word:"Portugal" , translation:"" },
    {word:"Ireland" , translation:"" },
    {word:"Norway" , translation:"" },
    {word:"Finland" , translation:"" },
    {word:"Sweden" , translation:"" },
    {word:"Switzerland" , translation:"" },
    {word:"Poland" , translation:"" },
    {word:"Netherlands" , translation:"" },
    {word:"India" , translation:"" },
    {word:"Mongolia" , translation:"" },
    {word:"China" , translation:"" },
    {word:"Kazakhstan" , translation:"" },
    {word:"Russia" , translation:"" },
    {word:"Cambodia" , translation:"" },
    {word:"Philippines" , translation:"" },
    {word:"Thailand" , translation:"" },
    {word:"Japan" , translation:"" },
    {word:"Shouth Korea" , translation:"" },
    {word:"Indonesia" , translation:"" },
    {word:"Australia" , translation:"" },
    {word:"Singapore" , translation:"" },
];



let verbsJSON = [
    {word:"to study" , translation:"estudar"},
    {word:"to teach" , translation:"ensinar"},
    {word:"to write" , translation:"escrever"},
    {word:"to think" , translation:"pensar"},
    {word:"to believe" , translation:"acreditar"},
    {word:"to learn" , translation:"aprender"},
    {word:"to practice" , translation:"praticar"},
    {word:"to improve" , translation:"melhorar"},
    {word:"to know" , translation:"saber"},
    {word:"to go" , translation:"ir"},
    {word:"to come" , translation:"vir"},
    {word:"to understand" , translation:"entender"},
    {word:"to translate" , translation:"traduzir"},
    {word:"to visit" , translation:"vsitar"},
    {word:"to live" , translation:"viver ou morar"},
    {word:"to buy" , translation:"comprar"},
    {word:"to spend" , translation:"gastar"},
    {word:"to waste" , translation:"desperdiçar"},
    {word:"to drive" , translation:"dirigir"},
    {word:"to eat" , translation:"comer"},
    {word:"to drink" , translation:"beber"},
    {word:"to chew" , translation:"mastigar"},
    {word:"to try" , translation:"experimentar ou provar"},
    {word:"to choose" , translation:"escolher"},
    {word:"to ask" , translation:"perguntar"},
    {word:"to ask for" , translation:"pedir"},
    {word:"to say" , translation:"dizer"},
    {word:"to read" , translation:"ler"},
    {word:"to listen" , translation:"ouvir"},
    {word:"to talk" , translation:"falar"},
    {word:"to watch" , translation:"assistir"},
    {word:"to play" , translation:"jogar, brincar ou tocar"},
    {word:"to step" , translation:"pisar"},
    {word:"to kick" , translation:"chutar"},
    {word:"to jump" , translation:"pular"},
    {word:"to walk" , translation:"caminhar"},
    {word:"to run" , translation:"correr"},
    {word:"to win" , translation:"ganhar"},
    {word:"to lose" , translation:"perder"},
    {word:"to bet" , translation:"apostar"},
    {word:"to see" , translation:"ver"},
    {word:"to admire" , translation:"admirar"},
    {word:"to love" , translation:"amar"},
    {word:"to kiss" , translation:"beijar"},
    {word:"to sleep" , translation:"dormir"},
    {word:"to dream" , translation:"sonnhar"},
    {word:"to wake up" , translation:"acordar"},
    {word:"to dance" , translation:"dançar"},
    {word:"to work" , translation:"trabalhar"},
    {word:"to type" , translation:"digitar"},
    {word:"to wear" , translation:"vestir"},
    {word:"to like" , translation:"gostar"},
    {word:"to access" , translation:"acessar"},
    {word:"to open" , translation:"abrir"},
    {word:"to close" , translation:"fechar"},
    {word:"to cut" , translation:"cortar"},
    {word:"to slice" , translation:"fatiar"},
    {word:"to mix" , translation:"misturar"},
    {word:"to turn on" , translation:"ligar"},
    {word:"to turn off" , translation:"desligar"},
    {word:"to turn" , translation:"virar"},
    {word:"to return" , translation:"voltar"},
];

let questionsJSON = [
    {word:"What?" , translation:"O que?"},
    {word:"Where?" , translation:"Onde"},
    {word:"How?" , translation:"Como?"},
    {word:"How much?" , translation:"Quanto?"},
    {word:"How often?" , translation:"Com que frequência?"},
    {word:"When?" , translation:"Quando?"},
    {word:"Why?" , translation:"Por que? (pergunta)"},
    {word:"Who?" , translation:"Quem?"},
    {word:"Because..." , translation:"Porque... (resposta)"},
    {word:"How long?" , translation:"Por quanto tempo?"},
    ];

/*

let JSON = [
{word:"" , translation:""}
];


*/