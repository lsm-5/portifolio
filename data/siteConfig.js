module.exports = {
  siteTitle: 'Olá! Sou Lucas Mendonça!',
  siteDescription: `Meu portifólio`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Lucas Mendonça',
  githubUsername: 'lsm-5',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Desenvolvedor, apaixonado pelo o que faço.<br />
  Em 2019 comecei a ser monitor da disciplina de Engenharia de Software e Sistema, que me despertou a vontade de criar e gerenciar projetos.
  Ainda em 2019, investi na minha carreira e finalizei cursos que me dava mais autonomia em criar projetos do total zero seguindo diversos pattern. <br />
  E hoje estagio na área que gosto, sendo fullstack nas tecnologias <strong> ReactJS, React Native e NodeJS.</strong>`,
  skills: [
    {
      name: 'React Native',
      level: 87
    },
    {
      name: 'Javascript',
      level: 60
    },
    {
      name: 'Html',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 80
    },
    {
      name: 'ReactJS',
      level: 80
    },
    {
      name: 'Git',
      level: 70
    },
    {
      name: 'Typescript',
      level: 70
    }
    /* more skills here */
  ],
  jobs: [
    /* more portifolio items here */
    {
      begin: {
        month: 'out',
        year: '2019'
      },
      company: "UFPE - Campus Recife",
      duration: null,
      occupation: "Participação no Hackapet",
      description: "Participação na segunda edição do Hackathon promovido pela Pet-Informática."
    },
    {
      begin: {
        month: 'set',
        year: '2019'
      },
      company: "Praecanto Tecnologia",
      duration: "1 ano",
      occupation: "Estágio",
      description: "Auxiliar no desenvolvimento de front-end com javascript/React e React Native, e no Back-end com python/flask"
    },
    {
      begin: {
        month: 'set',
        year: '2019'
      },
      company: "UFPE - Campus Recife",
      duration: "6 meses",
      occupation: "Monitoria em Engenharia de Software e Sistemas",
      description: "Ajudou 30 alunos iniciantes aprenderem Angular, TypeScript e testes automatizado com Selenium e Cucumber, através do acompanhamento online e presencial."
    },
    {
      begin: {
        month: 'set',
        year: '2019'
      },
      company: "UFPE - Campus Recife",
      duration: "6 meses",
      occupation: "Bolsista no SESST",
      description: "Bolsista de apoio acadêmico na Seção de Saúde e Segurança do Trabalho."
    },
    {
      begin: {
        month: 'out',
        year: '2018'
      },
      company: "UFPE - Campus Recife",
      duration: null,
      occupation: "Participação no Hackapet",
      description: "Participação na primeira edição do Hackathon promovido pela Pet-Informática."
    },
    {
      begin: {
        month: 'set',
        year: '2018'
      },
      company: "UFPE - Campus Recife",
      duration: "1 ano",
      occupation: "Bolsista no NASE",
      description: "Bolsista de apoio acadêmico no Núcleo de Atenção à Saúde dos Estudantes."
    },
    {
      begin: {
        month: 'fev',
        year: '2018'
      },
      company: "UFPE - Campus Recife",
      duration: "1 ano e 6 meses",
      occupation: "Monitoria de Introdução à Programação",
      description: "Ajudou 80 alunos iniciantes aprenderem Java e Orientação à Objetos, através do acompanhamento online e presencial."
    },
  ],
  portifolio: [
    {
      image: "/images/gobarber.png",
      description: "Projeto GoBarber",
      subDescription: "Desenvolvido para unir prestadores de serviços e clientes",
      url: "https://github.com/lsm-5/GoBarber"
    },
    {
      image: "/images/ecoleta.png",
      description: "Projeto Ecoleta",
      subDescription: "Desenvolvido a fim de juntar empresas coletora de resíduos e lixos em descarteis",
      url: "https://github.com/lsm-5/Ecoleta-01"
    },
    {
      image: "/images/bussolafinanceira.png",
      description: "Projeto Bússola Financeira",
      subDescription: "Desenvolvido com o intuíto de controlar o dinheiro reservado para sua finalidade",
      url: "https://github.com/lsm-5/bussola_financeira"
    },
    /* more portifolio items here */
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/lucas-mendon%C3%A7a-12181a187/",
    github: "https://github.com/lsm-5",
    email: "lucasmendonca.dev@gmail.com",
    pdf: "yes"
  },
  siteUrl: 'https://lsm-5.github.io/portifolio',
  pathPrefix: '/portifolio', // Note: it must *not* have a trailing slash.
  siteCover: '/images/back.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Projetos',
      url: '/project',
    }
  ]
}