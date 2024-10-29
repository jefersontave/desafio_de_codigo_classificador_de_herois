let heroi = {
    nome: "Dester", 
    xp: 100000
};

const mensagem = "O Herói de nome ${heroi.nome} está no nível de ${nivel}}"

if (heroi.xp <= 1000){
    nivel = "Ferro";
    console.log(nivel);
} else if (heroi.xp > 1000 && heroi.xp <=2000){
    nivel = "Bronze";
    console.log(nivel);
} else if (heroi.xp > 2000 && heroi.xp <=5000){
    nivel = "Prata";
    console.log(nivel);
} else if (heroi.xp > 5000 && heroi.xp <=7000){
    nivel = "Ouro";
    console.log(nivel);
} else if (heroi.xp > 7000 && heroi.xp <=8000){
    nivel = "Platina";
    console.log(nivel);
} else if (heroi.xp > 8000 && heroi.xp <=9000){
    nivel = "Ascendente";
    console.log(nivel);
} else if (heroi.xp > 9000 && heroi.xp <=10000){
    nivel = "Imortal";
    console.log(nivel);
} else if (heroi.xp > 10000){
    nivel = "Radiante";
    console.log(nivel);
}
