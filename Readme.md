# Capes Laravel/Angular

O projeto visa demonstrar as habilidades técnicas de desenvolvimento de
sistemas e
das tecnologias mais utilizadas atualmente no mercado para o desevolvimento
WEB.

Para o desevolvimento deste projeto foi planejado um serviço para o
cadastramento, visualização, alteração e exclusão (CRUD) de Cursos Acadêmicos.
   
## Serviço providos
 
- Frontend -> Gerenciamento dos Cursos: http://localhost:8000/cursos
- Backend -> API fornecendo recursos para persistir os dados: http://localhost:90/api/curso
- Database
  - Hostname: localhost
  - Port: 3309

## Métodos disponíveis na API

    - Listar todos: GET -> http://localhost:90/api/curso
    - Visualizar:   GET -> http://localhost:90/api/curso/id
    - Cadastrar:    POST -> http://localhost:90/api/curso
    - Alterar:      PATCH -> http://localhost:90/api/curso/id
    - Deletar:      DELETE -> http://localhost:90/api/curso/id

## Tecnologias do projeto

- Servidor HTTP:
  - Nginx latest version
- Frontend:
  - Node 16
  - Angular 13.1.4
- Backend:
  - PHP 8.1
  - Laravel Framework 8.83.0
- Database:
  - MariaDB latest version

## Estrutura de diretórios/arquivos do projeto

    .
    ├── backend/            # Laravel Framework (API)
    ├── docker/             # Arquivos Dockfile e de configurações dos containers
    ├── frontend/           # Angular (Aplicação WEB)
    ├── docker-compose.yml  # Arquivo de configuração dos Containers
    └── Readme.md


# Instalação

Clone o repositório dentro de uma pasta (Ex. capes)

    git clone https://github.com/Gcsilva/capes_laravel_angular.git

Certifique-se que o [Docker](https://www.docker.com/) esteja instalado e em execução. Em seguida execute o comando a seguir no directório raiz do projeto:

    docker-compose -f "docker-compose.yml" up -d --build

Após a criação dos containers todos os comandos abaixo serão executados automaticamente:

- ng build
- composer update
- migrate
- seed

*Agradeço por apreciar este trabalho.*