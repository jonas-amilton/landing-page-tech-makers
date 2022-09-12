function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }else{
        alert('Atenção ' + nome.value + ' os seus dados estão incorretos!');
    }

}