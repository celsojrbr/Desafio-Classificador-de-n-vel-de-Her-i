
const mensagemsaidapt1 = "O Herói de Nome ";
const mensagemsaidapt2 = " está no nível de ";

let NomeHeroi = "Aparecido Celso";
let ExperienciaHeroi = "1001";
let NivelDoHeroi = "";

if(ExperienciaHeroi<=1000){
    //Ferro
    NivelDoHeroi = "Ferro";
}else if(ExperienciaHeroi<=2000){
    //Bronze
    NivelDoHeroi = "Bronze";
}else if(ExperienciaHeroi<=5000){
    //Prata
    NivelDoHeroi = "Prata";
}else if(ExperienciaHeroi<=7000){
    //Ouro
    NivelDoHeroi = "Ouro";
}else if(ExperienciaHeroi<=8000){
    //Platina
    NivelDoHeroi = "Platina";
}else if(ExperienciaHeroi<=9000){
    //Ascendente
    NivelDoHeroi = "Ascendente";
}else if(ExperienciaHeroi<=10000){
    //Imortal
    NivelDoHeroi = "Imortal";
}else if(ExperienciaHeroi>=10001){
    //Radiante
    NivelDoHeroi = "Radiante";
}

console.log(mensagemsaidapt1+NomeHeroi+mensagemsaidapt2+NivelDoHeroi);
