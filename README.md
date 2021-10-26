# GANTT PLANNER

# Resumo do projeto desenvolvido
O Gantt Planner surgiu da necessidade da empresa Necto, da qual precisava de uma ferramenta que fosse facil de se utilizar, portatil e flexivél e que tivesse a capacidade de auxiliar no planejamento dos projetos presentes na empresa, visto que em uma breve comparação com ferramentas semelhantes as mesmas sempre possuiam algum fator dificultante, seja a visualização ou então a limitação do uso por todos os setores.
Logo o Gantt Planner nasceu com a proposa de ser uma ferramenta visual de planejamento, apesentando de forma grafica os projetos e recursos disponiveis no momento.

# Técnologias utilizadas na solução
- Python: O python é uma linguagem de programação interpretada, muito utilizada para analises de dados. Possui como sua principal vantagem e facilidade de aprendizado, sintaxe amigavél além de ser poderosa para diversos usos.
- Django: Django é um framework para desenvolvimento rápido para web, escrito em Python, que utiliza o padrão model-template-view.
- PostgreSql: PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.
- JavaScript: JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. 
- CSS: Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.

# Contribuições individuais/pessoais
Tive como pricipal contribuição a modelagem e administração das entidades presentes no banco de dados, onde as mesmas deveriam ser capaz  de atender a necessidade de exibição do front.
![image](https://user-images.githubusercontent.com/65822756/134255358-d701c31c-7da8-417b-b0ca-69a3ce30bfbd.png)
 O banco é composto pelas seguintes entidades:
 - tb_pessoa: Entidade responsavél por armazenar os dados de cada pessoa envolvida com a empresa.
 - tb_habilidade: Entidade responsavél por armazenas as habilidade de cada pessoa, onde seu relacionamento torna obridatória a existencia de uma pessoa e uma pessoa pode ter N habilidades, inclusive nenhuma habilidade
 - tb_tarefa: Entidade onde é armazenada as tarefas que compoem o projeto que esta sendo executado, essa entidade possúi um relacionamento com a entidade pessoa, onde uma tarefa não possúi a obrigatoriedade de possuir uma pessoa relacionada, podendo uma unica tarefa ter varias pessoas atreladas a ela, e uma pessoa pode estar atrelada a varias tarefas. Para além disso essa entidade possui um auto-relacionamento, pois uma tarefa pode depender da execução de uma tarefa anterior a ela, porém uma tarefa pode possuir no maximo uma tarefa anterior e/ou posterior.
 - tb_projeto: Entidade responsavél por armazenar os projetos que estão/serão desenvolvidos pela empresa, ela possui um relacionamento com a entidade tb_tarefa, onde um projeto pode ter N tarefas, inclusive nenhuma. 

# Aprendizados Efetivos
Esse projeto foi marcado pela sincronia entre as materias de Engenharia de Software e Arquitetura e Modelagem de Banco de Dados e o seu real uso em um caso real, uma vez que era preciso ser feito uma melhor distinção de requisitos funcionais e não funcionais presentes na ideia proposta pelo cliente, alem de ter uma modelagem que atendesse o relacionamento entre os recursos de uma empresa e seus projetos atuais de maneira que ajudasse em uma melhor visualização de sua distribuição.




