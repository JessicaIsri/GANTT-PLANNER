/**ATENÇÃO!!!!!*/

/**ESTE ARQUIVO JAVASCRIPT FOI PROJETADO PARA TRATAR APENAS O RELATÓRIO*/


/**TELA INICIAL - RELATÓRIO */
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
/**/////////////////////////////////////////////////////////// */

/**TELA DASHBOARD */



function gerarDashboard(){
    console.log("Projetos selecionados Id: "+projetos_selecionados_id+"");
    projetos_dashboard = [];
    for(i=0;i<projetos_selecionados_id.length;i++){
        proj_dashboard = document.getElementById('projetos_dashboard').querySelector('#'+projetos_selecionados_id[i]+'').innerText;
        if(proj_dashboard != null){
            projetos_dashboard.push(proj_dashboard);
        }
    }

    dialogCadastro = document.getElementById("abreDashboard");
    dialogPolyfill.registerDialog(dialogCadastro);
    dialogCadastro.showModal();

    getProjetosDashboard();
    getTarefasDashboard();
    getPessoasDashboard();
    dadosDashboard();

    
    /*for(i=0;i<projetos_dashboard.length;i++){


    }*/


}
function fecharDashboard(){
    dialogCadastro.close();
    dialogCadastro = document.getElementById("abreRelatorio");
    dialogPolyfill.registerDialog(dialogCadastro);
   
}


/**ÁREA DE PROJECAO DO DASHBOARD */

function getProjetosDashboard(){
    xhrGetProjetos = new XMLHttpRequest();

    xhrGetProjetos.open('GET', URLGETPROJETOS, true);

    xhrGetProjetos.onreadystatechange = function(){
        if(xhrGetProjetos.readyState == 4){
            if(xhrGetProjetos.status == 200){
                json_get_projetos = JSON.parse(xhrGetProjetos.responseText);

                dadosDashboard(json_get_projetos ,null, null);

            }
        }
    }
    xhrGetProjetos.send();
}

function getTarefasDashboard(){
    xhrGetTarefas = new XMLHttpRequest();

    xhrGetTarefas.open('GET', URLGETTAREFAS, true);

    xhrGetTarefas.onreadystatechange = function(){
        if(xhrGetTarefas.readyState == 4){
            if(xhrGetTarefas.status == 200){
                json_get_tarefas = JSON.parse(xhrGetTarefas.responseText);

                dadosDashboard(null , json_get_tarefas, null);
            }
        }
    }
    xhrGetTarefas.send();

}

function getPessoasDashboard(){
    xhrGetPessoas = new XMLHttpRequest();

    xhrGetPessoas.open('GET', URLGETPESSOAS, true);

    xhrGetPessoas.onreadystatechange = function(){
        if(xhrGetPessoas.readyState == 4){
            if(xhrGetPessoas.status == 200){
                json_get_pessoas = JSON.parse(xhrGetPessoas.responseText);

                dadosDashboard(null , null, json_get_pessoas);
                
            }
        }
    }
    xhrGetPessoas.send();
}

recebe_dados_projetos = [];
recebe_dados_tarefas = [];
recebe_dados_pessoas = [];

function dadosDashboard(json_get_projetos, json_get_tarefas, json_get_pessoas){

    if(json_get_projetos != null){
        recebe_dados_projetos = json_get_projetos;
    }
    if(json_get_tarefas != null){
        recebe_dados_tarefas = json_get_tarefas;
    }

    if(json_get_pessoas != null){
        recebe_dados_pessoas = json_get_pessoas;
    }

    document.getElementById('dashboard_projetos').innerHTML = '';
    console.log("Projetos Dashboard"+projetos_dashboard+"");
    for(y=0; y<projetos_dashboard.length;y++){
        
    for(i=0; i<recebe_dados_projetos.length;i++){
        
        if(projetos_dashboard[y] == recebe_dados_projetos[i]['prj_nome']){

                
                linha_projeto = "<div id='prj"+recebe_dados_projetos[i]['prj_id']+"' class='view_projeto'></div>";
                console.log(linha_projeto);
                document.getElementById('dashboard_projetos').innerHTML +=  linha_projeto;
                
                
                linha_nome_projeto = "<label class='styleWord1'>"+recebe_dados_projetos[i]['prj_nome']+"</label>";
                document.getElementById('prj'+recebe_dados_projetos[i]['prj_id']+'').innerHTML += linha_nome_projeto;
                
                linha_dados_projeto = "<div id='dados_projeto"+recebe_dados_projetos[i]['prj_id']+"' class='class_dados_projeto'>|<br>------><label id='lb_dados_projeto"+recebe_dados_projetos[i]['prj_id']+"'>DADOS PROJETO --> Progresso: "+recebe_dados_projetos[i]['prj_progresso']+" Data Início: "+recebe_dados_projetos[i]['prj_datainicio']+" Prazo Entrega: "+recebe_dados_projetos[i]['prj_prazoentrega']+" Horas Desenvolvimento: "+recebe_dados_projetos[i]['prj_hrs_dev']+" Custo Projeto: "+recebe_dados_projetos[i]['prj_cost']+"</label></div>";
                document.getElementById('prj'+recebe_dados_projetos[i]['prj_id']+'').innerHTML += linha_dados_projeto;

                for(x=0; x<recebe_dados_tarefas.length;x++){



                    for(z=0;z<recebe_dados_pessoas.length;z++){

                        }
                    
                    }
        }
    }
    }


}