## Comandos git
`git init` - Inicializa um repositório git na máquina local

`git add *nome do arquivo" ou *.*` - Adiciona os arquivos listados ou todos em que houveram mudanças a fila de commit

`git status` - Mostra os arquivos que estão na fila de commit
`git rm --cached *nome do arquivo*` - Remove o arquivo listado da fila de commit

`git branch -M *nome*` - Renomeia a branch atual

`git push -u origin main` - Sincroniza os commits com  o github
    
`git checkout -b *nome da nova branch*` - Cria uma nova branch (Serve para adicionar features em parelo e depois pode ser adicionada a branch principal)

`git checkout *nome da branch*` - Altera em qual branch estou trabalhando

`git merge *nome da branch` - Dentro da branch principal, este comando recebe as branchs paralelas e junta as alterações feitas em ambas

`git clone *link do repositório no github` - Clona um repositório github na máquina local

`git pull` - Puxa as alterações que não foram feitas na máquina local (refresh)