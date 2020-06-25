/**ATENÇÃO!!!!!*/

/**ESTE ARQUIVO JAVASCRIPT FOI PROJETADO PARA TRATAR APENAS O RELATÓRIO*/


function clicaRelatorio(){
    dialogCadastro = document.getElementById("abreRelatorio");
    dialogPolyfill.registerDialog(dialogCadastro);
    dialogCadastro.showModal();

    carregaProjetos();
}

function fecharRelatorio(){
    dialogCadastro.close();
    document.getElementById("projetos_dashboard").innerHTML = '';
}

function carregaProjetos(){
    xhrGetProjetos = new XMLHttpRequest();

    xhrGetProjetos.open('GET', URLGETPROJETOS, true);

    xhrGetProjetos.onreadystatechange = function(){
        if(xhrGetProjetos.readyState == 4){
            if(xhrGetProjetos.status == 200){

                json_projetos_cadastrados = JSON.parse(xhrGetProjetos.responseText);
                document.getElementById("projetos_cadastrados").innerHTML = '';
                for(i = 0; i< json_projetos_cadastrados.length;i++){

                    linha = "<button id='projeto_id"+json_projetos_cadastrados[i]['prj_id']+"' class='btn_shadow4_2' draggable=true ondragstart='return dragStart(event)' ondragend='return dragEnd(event)' style='background-color:"+json_projetos_cadastrados[i]['prj_color']+"'>"+json_projetos_cadastrados[i]['prj_nome']+"</button>";
                    document.getElementById("projetos_cadastrados").innerHTML += linha;
                }
            }
        }
    }
    xhrGetProjetos.send();
}

function dragStart(ev) {
    ev.dataTransfer.setData("ID",ev.target.getAttribute('id'));
}
function dragOver(ev) { 
    return false;
}
function dragDrop(acao) {
    projetoSelecionado = acao.dataTransfer.getData("ID");
    acao.target.appendChild(document.getElementById(projetoSelecionado));
}
function dragEnd(acao) {
    acao.dataTransfer.clearData("ID");
    return true;
}


function gerarDashboard(){
    projetos_dashboard = document.getElementById("projetos_dashboard")

    result = projetos_dashboard.split("P");
    console.log(result);
}