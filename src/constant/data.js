import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
  RiReactjsFill,
  RiJavascriptFill,
  RiPhpFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiWhatsappFill,
} from "@remixicon/react";

import {
  SiPython,
  SiDocker,
  SiNodedotjs,
  SiGit,
  SiLinux,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
} from "react-icons/si";

export const navItems = [
  { id: 1, label: "Inicio", href: "#home" },
  { id: 2, label: "Conhecimento", href: "#about" },
  { id: 3, label: "Experiência", href: "#resume" },
  { id: 4, label: "Projetos", href: "#projects" },
  { id: 5, label: "Contato", href: "#contact" },
];

export const heroIcons = [
  { id: 1, icon: SiPython, label: "Python" },
  { id: 2, icon: RiPhpFill, label: "PHP" },
  { id: 3, icon: RiJavascriptFill, label: "JavaScript" },
  { id: 5, icon: RiReactjsFill, label: "ReactJS" },
  { id: 6, icon: SiMysql, label: "MySQL" },
  { id: 7, icon: SiPostgresql, label: "PostgreSQL" },
  { id: 8, icon: SiGit, label: "Git" },
  { id: 9, icon: SiDocker, label: "Docker" },
  { id: 10, icon: SiLinux, label: "Linux" },
];

export const aboutItems = [
  {
    id: 1,
    label:
      "Python (Scrapy, Flask, Pandas e Numpy) — Desenvolvimento de bots, APIs, automações e análise de dados.",
  },
  {
    id: 2,
    label: "PHP (Laravel, Flight) — Criação e manutenção de aplicações web.",
  },
  {
    id: 3,
    label:
      "JavaScript e TypeScript (Vue.js, React.js, Angular) — Frontend moderno",
  },
  {
    id: 4,
    label: "C# .NET e Node.js — Backend e serviços web.",
  },
  {
    id: 5,
    label: "Bancos de Dados — MySQL, modelagem e consultas",
  },
  {
    id: 6,
    label: "Docker — Conteinerização e ambientes isolados",
  },
  {
    id: 7,
    label: "Controle de versão com Git — Versionamento e colaboração em equipe",
  },
  {
    id: 8,
    label: "Metodologias Ágeis — Scrum, Kanban, trabalho colaborativo",
  },
];

export const analysisItems = [
  { id: 1, label: "Python – Manipulação de dados com Pandas e NumPy" },
  { id: 2, label: "MySQL e PostgreSQL – Consultas SQL complexas e modelagem" },
  { id: 3, label: "Power BI – Criação de relatórios para suporte à decisão" },
  { id: 4, label: "Excel – Análise exploratória de dados" },
  { id: 5, label: "ETL – Processos de extração, transformação e carga de dados" },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Experiência",
    list: [
      {
        role: "Desenvolvedor Júnior",
        label: "Fábrica de Ideias",
        time: "2023 - Atual",
        description:
          "• Desenvolvimento com Python (Scrapy, Flask) e PHP (Laravel, Flight).\n• Criação e manutenção de bots para scraping(Scrapy) e automação de dados.\n• Desenvolvimento de scripts e ferramentas auxiliares para automações internas.\n• Utilização de Docker e Git para organização de ambiente e versionamento.\n• Participação em times ágeis, utilizando Scrum e Kanban.",
      },
      {
        role: "Estagiário em Desenvolvimento",
        label: "Fábrica de Ideias",
        time: "2022 - 2023",
        description:
          "• Apoio na coleta e organização de dados por meio de automações com Python.\n• Suporte em tarefas de manutenção de dados e versionamento com Git.\n• Contato com bancos de dados relacionais e análises básicas com SQL.",
      },
    ],
  },
  {
    id: 2,
    title: "Formação e Certificação",
    list: [
      {
        label: "Curso - Leonardo Karpinski",
        role: "Power BI Experience",
        time: "2025 - Cursando",
      },
      {
        label: "Udemy",
        role: "Python 3 e REST APIs com Flask",
        time: "2024 - 2025",
      },
      {
        label: "Udemy",
        role: "Git e GitHub do Básico ao Avançado",
        time: "2024 - 2025",
      },
      {
        label: "Udemy",
        role: "Web Moderno Completo com JavaScript e Frameworks",
        time: "2022 - 2023",
      },
      {
        label: "Centro Universitário do Distrito Federal - UDF",
        role: "Análise e Desenvolvimento de Sistemas",
        time: "2021 - 2022",
        description: "Formação - Curso Superior",
      },
    ],
  },
];

export const devProjects = [
  {
    id: 1,
    title: "Distribuidora - Cadastro",
    src: "/images/distribuidora.png",
    text: "Aplicação feita com Angular e C# .Net para cadastro e listagem de produtos de uma Distribuidora",
    link: "https://github.com/alvesalejr/distribuidora",
  },
  {
    id: 2,
    title: "Scrapy - Promoções",
    src: "/images/scrapy.png",
    text: "Bot de web crawler feito por Scrapy(Pyhton) captura promoções",
    link: "https://github.com/alvesalejr/web-scrapping",
  },
    {
    id: 3,
    title: "Portófolio 1.0",
    src: "/images/port1.png",
    text: "PRimeiro portfólio criado com Javascript PURO.",
    link: "https://github.com/seuusuario/proj2",
  },

];

export const analysisProjects = [
  {
    id: 1,
    title: "Dashboard de Vendas",
    src: "/images/dashboardmercado.png",
    text: "Dashboard interativo feito no Power BI para análise de vendas mensais de um mercadinho.",
    link: "https://github.com/seuusuario/proj3",
  },
  {
    id: 2,
    title: "Relatório de Marketing",
    src: "/images/portfolio-4.png",
    text: "Relatório gerado com Python e Excel para suporte à decisão em campanhas.",
    link: "https://github.com/seuusuario/proj4",
  },

];

export const contactItems = [
  {
    id: 1,
    label: "Email:",
    link: "alvesalejr@gmail.com",
  },
  {
    id: 2,
    label: "Telefone:",
    link: "(61) 98425-0137",
  },
];
