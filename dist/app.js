'use strict';

const projectData = {
  bingeo: {
    title: 'Bingeo', subtitle: 'Sua próxima série começa aqui.', category: '01 / APLICAÇÃO WEB · PROJETO PESSOAL · 2026',
    image: '/assets/bingeo.webp', alt: 'Pôster do Bingeo com uma esfera de vidro violeta', tech: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Integração de APIs'],
    challenge: 'Criar um espaço dedicado a quem acompanha séries: descobrir títulos, organizar o que assistir e compartilhar opiniões em uma mesma experiência.',
    role: 'Concepção e desenvolvimento da plataforma, evolução da interface, integração de serviços e resolução de problemas. Uso de IA generativa como apoio à programação e ao aprendizado ao longo do projeto.',
    features: ['Catálogo e descoberta de séries com integração de APIs, incluindo TMDB.', 'Estante com status, avaliações, resenhas, listas e registro no diário.', 'Perfis, acompanhamento de outros usuários e atividades da comunidade.', 'Autenticação e persistência de dados com Supabase.'],
    note: 'Projeto pessoal em evolução. O portfólio apresenta as principais frentes de desenvolvimento da plataforma.',
    links: [{text:'Visitar o Bingeo',url:'https://bingeo.onrender.com/',primary:true},{text:'Meu GitHub',url:'https://github.com/migplay777'}]
  },
  figo: {
    title: 'FIGO', subtitle: 'Planejar para ir mais longe.', category: '02 / DESKTOP · PROJETO EM EQUIPE · 2026',
    image: '/assets/figo.webp', alt: 'Pôster do FIGO com um figo e um caminho iluminado', tech: ['C#', '.NET', 'Windows Forms', 'MySQL'],
    challenge: 'Organizar as informações financeiras de viagens missionárias da Igreja Família da Fé, reunindo receitas, despesas e relatórios em um sistema desktop.',
    role: 'Levantamento de requisitos, entrevista com o stakeholder Samuel, coordenação das atividades do grupo e desenvolvimento do sistema. Trabalho em equipe com Leonardo Aparecido e Henrique Teles.',
    features: ['Organização de viagens, receitas, despesas e acompanhamento do saldo.', 'Interface desktop em Windows Forms conectada a uma base MySQL.', 'Cadastros de apoio e relatórios financeiros, incluindo exportação CSV.', 'Estrutura de autenticação e evolução das rotinas de gestão.'],
    note: 'Projeto acadêmico em desenvolvimento e validação. Entrega planejada para o fim de novembro de 2026.',
    links: [{text:'Ver repositório do FIGO',url:'https://github.com/migplay777/FIGO',primary:true},{text:'Conversar sobre o projeto',url:'mailto:miguel.brenmig@gmail.com?subject=Vamos%20conversar%20sobre%20o%20FIGO'}]
  },
  mission: {
    title: 'MissiON', subtitle: 'Conectando pessoas a uma missão.', category: '03 / CONSOLE · PROJETO DE EXTENSÃO · 2026',
    image: '/assets/mission.webp', alt: 'Pôster do MissiON com uma estrada de montanha ao amanhecer', tech: ['Linguagem C', 'Lógica de programação', 'Arquivos .dat', 'Relatórios TXT'],
    challenge: 'Apoiar o planejamento de viagens missionárias com uma ferramenta que organize participantes, veículos e itens necessários antes de sair para a estrada.',
    role: 'Desenvolvimento em C e participação no planejamento e na documentação do projeto de extensão. Aplicação de lógica, estruturas de dados e persistência para responder a necessidades da Igreja Família da Fé.',
    features: ['Cadastro de participantes e veículos e apoio à distribuição de pessoas.', 'Planejamento de transporte e checklists de viagem.', 'Simulação de custos e cálculo de combustível.', 'Persistência de dados em arquivos e exportação de relatórios TXT.'],
    note: 'Sistema de checklist para viagens missionárias. Um projeto de extensão que aproxima a programação de uma necessidade da comunidade.',
    links: [{text:'Explorar meu GitHub',url:'https://github.com/migplay777?tab=repositories',primary:true},{text:'Conversar sobre o projeto',url:'mailto:miguel.brenmig@gmail.com?subject=Vamos%20conversar%20sobre%20o%20MissiON'}]
  },
  brenmig: {
    title: 'Brenmig OS', subtitle: 'Do atendimento à organização do serviço.', category: '04 / APLICAÇÃO WEB · EXPERIÊNCIA PROFISSIONAL · 2025',
    image: '/assets/hero.webp', alt: 'Projetor de cinema, arte da ficha do sistema de ordens de serviço', tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'PDF'],
    challenge: 'Organizar as ordens de serviço de uma empresa de automação comercial, registrando informações de clientes, equipamentos e manutenção.',
    role: 'Desenvolvimento do sistema de ordens de serviço durante minha atuação como auxiliar técnico na Brenmig Automação Comercial, conectando a rotina de atendimento e manutenção a uma solução web.',
    features: ['Registro de clientes, equipamentos, reclamações e serviços realizados.', 'Geração e impressão de ordens de serviço em PDF.', 'Consulta de ordens, filtros por cliente e data e acompanhamento de status.', 'Evolução do armazenamento das informações com PHP e MySQL.'],
    note: 'Projeto desenvolvido a partir de uma necessidade real do ambiente de trabalho. Experiência complementar aos três projetos em destaque.',
    links: [{text:'Conversar sobre o sistema',url:'mailto:miguel.brenmig@gmail.com?subject=Sistema%20de%20ordens%20de%20servi%C3%A7o',primary:true}]
  }
};

const dialog = document.querySelector('#project-dialog');
let opener = null;

function openProject(key, trigger) {
  const data = projectData[key];
  if (!data) return;
  opener = trigger;
  document.querySelector('#dialog-title').textContent = data.title;
  document.querySelector('#dialog-art-title').textContent = data.title;
  document.querySelector('#dialog-category').textContent = data.category;
  document.querySelector('#dialog-subtitle').textContent = data.subtitle;
  const image = document.querySelector('#dialog-image');
  image.src = data.image; image.alt = data.alt;
  document.querySelector('#dialog-challenge').textContent = data.challenge;
  document.querySelector('#dialog-role').textContent = data.role;
  document.querySelector('#dialog-note').textContent = data.note;
  document.querySelector('#dialog-tech').replaceChildren(...data.tech.map(text => {const span=document.createElement('span');span.textContent=text;return span;}));
  document.querySelector('#dialog-features').replaceChildren(...data.features.map(text => {const item=document.createElement('li');item.textContent=text;return item;}));
  document.querySelector('#dialog-links').replaceChildren(...data.links.map(link => {const a=document.createElement('a');a.className=link.primary?'button button-red':'text-link';a.href=link.url;a.textContent=link.text+' ↗';if(link.url.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer';}return a;}));
  dialog.showModal();
  dialog.scrollTop = 0;
  document.querySelector('.dialog-close').focus({preventScroll:true});
}

document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('close', () => {if(opener?.isConnected)opener.focus({preventScroll:true});});

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const selected=button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => {const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
  let count=0;
  document.querySelectorAll('.project-card').forEach(card => {card.hidden=selected!=='all'&&card.dataset.category!==selected;if(!card.hidden)count++;});
  document.querySelector('.filter-count').textContent=String(count).padStart(2,'0')+(count===1?' PROJETO':' PROJETOS');
}));

const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#mobile-nav');
function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}
menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.setAttribute('aria-label',expanded?'Abrir menu':'Fechar menu');menu.hidden=expanded;});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.addEventListener('click',event=>{if(!menu.hidden&&!event.target.closest('.site-header'))closeMenu();});
window.matchMedia('(min-width: 761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});

let toastTimer;
function toast(text){const node=document.querySelector('#toast');node.textContent=text;node.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('visible'),3500);}
document.querySelector('#copy-email').addEventListener('click',async()=>{
  const email='miguel.brenmig@gmail.com';
  try{await navigator.clipboard.writeText(email);toast('E-mail copiado. Vamos escrever o próximo capítulo!');}
  catch{const input=document.createElement('textarea');input.value=email;input.style.position='fixed';input.style.opacity='0';document.body.append(input);input.select();const copied=document.execCommand('copy');input.remove();toast(copied?'E-mail copiado!':'Meu e-mail: '+email);}
});
