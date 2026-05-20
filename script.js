 

        function calcular() {
      const dVal = document.getElementById("distancia").value;
      const tVal = document.getElementById("tempo").value;
      const distancia = Number(dVal);
      const tempo = Number(tVal);
      const resultado = document.getElementById("resultado");
      const erro = document.getElementById("erro");
      const valor = document.getElementById("valor");

      resultado.style.display = "none";
      erro.style.display = "none";

      if (!dVal || !tVal) return;

      if (isNaN(distancia) || isNaN(tempo)) {
        erro.textContent = "Digite apenas valores numéricos.";
        erro.style.display = "block";
        return;
      }

      if (distancia < 0 || tempo <= 0) {
        erro.textContent = "Distância deve ser ≥ 0 e tempo maior que zero.";
        erro.style.display = "block";
        return;
      }

      valor.textContent = (distancia / tempo).toFixed(2) + " km/h";
      resultado.style.display = "block";
      const imagem = document.getElementById("imagemFeedback");
      if ((distancia / tempo) < 60) {
    imagem.src = "https://em-content.zobj.net/source/apple/391/turtle_1f422.png";
    imagem.alt = "Muito lento!";
    } else {
    imagem.src = "https://em-content.zobj.net/source/apple/391/rocket_1f680.png";
    imagem.alt = "Muito rápido!";
    }
    imagem.style.display = "block";
    }


    function limpar() {
      document.getElementById("distancia").value ="";
      document.getElementById("tempo").value="";
      document.getElementById("valor").textContent ="";
      document.getElementById("resultado").style.display ="none";
      document.getElementById("erro").style.display ="none";
      document.getElementById("imagemFeedback").style.display ="none";
    }


  