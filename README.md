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

Junto a isso temos as aplicações das 3 Formas Normais, sendo elas:

1ª Forma normal: todos os atributos de uma tabela devem ser atômicos, ou seja, a tabela não deve conter grupos repetidos e nem atributos com mais de um valor, ou seja não podemos ter campos multivalorados, podemos ver essa forma aplicada no uso de uma tabela especifica para habilidades e tarefas, uma vez que uma pessoa pode ter mais de uma tarefa e mais de uma habilidade.

2ª Forma normal: Primeiramente é preciso já estar de acordo com a 1ªFN para estar de acordo com a 2ªFN. Além disso todos os atributos não chave devem depender apenas da chave primária. Por exemplo, ainda na relação entre a pessoa e habilidade, caso na entidade pessoa houvesse a descrição de uma habilidade, essa por sua vez estaria fora da 2ªFN uma vez que essa informação depende do ID da habilidade e não do ID da pessoa.

3ª Forma normal: Como acontece anteriormente, é necesário já estar de acordo com a 2ªFN. A 3ªFN diz que os atributos não pertencente a chave primária devem ser mutuamente independentes e dependentes apenas da cahve identificadora, por exemplo no caso da relação entre projeto e tarefa, caso na tarefa tívessimos a informação do projeto junto de seu id, essa informação deveria ser removida apenas restando os dados referentes a tarefa e o id do projeto

# Aprendizados Efetivos
Como aprendizado efetivo, posso destacar o correto uso das formas normais para a modelagem correta do banco de dados. Os levantamentos de informações necessários para que o banco seja capaz de atender demanda exigida pelo conceito da aplicação e pela aplicação em si. Logo é preciso definir quais serão as informações a serem armazenadas, o nivél de detalhamento, as relações entre si e o uso das mesmas. Assim dessa maneira sendo possível o desenvolvimento dos scripts de criação do banco embasado no que foi anteriormente planejado.





