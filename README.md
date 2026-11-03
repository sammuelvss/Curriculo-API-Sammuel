# Currículo Express API - Sammuel Victor Santana de Souza

API REST desenvolvida com **Node.js**, **Express**, **Sequelize** e **PostgreSQL (NeonDB)** para gerenciamento de currículos completos, contendo perfis e seus relacionamentos (experiências acadêmicas, experiências profissionais e projetos).

## Autor

- **Nome:** Sammuel Victor Santana de Souza
- **Curso:** Sistemas para Internet — Universidade Católica de Pernambuco (UNICAP)
- **GitHub:** [https://github.com/sammuelvss](https://github.com/sammuelvss)
- **LinkedIn:** [https://www.linkedin.com/in/sammuel-victor](https://www.linkedin.com/in/sammuel-victor)
- **Servidor em Produção (Vercel):** [https://curriculo-api-sammuel.vercel.app](https://curriculo-api-sammuel.vercel.app)

---

## Entidades e Relacionamentos

O banco de dados possui **4 entidades** com relacionamento `1:N` (um perfil possui várias formações acadêmicas, experiências profissionais e projetos, com `onDelete: CASCADE`):

1. **Profile (`profiles`)**: `id` (UUID), `nome`, `cargo`, `resumo`, `email`, `telefone`, `linkedin`, `github`
2. **AcademicExperience (`academic_experiences`)**: `id` (UUID), `instituicao`, `curso`, `inicio`, `fim`, `profile_id` (FK)
3. **ProfessionalExperience (`professional_experiences`)**: `id` (UUID), `empresa`, `cargo`, `inicio`, `fim`, `descricao`, `profile_id` (FK)
4. **Project (`projects`)**: `id` (UUID), `titulo`, `descricao`, `tecnologias`, `link`, `profile_id` (FK)

O banco já conta com **2 currículos completos pré-cadastrados** (seed automático):
- **Pessoa 1:** Sammuel Victor Santana de Souza (`a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d`)
- **Pessoa 2:** Beatriz Cavalcanti (`e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a5b`)

---

## Endpoints da API (CRUD Completo)

### Perfis (`/profiles`)
- `GET /profiles` — Lista todos os perfis com suas experiências acadêmicas, profissionais e projetos
- `GET /profiles/:profileId` — Busca um perfil específico por ID com seus relacionamentos
- `POST /profiles` — Cria um novo perfil
- `PUT /profiles/:profileId` — Atualiza um perfil existente
- `DELETE /profiles/:profileId` — Remove um perfil e seus registros associados

### Experiências Acadêmicas (`/academic-experiences`)
- `GET /academic-experiences` — Lista todas as experiências acadêmicas
- `GET /academic-experiences/:academicExperienceId` — Busca por ID
- `GET /academic-experiences/profile/:profileId` — Lista por perfil
- `POST /academic-experiences` — Cria uma nova experiência acadêmica vinculada a um `profile_id`
- `PUT /academic-experiences/:academicExperienceId` — Atualiza uma experiência acadêmica
- `DELETE /academic-experiences/:academicExperienceId` — Remove uma experiência acadêmica

### Experiências Profissionais (`/professional-experiences`)
- `GET /professional-experiences` — Lista todas as experiências profissionais
- `GET /professional-experiences/:professionalExperienceId` — Busca por ID
- `GET /professional-experiences/profile/:profileId` — Lista por perfil
- `POST /professional-experiences` — Cria uma nova experiência profissional vinculada a um `profile_id`
- `PUT /professional-experiences/:professionalExperienceId` — Atualiza uma experiência profissional
- `DELETE /professional-experiences/:professionalExperienceId` — Remove uma experiência profissional

### Projetos (`/projects`)
- `GET /projects` — Lista todos os projetos
- `GET /projects/:projectId` — Busca por ID
- `GET /projects/profile/:profileId` — Lista por perfil
- `POST /projects` — Cria um novo projeto vinculado a um `profile_id`
- `PUT /projects/:projectId` — Atualiza um projeto
- `DELETE /projects/:projectId` — Remove um projeto

---

## Como Executar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie um arquivo `.env` na raiz (baseado no `.env.sample`) com a URL do seu banco PostgreSQL (NeonDB):
   ```env
   DATABASE_URL=postgresql://<USER>:<PASSWORD>@<HOST>/<DB>?sslmode=require
   SYNC_DATABASE=true
   ERASE_DATABASE_ON_SYNC=false
   ```
3. Para sincronizar e popular o banco com os 2 currículos iniciais:
   ```bash
   npm run seed
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

---

## Testes no Postman

O arquivo [`postman_collection.json`](./postman_collection.json) na raiz do repositório contém todas as requisições de CRUD das 4 entidades e seus relacionamentos, utilizando variáveis de coleção (`{{baseUrl}}`, `{{profileId1}}`, `{{profileId2}}`, `{{academicExperienceId}}`, `{{professionalExperienceId}}`, `{{projectId}}`).
