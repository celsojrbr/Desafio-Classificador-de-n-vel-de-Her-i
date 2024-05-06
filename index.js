
const mensagemsaidapt1 = "O Herói de Nome ";
const mensagemsaidapt2 = " está no nível de ";

let NomeHeroi = ["Aparecido Celso","Felipe Aguiar","Mary Ballesta","Regiane Araujo","Iglá Generoso","Aline Antunes"];
let ExperienciaHeroi = ["1001","5001","9001","10000","20001"];
let NivelDoHerois = ["sem definição","sem definição","sem definição","sem definição","sem definição"];

for (let index = 0; index < NivelDoHerois.length; index++) {
    if(ExperienciaHeroi[index]<=1000){
        //Ferro
        NivelDoHerois[index] = "Ferro";
    }else if(ExperienciaHeroi[index]<=2000){
        //Bronze
        NivelDoHerois[index] = "Bronze";
    }else if(ExperienciaHeroi[index]<=5000){
        //Prata
        NivelDoHerois[index] = "Prata";
    }else if(ExperienciaHeroi[index]<=7000){
        //Ouro
        NivelDoHerois[index] = "Ouro";
    }else if(ExperienciaHeroi[index]<=8000){
        //Platina
        NivelDoHerois[index] = "Platina";
    }else if(ExperienciaHeroi[index]<=9000){
        //Ascendente
        NivelDoHerois[index] = "Ascendente";
    }else if(ExperienciaHeroi[index]<=10000){
        //Imortal
        NivelDoHerois[index] = "Imortal";
    }else if(ExperienciaHeroi[index]>=10001){
        //Radiante
        NivelDoHerois[index] = "Radiante";
    }

    console.log(mensagemsaidapt1+NomeHeroi[index]+mensagemsaidapt2+NivelDoHerois[index]);

};