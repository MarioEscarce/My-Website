document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});


const translations = {

  en: {

    nav_about: 'About',
    nav_research: 'Research',
    nav_projects: 'Projects',
    nav_publications: 'Publications',
    nav_contact: 'Contact',

    hero_eyebrow: 'Research · Games · HCI · Interactive Systems',

    hero_title: 'I study how games and interactive systems can help people <em>collaborate, learn, and make decisions together.</em>',
    
    hero_text: 'I research and develop games and interactive systems, exploring them through HCI, computational creativity, and digital arts. My research ranges from serious games to music co-creation, while my game development work has a strong focus on 3D art.',
    
    explore_research: 'See my research',
    download_cv: 'View Short CV ↗',
    your_photo: 'your<br>photo',

    currently: 'Areas',
    position_placeholder: 'Games · HCI · Digital Arts',

    based_in: 'Based in',
    city_country: 'Brazil',

    elsewhere: 'Elsewhere',

    about_label: 'About',
    about_title: 'About me',

    research_label: 'Research',
    research_title: 'Research interests',

    // research_a_title: 'Interactive media & computational creativity',
    // research_a_text: 'How interactive, immersive, and generative systems create new relationships between human action, audiovisual expression, and computational processes.',

    // research_b_title: 'Games, learning & societal challenges',
    // research_b_text: 'How games and interactive experiences can support learning, reflection, preparedness, and engagement with complex societal challenges.',

    // research_c_title: 'Collaborative interaction & reasoning',
    // research_c_text: 'How the design of interactive systems shapes communication, coordination, negotiation, and collective decision-making.',

    research_a_title: 'HCI, interactive media & computational creativity',
    research_a_text: 'Human-computer interaction and interactive systems, with interests in computational creativity, music co-creation, generative systems, and audiovisual interaction.',

    research_b_title: 'Games, game design & learning',
    research_b_text: 'Research on games and game design, including serious games, game-based learning, and the use of games to support learning, reflection, and engagement.',

    research_c_title: 'Collaborative interaction & decision-making',
    research_c_text: 'How the design of interactive systems shapes communication, collaboration, negotiation, and shared decision-making.',
    
    
    projects_label: 'Selected projects',

    projects_title: 'Research artifacts, games, and interactive experiments.',

    project1_type: 'Serious Games · HCI · Collaborative Learning',

    project1_title: 'Discourse Analysis',

    project1_text: 'Research on how player discourse, negotiation, and shared decision-making unfold in serious games for wildfire preparedness and community resilience.',

    project2_type: 'Art Game · Computational Creativity',

    project2_text: 'An art game in which the player\'s movement through a virtual environment contributes to the emergence of music.',

    project3_type: 'VR · Interactive Musical System',

    project3_text: 'A virtual-reality musical instrument that uses a color-to-tone translation and meta-interactivity to help non-experts create relaxing harmonic progressions.',

    read_paper: 'Read paper ↗',
    view_game: 'Play game ↗',
    watch_video: 'Watch video ↗',

    publications_label: 'Selected publications',
    publications_title: 'Recent work',

    full_publications: 'Full publication list ↗',

    pub_placeholder_title: 'Your publication title goes here',
    pub_placeholder_venue: 'Conference or Journal Name',

    pub_another_title: 'Another selected publication',
    venue_name: 'Venue Name',

    contact_label: 'Contact',

    contact_title: 'Any questions or interest in collaboration?'
  },


  pt: {

    nav_about: 'Sobre',
    nav_research: 'Pesquisa',
    nav_projects: 'Projetos',
    nav_publications: 'Publicações',
    nav_contact: 'Contato',

    hero_eyebrow: 'Pesquisa · Jogos · IHC · Sistemas Interativos',

    hero_title: 'Estudo como jogos e sistemas interativos podem apoiar <em>a colaboração, a aprendizagem e a tomada de decisões em conjunto.</em>',

    hero_text: 'Pesquiso e desenvolvo jogos e sistemas interativos, explorando as áreas de IHC, criatividade computacional e artes digitais. Minha pesquisa inclui desde jogos sérios até cocriação musical, e no desenvolvimento de jogos tenho um interesse especial por arte 3D.',
    explore_research: 'Ver minha pesquisa',
    currently: 'Áreas',
    position_placeholder: 'Jogos · IHC · Artes Digitais',

    based_in: 'Localização',
    city_country: 'Brasil',

    elsewhere: 'Links',

    about_label: 'Sobre',
    about_title: 'Sobre mim',

    research_label: 'Pesquisa',
    research_title: 'Interesses de pesquisa',

    // research_a_title: 'Mídia interativa e criatividade computacional',
    // research_a_text: 'Como sistemas interativos, imersivos e generativos criam novas relações entre ação humana, expressão audiovisual e processos computacionais.',

    // research_b_title: 'Jogos, aprendizagem e desafios sociais',
    // research_b_text: 'Como jogos e experiências interativas podem apoiar aprendizagem, reflexão, preparação e engajamento com desafios sociais complexos.',

    // research_c_title: 'Interação e raciocínio colaborativos',
    // research_c_text: 'Como o design de sistemas interativos molda comunicação, coordenação, negociação e tomada de decisão coletiva.',

    research_a_title: 'IHC, mídia interativa e criatividade computacional',
    research_a_text: 'Interação humano-computador e sistemas interativos, com interesse em criatividade computacional, cocriação musical, sistemas generativos e interação audiovisual.',

    research_b_title: 'Jogos, game design e aprendizagem',
    research_b_text: 'Pesquisa sobre jogos e game design, incluindo jogos sérios, aprendizagem baseada em jogos e o uso de jogos para apoiar aprendizagem, reflexão e engajamento com desafios sociais.',

    research_c_title: 'Interação colaborativa e tomada de decisão',
    research_c_text: 'Como o design de sistemas interativos influencia a comunicação, colaboração, negociação e tomada de decisão compartilhada.',

    projects_label: 'Projetos selecionados',

    projects_title: 'Artefatos de pesquisa, jogos e experimentos interativos.',

    project1_type: 'Jogos Sérios · IHC · Aprendizagem Colaborativa',
    project1_title: 'Análise de Discurso',
    project1_text: 'Pesquisa sobre como discurso, negociação e tomada de decisão compartilhada emergem em jogos sérios voltados à preparação para incêndios florestais e à resiliência comunitária.',

    project2_type: 'Art Game · Criatividade Computacional',
    project2_text: 'Um art game em que o movimento do jogador por um ambiente virtual contribui para a emergência da música.',

    project3_type: 'RV · Sistema Musical Interativo',
    project3_text: 'Um instrumento musical em realidade virtual que utiliza o mapeamento de cores para tons musicais e meta-interatividade para ajudar não especialistas a criar progressões harmônicas relaxantes.',

    read_paper: 'Ler artigo ↗',
    view_game: 'Jogar ↗',
    watch_video: 'Assistir vídeo ↗',

    publications_label: 'Publicações selecionadas',
    publications_title: 'Trabalhos recentes',

    full_publications: 'Lista completa de publicações ↗',

    pub_placeholder_title: 'Título da sua publicação',
    pub_placeholder_venue: 'Nome da conferência ou periódico',

    pub_another_title: 'Outra publicação selecionada',
    venue_name: 'Nome do evento ou periódico',

    contact_label: 'Contato',

    contact_title: 'Dúvidas ou interesse em colaboração?'
  }
};


const toggle = document.getElementById('lang-toggle');

let currentLang =
  localStorage.getItem('site-language') || 'en';


function applyLanguage(lang) {

  currentLang = lang;

  document.documentElement.lang =
    lang === 'pt' ? 'pt-BR' : 'en';

  const lattesLink = document.getElementById('lattes-link');

  if (lattesLink) {
    lattesLink.hidden = lang !== 'pt';
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {

    const key = el.dataset.i18n;

    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }

  });


  document.querySelectorAll('[data-i18n-html]').forEach((el) => {

    const key = el.dataset.i18nHtml;

    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }

  });


  document.querySelectorAll('[data-lang-label]').forEach((el) => {

    el.classList.toggle(
      'active',
      el.dataset.langLabel === lang
    );

  });


  toggle.setAttribute(
    'aria-label',
    lang === 'en'
      ? 'Mudar para português'
      : 'Switch to English'
  );


  localStorage.setItem(
    'site-language',
    lang
  );
}


toggle.addEventListener('click', () => {

  applyLanguage(
    currentLang === 'en'
      ? 'pt'
      : 'en'
  );

});


applyLanguage(currentLang);



function syncRichAboutLanguage() {

  const lang =
    (document.documentElement.lang || 'en')
      .toLowerCase();

  const isPt =
    lang.startsWith('pt');

  const en =
    document.querySelector('.about-en');

  const pt =
    document.querySelector('.about-pt');


  if (en) {
    en.hidden = isPt;
  }

  if (pt) {
    pt.hidden = !isPt;
  }

}


document.addEventListener(
  'DOMContentLoaded',
  () => {

    syncRichAboutLanguage();

    new MutationObserver(
      syncRichAboutLanguage
    ).observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ['lang']
      }
    );

  }
);
