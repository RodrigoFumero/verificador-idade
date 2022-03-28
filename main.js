let data = new Date();
let ano = data.getFullYear();

function verificar() {
  let formularioAno = document.getElementById("txtAno");
  let resultado = document.querySelector("div#resultado");

  if (formularioAno.value.length == 0 || formularioAno.value > ano) {
    window.alert("[Erro] Verifique os dados e tente novamente!");
  } else {
    let formularioSexo = document.getElementsByName("radSex");
    let idade = ano - formularioAno.value;
    let genero = " ";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (formularioSexo[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 2) {
        // bebe
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.bebe.m.png");
      } else if (idade <= 10) {
        // crianca
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.crianca.m.png");
      } else if (idade <= 21) {
        // adolescente
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.adolescente.m.png");
      } else if (idade <= 50) {
        // adulto
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.adulto.m.png");
      } else {
        // idoso
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.idoso.m.png");
      }
    } else if (formularioSexo[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 2) {
        // bebe
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.bebe.f.png");
      } else if (idade <= 10) {
        // crianca
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.crianca.f.png");
      } else if (idade <= 21) {
        // adolescente
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.adolescente.f.png");
      } else if (idade <= 50) {
        // adulto
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.adulto.f.png");
      } else {
        // idoso
        img.setAttribute("src","./fotosVerificadorDeIdade/foto.idoso.f.png");
      }
    }
    if (idade >= 0 && idade < 2) {
    resultado.innerHTML = `Detectamos bebe com ${idade} ano de idade.`
    } else if (idade <= 10) {
    resultado.innerHTML = `Detectamos criança com ${idade} anos de idade.`
    } else if (idade <= 21) {
    resultado.innerHTML = `Detectamos adolescente com ${idade} anos de idade.`
    } else if (idade <= 50) {
    resultado.innerHTML = `Detectamos adulto com ${idade} anos de idade.`
    } else {
      resultado.innerHTML = `Detectamos idoso com ${idade} anos de idade.`
    }
    resultado.appendChild(img);
    resultado.style.textAlign = "center"
  }
}
