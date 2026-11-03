import models from "../models/index.js";

export const INITIAL_IDS = {
  profile1: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
  profile2: "e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a5b",
  academic1: "b1c2d3e4-f5a6-4b7c-8d9e-0f1a2b3c4d5e",
  academic2: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6f",
  academic3: "b3c4d5e6-f7a8-4b9c-8d0e-2f3a4b5c6d7a",
  professional1: "c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f",
  professional2: "c2d3e4f5-a6b7-4c8d-9e0f-1a2b3c4d5e6a",
  project1: "d1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a",
  project2: "d2e3f4a5-b6c7-4d8e-9f0a-1b2c3d4e5f6b",
  project3: "d3e4f5a6-b7c8-4d9e-8f0a-2b3c4d5e6f7c",
};

export const seedInitialData = async () => {
  const count = await models.Profile.count();
  if (count > 0) {
    console.log("Banco de dados já possui perfis cadastrados. Pulando seed inicial.");
    return;
  }

  // Currículo 1: Sammuel Victor Santana de Souza
  const sammuel = await models.Profile.create({
    id: INITIAL_IDS.profile1,
    nome: "Sammuel Victor Santana de Souza",
    cargo: "Analista de Projetos & Desenvolvedor Front-End",
    resumo:
      "Estudante de Sistemas para Internet e desenvolvedor em início de carreira, com experiência em Java/Spring Boot, React e Next.js e atuação em metodologias ágeis na Empresa Júnior UNICAP. Tenho interesse em boas práticas de engenharia de software, colaboração em equipe e na construção de soluções que gerem impacto real para os usuários.",
    email: "sammuelvictor7@gmail.com",
    telefone: "(81) 99937-3658",
    linkedin: "https://www.linkedin.com/in/sammuel-victor",
    github: "https://github.com/sammuelvss",
  });

  await models.AcademicExperience.bulkCreate([
    {
      id: INITIAL_IDS.academic1,
      instituicao: "Universidade Católica de Pernambuco (UNICAP)",
      curso: "Graduação em Sistemas para Internet (4º Período)",
      inicio: "2025-01",
      fim: "2027-06",
      profile_id: sammuel.id,
    },
    {
      id: INITIAL_IDS.academic2,
      instituicao: "CESAR School (Parceria Prefeitura do Recife e UK in Brazil)",
      curso: "Residência Tecnológica - Recife Resolve",
      inicio: "2025-08",
      fim: "2026-02",
      profile_id: sammuel.id,
    },
    {
      id: INITIAL_IDS.academic3,
      instituicao: "Porto Digital",
      curso: "Residência Tecnológica em Inovação e Prototipagem",
      inicio: "2025-03",
      fim: "2025-12",
      profile_id: sammuel.id,
    },
  ]);

  await models.ProfessionalExperience.bulkCreate([
    {
      id: INITIAL_IDS.professional1,
      empresa: "Empresa Júnior UNICAP",
      cargo: "Analista de Projetos & Dev Front-End",
      inicio: "2026-03",
      fim: null,
      descricao:
        "Como Analista de Projetos e Desenvolvedor Front-end, atuo unindo o planejamento estratégico à execução técnica de produtos digitais. Na gestão, facilito metodologias ágeis e o alinhamento de requisitos e cronogramas. No desenvolvimento, crio interfaces web com foco em usabilidade e UX/UI.",
      profile_id: sammuel.id,
    },
    {
      id: INITIAL_IDS.professional2,
      empresa: "Comunidade Manguez.al - Mangue.Bit",
      cargo: "Voluntário (Staff)",
      inicio: "2025-09",
      fim: "2025-11",
      descricao:
        "Atuação voluntária no suporte operacional e organização do evento de tecnologia e empreendedorismo Mangue.Bit, promovido pela Comunidade Manguez.al em Recife.",
      profile_id: sammuel.id,
    },
  ]);

  await models.Project.bulkCreate([
    {
      id: INITIAL_IDS.project1,
      titulo: "Robótica Educacional | Residência Tecnológica",
      descricao:
        "Projeto incentivado pelo Porto Digital que visou desenvolver o raciocínio lógico e crítico de estudantes do ensino fundamental I do Recife. O robô foi elaborado em equipe, onde participei do processo de programação do software em C++ e Hardware com Arduino.",
      tecnologias: "C++, Arduino, Robótica, Prototipagem",
      link: "https://github.com/sammuelvss",
      profile_id: sammuel.id,
    },
    {
      id: INITIAL_IDS.project2,
      titulo: "Hackathons & Ideathons (EdScript, Recriando a Cidade, Recife Resolve)",
      descricao:
        "Participação e desenvolvimento de soluções tecnológicas inovadoras em maratonas de programação: Hackathon EdScript (Esportes da Sorte), Hackathon Recriando a Cidade (Prefeitura do Recife) e Ideathon Recife Resolve (Prefeitura do Recife, CESAR e UK Brazil Tech Hub).",
      tecnologias: "Java, Spring Boot, React, Next.js, Figma, Design Thinking",
      link: "https://github.com/sammuelvss",
      profile_id: sammuel.id,
    },
    {
      id: INITIAL_IDS.project3,
      titulo: "Currículo Express API",
      descricao:
        "API REST completa para gerenciamento de currículos com CRUD de perfis, experiências acadêmicas, experiências profissionais e projetos, integrada ao PostgreSQL (NeonDB) e publicada na Vercel.",
      tecnologias: "Node.js, Express, Sequelize, PostgreSQL, NeonDB, Vercel",
      link: "https://github.com/sammuelvss/Curriculo-API-Sammuel",
      profile_id: sammuel.id,
    },
  ]);

  // Currículo 2: Beatriz Cavalcanti (Segunda pessoa cadastrada no banco)
  const beatriz = await models.Profile.create({
    id: INITIAL_IDS.profile2,
    nome: "Beatriz Cavalcanti",
    cargo: "Desenvolvedora Back-End Java & Cloud",
    resumo:
      "Desenvolvedora Back-End com foco em arquitetura de microsserviços, APIs RESTful com Java/Spring Boot e Node.js, além de bancos de dados relacionais e infraestrutura em nuvem.",
    email: "beatriz.cavalcanti@email.com",
    telefone: "(81) 98877-6655",
    linkedin: "https://www.linkedin.com/in/beatriz-cavalcanti",
    github: "https://github.com/beatrizcavalcanti",
  });

  await models.AcademicExperience.bulkCreate([
    {
      id: "f1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b5c",
      instituicao: "Universidade Católica de Pernambuco (UNICAP)",
      curso: "Graduação em Sistemas para Internet",
      inicio: "2024-02",
      fim: "2026-12",
      profile_id: beatriz.id,
    },
    {
      id: "f2a3b4c5-d6e7-4f8a-9b0c-1d2e3f4a5b6d",
      instituicao: "Porto Digital / CESAR School",
      curso: "Formação Acelerada em Engenharia de Software e Cloud",
      inicio: "2025-01",
      fim: "2025-07",
      profile_id: beatriz.id,
    },
  ]);

  await models.ProfessionalExperience.bulkCreate([
    {
      id: "a2b3c4d5-e6f7-4a8b-9c0d-1e2f3a4b5c6d",
      empresa: "Recife Tech Solutions",
      cargo: "Desenvolvedora Back-End Júnior",
      inicio: "2025-02",
      fim: "2025-12",
      descricao:
        "Desenvolvimento e manutenção de APIs REST utilizando Java com Spring Boot e PostgreSQL. Criação de testes unitários e integração com serviços externos.",
      profile_id: beatriz.id,
    },
    {
      id: "a3b4c5d6-e7f8-4a9b-8c0d-2e3f4a5b6c7e",
      empresa: "Mangue Cloud Labs",
      cargo: "Engenheira de Software Pleno",
      inicio: "2026-01",
      fim: null,
      descricao:
        "Arquitetura de microsserviços escaláveis com Node.js e Spring Boot, automação de deploy via GitHub Actions e gerenciamento de bancos PostgreSQL na nuvem.",
      profile_id: beatriz.id,
    },
  ]);

  await models.Project.bulkCreate([
    {
      id: "b4c5d6e7-f8a9-4b0c-8d1e-3f4a5b6c7d8f",
      titulo: "Recife Mobilidade Urbana API",
      descricao:
        "Plataforma de monitoramento e consulta de rotas de transporte público em tempo real na Região Metropolitana do Recife.",
      tecnologias: "Java, Spring Boot, PostgreSQL, Docker, Redis",
      link: "https://github.com/beatrizcavalcanti/recife-mobilidade-api",
      profile_id: beatriz.id,
    },
    {
      id: "b5c6d7e8-f9a0-4b1c-9d2e-4f5a6b7c8d9a",
      titulo: "FinTrack Mobile & Web",
      descricao:
        "Sistema de gestão financeira para microempreendedores com relatórios analíticos, controle de fluxo de caixa e aplicativo mobile integrado.",
      tecnologias: "React Native, Expo, Node.js, Express, NeonDB",
      link: "https://github.com/beatrizcavalcanti/fintrack",
      profile_id: beatriz.id,
    },
  ]);

  console.log("Seed inicial concluído com sucesso (2 currículos completos cadastrados)!");
};
