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
    projetos_selecionados_id = [];
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
projetos_selecionados_id = [];
function dragDrop(acao) {
    projetoSelecionado = acao.dataTransfer.getData("ID");
    acao.target.appendChild(document.getElementById(projetoSelecionado));
    

    if(acao.target.getAttribute('id') != 'projetos_dashboard'){
        

        for(i=0;i<projetos_selecionados_id.length;i++){
            if(projetoSelecionado == projetos_selecionados_id[i]){
                projetos_selecionados_id.splice([i], 1);
        }
        }
        console.log(projetoSelecionado);
    }else if(acao.target.getAttribute('id') == 'projetos_dashboard'){
        projetos_selecionados_id.push(projetoSelecionado);
    }
    
    
}
function dragEnd(acao) {
    acao.dataTransfer.clearData("ID");
    return true;

    
}

projetos_dashboard = [];

function gerarDashboard(){
    console.log(projetos_selecionados_id);
    
    for(i=0;i<projetos_selecionados_id.length;i++){
        proj_dashboard = document.getElementById('projetos_dashboard').querySelector('#'+projetos_selecionados_id[i]+'').innerText;
        if(proj_dashboard != null){
            console.log(proj_dashboard);
        }
    }

    dialogCadastro = document.getElementById("abreDashboard");
    dialogPolyfill.registerDialog(dialogCadastro);
    dialogCadastro.showModal();





}