var botao = document.querySelector("#botao-adicionar");

botao.addEventListener("click", function(){

  var form = document.querySelector("#form-adicionar");

  var atividade = obtemDados(form);

  montaTr(atividade);


});

function obtemDados(form){
  var atividade = {
    disciplina: form.disciplina.value,
    atividade: form.atividade.value,
    peso: form.peso.value,
    resultado: form.resultado.value,
    vencimento: form.vencimento.value
  }

  return atividade;
}

function montaTd(dado){
    var td = createElement(td);
    td.classList.add("");
    td.textContent = dado;

}

function montaTr (atividade){
  var tabela = document.querySelector("#tabela");
  var tr = createElement(tr);

  tr.appendChild(montaTd(atividade.disciplina));
  tr.appendChild(montaTd(atividade.aividade));
  tr.appendChild(montaTd(atividade.peso));
  tr.appendChild(montaTd(atividade.resultado));
  tr.appendChild(montaTd(atividade.vencimento));

  tabela.appendChild(tr);
}
