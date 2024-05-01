import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".barbershop",
  `Desenvolvi o Barber Shop Manager para simplificar o agendamento de serviços em barbearias. Utilizei React.js, Tailwind CSS e TypeScript no frontend e Next.js no backend, com PostgreSQL para o banco de dados.

  Minha Atuação:
  No frontend, criei uma interface intuitiva e responsiva, garantindo uma experiência fluida para os usuários. No backend, implementei uma aplicação SSR para melhorar o desempenho e integrei um banco de dados para gerenciar clientes e agendamentos.
  
  Desafios e Conquistas:
  Enfrentei desafios diversos, incluindo otimização de desempenho e criação de um sistema de notificações em tempo real. Essas soluções não só melhoraram a comunicação com os clientes, mas também a eficiência operacional das barbearias.
  
  Lições Aprendidas:
  Além do crescimento técnico, aprendi lições valiosas sobre empatia e colaboração. Este projeto reforçou meu compromisso em criar soluções tecnológicas impactantes e acessíveis..`,
  "Desenvolvimento Full Stack",
  "Barber Shop Manager",
  "Set/2023 - Jan/2024"
);

hoverChangeExperience(
  ".lojaonline",
  `O Mobile Shop é uma loja online especializada na venda de produtos eletrônicos, com foco na experiência mobile. Utilizando tecnologias modernas e eficientes, buscamos proporcionar aos nossos clientes uma experiência de compra simples, intuitiva e segura, diretamente de seus dispositivos móveis.
  
  Tecnologias Utilizadas:
React: Utilizamos a biblioteca React para criar uma interface de usuário interativa e responsiva.
Next.js 13: Aproveitamos os recursos avançados do Next.js, incluindo SSR e SSG, para oferecer uma experiência de navegação rápida e fluida.
Next Auth: Implementamos autenticação de usuários com OAuth, oferecendo aos clientes uma maneira fácil e segura de fazer login.
Postgres e Prisma: Utilizamos o banco de dados relacional Postgres juntamente com o Prisma como ORM para armazenar e gerenciar dados de forma eficiente.
shadcn/ui e Tailwind CSS: Para a estilização da interface, contamos com a biblioteca de componentes reutilizáveis shadcn/ui e o framework Tailwind CSS.
API do Stripe: Integramos a API do Stripe para processar pagamentos online de forma segura e confiável.

Funcionalidades:
Login com o Google: Oferecemos aos usuários a opção de fazer login usando suas contas do Google para uma experiência de autenticação simplificada.
Navegação por Categorias: Os clientes podem explorar nossa ampla seleção de produtos por categorias, facilitando a busca e a compra.
Descontos em Produtos: Disponibilizamos descontos especiais em alguns produtos, permitindo que os clientes economizem em suas compras.
Gerenciamento do Carrinho de Compras: Os usuários podem adicionar produtos ao carrinho, remover itens e ajustar a quantidade conforme necessário, garantindo uma experiência de compra personalizada.
Pagamento Seguro com o Stripe: Oferecemos um processo de pagamento online seguro e confiável com a integração da API do Stripe, permitindo que os clientes concluam seus pedidos com facilidade e tranquilidade.

Além do crescimento técnico, este projeto me ensinou sobre empatia e colaboração. Reforcei meu compromisso em criar soluções tecnológicas impactantes e acessíveis, focadas nas necessidades dos usuários e no trabalho em equipe.
`,
  "Desenvolvimento Full Stack",
  "Mobile Shop - Simplificando a Experiência de Compras",
  "Abril/2024 - Abril/2024"
);

hoverChangeExperience(
  ".fullstackweek-store",
  `Como frontend em um projeto open source, desempenho um papel crucial na construção de uma aplicação completa e funcional. Minha responsabilidade abrange desde a criação de interfaces de usuário envolventes até a implementação de recursos interativos e responsivos em toda a aplicação.

  Utilizando tecnologias como React.js, Tailwind CSS e TypeScript, trabalho na criação e manutenção de componentes modulares e reutilizáveis, garantindo uma arquitetura sólida e escalável. Isso inclui a elaboração de layouts coesos, a estilização consistente e a integração de funcionalidades dinâmicas para uma experiência de usuário aprimorada.
  
  Além disso, como parte de um projeto open source, colaboro ativamente com outros desenvolvedores e contribuidores. Participar de discussões, revisar código e propor melhorias são aspectos essenciais do meu envolvimento no projeto. Essa colaboração promove um ambiente de aprendizado e crescimento contínuos, onde compartilhamos conhecimentos e experiências para alcançar nossos objetivos comuns.
  
  Nossa missão é desenvolver uma aplicação robusta e acessível, que atenda às necessidades dos usuários e promova a adoção e contribuição da comunidade open source. Estou entusiasmado em fazer parte deste projeto e em contribuir para o avanço da tecnologia de código aberto.`,
  "Desenvolvimento Front End",
  "Atuação como Frontend em um Projeto Open Source",
  "Mar/2024 - Em Andamento"
);

hoverChangeExperience(
  ".cloneyoutube",
  `Decidi construir um clone do YouTube usando TypeScript, CSS e styled-components. Meu objetivo era recriar a interface familiar do site para uma experiência de usuário semelhante à original.

  Tecnologias Utilizadas:
  TypeScript: Escolhi TypeScript pela sua tipagem estática, garantindo código mais robusto.
  CSS e styled-components: Utilizei CSS e styled-components para estilizar componentes de forma eficiente e modular.
  Desafios e Aprendizados:
  
  Enfrentei desafios ao replicar a complexidade da interface do YouTube, principalmente na área de vídeos e comentários. Aprendi a importância da organização do código e da abstração de componentes para facilitar a manutenção.
  
  Construir o clone do YouTube foi gratificante, aprimorando minhas habilidades em desenvolvimento web. Estou animado para aplicar esses conhecimentos em projetos futuros.`,
  "Desenvolvimento Front End",
  "Construindo um Clone do YouTube com TypeScript e Styled-components",
  "Out/2023 - Out/2023"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
