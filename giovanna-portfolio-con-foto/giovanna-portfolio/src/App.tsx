import React, { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Bug, Code2, FileText, Github, Linkedin, Mail, Menu, ShieldCheck, Workflow, X } from 'lucide-react'

const projects = [
  { n: '01', name: 'Postulix', type: 'QA · Dashboard · Métricas', color: 'purple', desc: 'Dashboard de seguimiento de calidad para visualizar tickets, estados, criticidad y capacidad del equipo.', tags: ['QA Metrics', 'Testing', 'Dashboards'], detail: 'Caso de estudio: organización de métricas por sprint, seguimiento de tickets reportados, cerrados y reabiertos, y visualización de criticidad. Los datos y capturas reales se incorporarán con autorización.' },
  { n: '02', name: 'ClicSalud', type: 'QA · Salud digital', color: 'purple', desc: 'Trabajo de aseguramiento de calidad en una plataforma de servicios de salud.', tags: ['Testing funcional', 'Regresión', 'TFS'], detail: 'Caso de estudio: análisis de requerimientos, diseño y ejecución de pruebas, seguimiento de incidencias y validación de funcionalidades. El alcance público se ajustará para proteger información interna.' },
  { n: '03', name: 'FunQAS', type: 'QA · Security', color: 'green', desc: 'Propuesta de servicios que integra aseguramiento de calidad y seguridad informática.', tags: ['QA', 'Security', 'Web'], detail: 'Proyecto de identidad y presencia digital para comunicar servicios de testing y seguridad, diferenciando visualmente ambas áreas.' },
  { n: '04', name: 'MARA ESPACIO', type: 'Análisis funcional · Desarrollo', color: 'green', desc: 'Sistema de gestión para un emprendimiento: procesos, usuarios, permisos, productos y ventas.', tags: ['Requerimientos', 'Modelado', 'Sistema web'], detail: 'Caso de estudio académico: relevamiento del negocio, definición de roles, módulos y requerimientos para digitalizar inventario, ventas y gestión de clientes.' },
  { n: '05', name: 'PsyFind', type: 'Scrum Master · Tesis de Ingeniería', color: 'purple', desc: 'Proyecto de tesis de Ingeniería en Sistemas de Información, donde me desempeñé como Scrum Master.', tags: ['Scrum Master', 'Agile', 'Coordinación'], detail: 'Durante el desarrollo de PsyFind, tesis de Ingeniería en Sistemas de Información, asumí el rol de Scrum Master: facilité la organización y planificación del trabajo, el seguimiento de actividades y la coordinación del equipo para acompañar el avance del proyecto bajo Scrum.' },
  { n: '06', name: 'TKDUM', type: 'Desarrollo · Sistemas', color: 'green', desc: 'Proyecto de sistemas con participación en tareas de análisis y desarrollo.', tags: ['Desarrollo', 'Documentación'], detail: 'Sección preparada para sumar contexto, stack, funcionalidades implementadas y capturas autorizadas.' },
  { n: '07', name: 'Estacionamiento Animado', type: 'Python · Simulación interactiva', color: 'green', desc: 'Simulación paso a paso de un estacionamiento: ingreso y egreso de vehículos, ocupación, colas y recaudación.', tags: ['Python', 'Streamlit', 'Pandas', 'Matplotlib'], detail: 'Desarrollo de una simulación interactiva con avance por pasos, gestión de eventos, espacios diferenciados para vehículos, visualización de ocupación, cola de espera y métricas de recaudación. Implementada con Python, Streamlit, pandas, Matplotlib y heapq.' },
]

const skills = [
  { title: 'QA & Testing', icon: Bug, tone: 'purple', items: ['Testing funcional', 'Testing de regresión', 'Smoke testing', 'Diseño de casos de prueba', 'Seguimiento de defectos', 'Validación de requerimientos'] },
  { title: 'Análisis funcional', icon: Workflow, tone: 'purple', items: ['Relevamiento', 'Historias de usuario', 'Casos de uso', 'Documentación funcional', 'Scrum', 'Coordinación de equipo'] },
  { title: 'Desarrollo', icon: Code2, tone: 'green', items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Node.js & Express', 'Python', 'C#', 'MongoDB'] },
  { title: 'Herramientas', icon: ShieldCheck, tone: 'green', items: ['TFS', 'Git & GitHub', 'Visual Studio', 'VS Code', 'Figma', 'Canva', 'Streamlit'] },
]

function App() {
  const [active, setActive] = useState('Todos')
  const [selected, setSelected] = useState<number | null>(null)
  const [menu, setMenu] = useState(false)
  const filtered = projects.filter(p => active === 'Todos' || (active === 'QA & Testing' ? p.type.includes('QA') : active === 'Análisis funcional' ? p.type.includes('Análisis') : p.type.includes('Desarrollo')))

  return <div className="site-shell">
    <div className="noise" />
    <header className="nav wrap">
      <a className="brand" href="#home"><span className="brand-mark">GM</span><span>GIOVANNA<span className="muted">.DEV</span></span></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Abrir menú">{menu ? <X /> : <Menu />}</button>
      <nav className={menu ? 'nav-links open' : 'nav-links'}>{[['Sobre mí','#about'],['Experiencia','#experience'],['Proyectos','#projects'],['Videojuegos','#games'],['Stack','#skills'],['Contacto','#contact']].map(([t,h])=><a key={t} href={h} onClick={()=>setMenu(false)}>{t}</a>)}</nav>
      <a className="nav-cta" href="#contact">Hablemos <ArrowUpRight size={15}/></a>
    </header>

    <main id="home">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> DISPONIBLE PARA NUEVOS DESAFÍOS</div>
          <p className="hero-kicker">QA TESTING <i>✳</i> FUNCTIONAL ANALYSIS <i>✳</i> DEVELOPMENT</p>
          <h1>Hola, soy<br/><span>Giovanna.</span></h1>
          <p className="hero-lead">Conecto la mirada analítica con la técnica para crear software que funcione, sea útil y tenga calidad.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Ver proyectos <ArrowUpRight size={17}/></a><a className="button secondary" href="#contact">Contactarme <Mail size={16}/></a></div>
          <div className="hero-meta"><span>01 <b>QA & Testing</b></span><span>02 <b>Análisis funcional</b></span><span>03 <b>Desarrollo</b></span></div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="hero-card">
            <div className="card-top"><span>PROFILE / 2026</span><span className="live-dot">● ONLINE</span></div>
            <img className="hero-photo" src="/giovanna-marandino.png" alt="Fotografía de Giovanna Marandino" />
            <div className="card-name">Giovanna Marandino</div><div className="card-role">QA TESTER / FUNCTIONAL ANALYST</div>
            <div className="card-rule"></div>
            <div className="card-bottom"><span>QUALITY MINDED</span><span>DETAIL ORIENTED ↗</span></div>
          </div>
          <div className="float-chip chip-purple"><Bug size={16}/> Quality first</div>
          <div className="float-chip chip-green"><ShieldCheck size={16}/> Think secure</div>
          <div className="art-caption">CÓRDOBA, ARGENTINA <span>—</span> OPEN TO REMOTE</div>
        </div>
        <a className="scroll-cue" href="#about"><ArrowDownRight size={17}/> SCROLL TO EXPLORE</a>
      </section>

      <section className="section wrap about" id="about">
        <div className="section-label"><span>01 / SOBRE MÍ</span><span>UN POCO DE CONTEXTO</span></div>
        <div className="about-grid"><h2>Calidad en cada<br/>detalle. <em>Visión</em><br/><em>en conjunto.</em></h2>
          <div className="about-text"><p className="big-copy">Soy profesional del área de tecnología, con experiencia en <strong>QA Testing y Análisis Funcional</strong>, y participación en proyectos de desarrollo de software.</p><p>Me interesa entender cómo funciona un producto de punta a punta: desde las necesidades del usuario y los requerimientos, hasta la validación de cada funcionalidad. También cuento con experiencia coordinando tareas de QA y trabajando con equipos ágiles.</p><p>Busco seguir creciendo en equipos donde pueda aportar pensamiento crítico, organización y una mirada integral del producto.</p><div className="about-facts"><div><b>+3 años</b><span>de experiencia profesional</span></div><div><b>QA + AF</b><span>perfil multidisciplinario</span></div><div><b>AR</b><span>Córdoba · Argentina</span></div></div></div>
        </div>
      </section>

      <section className="section experience" id="experience"><div className="wrap"><div className="section-label"><span>02 / EXPERIENCIA</span><span>TRABAJO EN EQUIPO · MEJORA CONTINUA</span></div><div className="experience-row"><div className="exp-date">EXPERIENCIA PROFESIONAL</div><div className="exp-main"><h3>Coordinadora de Proyecto · Área de Testing</h3><p className="exp-sub">QA Tester · Analista Funcional · +3 años de experiencia</p><p>Actualmente me desempeño como coordinadora de proyecto dentro del área de Testing, organizando y priorizando actividades, distribuyendo tareas, acompañando al equipo y realizando seguimiento de avances, objetivos y entregables. También participo en análisis funcional, diseño y ejecución de pruebas, seguimiento de incidencias y validación de funcionalidades, articulando con equipos de análisis y desarrollo.</p><div className="tag-row"><span>Coordinación de proyecto</span><span>Liderazgo QA</span><span>Scrum</span><span>TFS</span><span>Testing</span><span>Análisis funcional</span></div></div></div><div className="experience-row"><div className="exp-date">EXPERIENCIA ACADÉMICA</div><div className="exp-main"><h3>Scrum Master <span>/</span> PsyFind</h3><p className="exp-sub">Tesis de Ingeniería en Sistemas de Información · UTN</p><p>Desempeñé el rol de Scrum Master durante el desarrollo de PsyFind, proyecto de tesis de Ingeniería en Sistemas de Información. Acompañé la organización del trabajo del equipo, la planificación y el seguimiento de actividades, facilitando la coordinación y el avance del proyecto bajo el marco de trabajo Scrum.</p><div className="tag-row"><span>Scrum Master</span><span>Agile</span><span>Planificación</span><span>Facilitación</span><span>Coordinación de equipo</span></div></div></div></div></section>

      <section className="section wrap" id="projects"><div className="section-label"><span>03 / PROYECTOS SELECCIONADOS</span><span>TRABAJO + PROYECTOS ACADÉMICOS</span></div><div className="projects-heading"><h2>Del problema<br/>a la <em>solución.</em></h2><p>Una selección de experiencias y proyectos que muestran distintas dimensiones de mi trabajo.</p></div><div className="filters">{['Todos','QA & Testing','Análisis funcional','Desarrollo'].map(f=><button className={active===f?'filter active':'filter'} key={f} onClick={()=>setActive(f)}>{f}</button>)}</div><div className="project-grid">{filtered.map((p)=>{const i=projects.indexOf(p);return <button className="project-card" key={p.name} onClick={()=>setSelected(i)}><div className="project-top"><span>{p.n} / CASE STUDY</span><span className={p.color==='green'?'project-dot green':'project-dot'}></span></div><div className="project-visual"><div className={'visual-lines '+p.color}><span></span><span></span><span></span><span></span></div><div className="visual-code">{p.name.toUpperCase().replaceAll(' ','_')}<b>↗</b></div></div><div className="project-type">{p.type}</div><h3>{p.name}<ArrowUpRight size={18}/></h3><p>{p.desc}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div></button>})}</div></section>


      <section className="section wrap games-section" id="games">
        <div className="section-label"><span>04 / DESARROLLO DE VIDEOJUEGOS</span><span>PYTHON · PYGAME</span></div>
        <div className="games-panel">
          <div className="games-copy">
            <p className="eyebrow"><span className="pulse"></span> GAME DEVELOPMENT / PERSONAL PROJECT</p>
            <h2>MiloX<span>.</span></h2>
            <p className="games-subtitle">Un videojuego 2D desarrollado con Python y Pygame.</p>
            <p className="games-description">MiloX es un juego de acción con exploración por salas, enemigos, jefes y distintos niveles de dificultad. Incluye animaciones del personaje, disparos, objetos especiales y pantallas de pausa, victoria y derrota.</p>
            <div className="tag-row"><span>Python</span><span>Pygame</span><span>Game loop</span><span>Sprites & animations</span><span>Collision detection</span></div>
            <a className="button game-download" href="/MiloX.rar" download><FileText size={16}/> Descargar MiloX (.RAR) <ArrowDownRight size={16}/></a>
            <p className="game-instructions">Descargá el archivo, extraé su contenido y ejecutá <strong>MiloX.exe</strong> desde la carpeta del juego. En Windows puede aparecer una advertencia al abrir ejecutables descargados.</p>
          </div>
          <div className="game-preview">
            <div className="game-window-top"><span><i></i><i></i><i></i></span><b>MILOX.EXE</b><span>2D ACTION GAME</span></div>
            <div className="game-screen">
              <div className="game-stars"></div>
              <div className="game-title-art">MILO<span>X</span></div>
              <div className="game-pixel-line">LEVEL 01 — READY</div>
              <div className="game-pixel-player">◆</div>
              <div className="game-pixel-enemy">✦</div>
              <div className="game-hud"><span>HP ♥ ♥ ♥</span><span>LVL 1 / 4</span></div>
            </div>
            <div className="game-window-bottom"><span>BUILT WITH PYTHON + PYGAME</span><span>PLAY / EXPLORE / SURVIVE</span></div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills"><div className="wrap"><div className="section-label"><span>05 / STACK & HERRAMIENTAS</span><span>APRENDER · APLICAR · MEJORAR</span></div><div className="skills-heading"><h2>Herramientas<br/>para <em>hacerlo bien.</em></h2><p>Un perfil que combina calidad, análisis y conocimientos técnicos para acompañar el ciclo de vida del software.</p></div><div className="skill-grid">{skills.map(s=><div className="skill-card" key={s.title}><div className={'skill-icon '+s.tone}><s.icon size={20}/></div><h3>{s.title}</h3><div className="skill-items">{s.items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div><p className="skill-note">* El stack refleja herramientas y tecnologías con las que trabajé o desarrollé proyectos. Podemos ajustar niveles y experiencia puntual en la versión final.</p></div></section>

      <section className="section wrap contact" id="contact"><div className="section-label"><span>06 / CONTACTO</span><span>¿TRABAJAMOS JUNTOS?</span></div><div className="contact-panel"><div><p className="eyebrow">LET'S BUILD SOMETHING BETTER</p><h2>Hagamos que<br/><em>las cosas funcionen.</em></h2><p className="contact-copy">Estoy abierta a conversar sobre oportunidades en QA, análisis funcional y desarrollo de software.</p><div className="contact-links"><a href="mailto:gmarandino22@gmail.com"><Mail size={17}/> gmarandino22@gmail.com <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/giovannamarandino/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div></div><div className="contact-side"><div className="contact-symbol">GM<span>↗</span></div><p>CÓRDOBA, ARGENTINA<br/>DISPONIBLE PARA OPORTUNIDADES REMOTAS</p><a className="button secondary" href="/CV_Giovanna_Marandino__.pdf" target="_blank"><FileText size={16}/> Descargar CV</a></div></div></section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">GM</span><span>GIOVANNA<span className="muted">.DEV</span></span></a><span>DISEÑADO Y DESARROLLADO CON INTENCIÓN.</span><a href="#home">VOLVER ARRIBA ↑</a><span>© 2026</span></footer>
    {selected!==null&&<div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="project-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)}><X/></button><span className="eyebrow">CASE STUDY / {projects[selected].n}</span><h2>{projects[selected].name}</h2><p className="project-type">{projects[selected].type}</p><p>{projects[selected].detail}</p><div className="tag-row">{projects[selected].tags.map(t=><span key={t}>{t}</span>)}</div><p className="modal-hint">Próximo paso: sumar tu rol exacto, herramientas utilizadas, alcance y resultados que puedas compartir públicamente.</p></div></div>}
  </div>
}
export default App
