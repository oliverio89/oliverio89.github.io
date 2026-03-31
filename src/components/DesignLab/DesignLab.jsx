import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiEye, FiCpu } from 'react-icons/fi';
import './DesignLab.css';

/* ── SLIDES ──────────────────────────────────────────────────────── */
const SLIDES = [
  {
    id: 'color',
    label: 'Color Psychology',
    stat: '+80% de las decisiones de compra se basan en el color',
    source: 'Instituto de Psicología del Color, 2022',
    title: 'El cerebro decide en 90ms',
    body: 'Antes de leer una palabra, tu sistema límbico ya procesó el color. El violeta-índigo activa las regiones asociadas a creatividad, confianza e innovación tecnológica. El contraste frío-cálido genera tensión visual que mantiene el ojo en movimiento.',
    Demo: ColorDemo,
  },
  {
    id: 'depth',
    label: 'Depth & Layers',
    stat: 'Las interfaces con profundidad reducen el error cognitivo un 34%',
    source: 'Nielsen Norman Group, 2021',
    title: 'El ojo busca el espacio',
    body: '500 millones de años de evolución han entrenado al cerebro para interpretar profundidad desde sombras y transparencias. El glassmorphism explota esta tendencia biológica: el blur simula material real, y el cerebro lo clasifica como "premium" de forma automática.',
    Demo: DepthDemo,
  },
  {
    id: 'motion',
    label: 'Biological Motion',
    stat: 'El movimiento captura la atención 5× más rápido que el contenido estático',
    source: 'MIT Media Lab, 2019',
    title: 'Las neuronas espejo se activan',
    body: 'El sistema nervioso primitivo no distingue entre movimiento real y animado. Micro-interacciones fluidas liberan dopamina porque el cerebro anticipa el resultado antes de que ocurra. La clave: animaciones bajo 300ms parecen instantáneas; sobre 500ms se perciben como lentas.',
    Demo: MotionDemo,
  },
  {
    id: 'gestalt',
    label: 'Gestalt & Pattern',
    stat: 'El cerebro procesa patrones visuales 60.000× más rápido que texto',
    source: 'MIT Press — Visual Cognition, 2020',
    title: 'Tu cerebro completa lo incompleto',
    body: 'La ley de cierre (Gestalt, 1923): el cerebro rellena automáticamente los huecos para crear formas completas. Interfaces que usan esta tendencia reducen la carga cognitiva y se perciben como más simples aunque sean igual de complejas.',
    Demo: GestaltDemo,
  },
  {
    id: 'space',
    label: 'Negative Space',
    stat: 'El 30% de espacio vacío aumenta la retención de información un 20%',
    source: 'Journal of Applied Psychology, 2023',
    title: 'El vacío tiene peso visual',
    body: 'El espacio negativo no es ausencia de diseño — es diseño. Estructura el flujo visual, da peso a los elementos y reduce la carga cognitiva. Las marcas más valiosas del mundo (Apple, Nike, Rolex) usan el espacio vacío como elemento principal de identidad.',
    Demo: SpaceDemo,
  },
  {
    id: 'hierarchy',
    label: 'Visual Hierarchy',
    stat: 'Una jerarquía clara aumenta la conversión hasta un 47%',
    source: 'Baymard Institute, 2022',
    title: 'El ojo sigue un mapa invisible',
    body: 'El patrón F y Z de lectura son movimientos oculares involuntarios. Una jerarquía bien diseñada dirige la mirada sin que el usuario lo perciba. Tamaño, peso, color y posición forman un sistema de señales que el cerebro obedece antes de procesar el contenido.',
    Demo: HierarchyDemo,
  },
];

const DURATION = 5500;

/* ── DEMO COMPONENTS ─────────────────────────────────────────────── */

function ColorDemo() {
  return (
    <div className="demo demo--color">
      <div className="demo-color__mesh" />
      <div className="demo-color__blob demo-color__blob--1" />
      <div className="demo-color__blob demo-color__blob--2" />
      <div className="demo-color__blob demo-color__blob--3" />
      <div className="demo-color__grid" />
      <div className="demo-color__label">
        <span style={{ color: '#818cf8' }}>Indigo</span> ·{' '}
        <span style={{ color: '#22d3ee' }}>Cyan</span> ·{' '}
        <span style={{ color: '#a78bfa' }}>Violet</span>
      </div>
    </div>
  );
}

function DepthDemo() {
  return (
    <div className="demo demo--depth">
      <div className="depth-card depth-card--back" />
      <div className="depth-card depth-card--mid">
        <div className="depth-card__line" />
        <div className="depth-card__line depth-card__line--short" />
      </div>
      <div className="depth-card depth-card--front">
        <div className="depth-card__dot" />
        <div className="depth-card__line" />
        <div className="depth-card__line depth-card__line--short" />
        <div className="depth-card__accent" />
      </div>
    </div>
  );
}

function MotionDemo() {
  return (
    <div className="demo demo--motion">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="motion-bar"
          style={{
            '--i': i,
            '--delay': `${i * 0.12}s`,
            '--height': `${30 + Math.sin(i * 0.9) * 20 + 20}%`,
          }}
        />
      ))}
      <div className="motion-ring motion-ring--1" />
      <div className="motion-ring motion-ring--2" />
      <div className="motion-pulse" />
    </div>
  );
}

function GestaltDemo() {
  const SHAPES = [
    { x: 30, y: 30, r: 38, dash: '60 180', offset: 0, delay: 0 },
    { x: 70, y: 30, r: 38, dash: '120 120', offset: 0, delay: 0.3 },
    { x: 50, y: 68, r: 38, dash: '90 150', offset: 0, delay: 0.6 },
  ];
  return (
    <div className="demo demo--gestalt">
      <svg viewBox="0 0 100 100" className="gestalt-svg">
        {SHAPES.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="none"
            stroke="rgba(99,102,241,0.35)"
            strokeWidth="0.8"
          />
        ))}
        {SHAPES.map((s, i) => (
          <circle
            key={`a-${i}`}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="none"
            stroke="#6366f1"
            strokeWidth="1.8"
            strokeDasharray={s.dash}
            strokeDashoffset={s.offset}
            className="gestalt-arc"
            style={{ animationDelay: `${s.delay}s` }}
          />
        ))}
        <polygon
          points="50,18 68,54 32,54"
          fill="rgba(99,102,241,0.08)"
          stroke="rgba(99,102,241,0.4)"
          strokeWidth="0.6"
        />
        <circle cx="50" cy="18" r="3" fill="#818cf8" opacity="0.9" />
        <circle cx="68" cy="54" r="3" fill="#22d3ee" opacity="0.9" />
        <circle cx="32" cy="54" r="3" fill="#a78bfa" opacity="0.9" />
      </svg>
      <p className="gestalt-label">¿Ves el triángulo?</p>
    </div>
  );
}

function SpaceDemo() {
  return (
    <div className="demo demo--space">
      <div className="space-content">
        <div className="space-word space-word--big">Silencio</div>
        <div className="space-rule" />
        <div className="space-word space-word--sm">es también diseño</div>
      </div>
      <div className="space-dot space-dot--1" />
      <div className="space-dot space-dot--2" />
    </div>
  );
}

function HierarchyDemo() {
  return (
    <div className="demo demo--hierarchy">
      <div className="hier-block hier-block--h1">
        <div className="hier-fill hier-fill--accent" style={{ width: '72%' }} />
      </div>
      <div className="hier-row">
        <div className="hier-block hier-block--badge">
          <div className="hier-fill hier-fill--cyan" style={{ width: '100%' }} />
        </div>
        <div className="hier-block hier-block--badge">
          <div className="hier-fill hier-fill--purple" style={{ width: '100%' }} />
        </div>
      </div>
      <div className="hier-block hier-block--h2">
        <div className="hier-fill" style={{ width: '58%' }} />
      </div>
      <div className="hier-block hier-block--p">
        <div className="hier-fill" style={{ width: '95%' }} />
      </div>
      <div className="hier-block hier-block--p">
        <div className="hier-fill" style={{ width: '80%' }} />
      </div>
      <div className="hier-block hier-block--p">
        <div className="hier-fill" style={{ width: '65%' }} />
      </div>
      <div className="hier-block hier-block--btn">
        <div className="hier-fill hier-fill--accent" style={{ width: '100%' }} />
      </div>
      <div className="hier-arrow hier-arrow--1" />
      <div className="hier-arrow hier-arrow--2" />
      <div className="hier-arrow hier-arrow--3" />
    </div>
  );
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────── */
export default function DesignLab() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const startRef = useRef(Date.now());

  const go = (next) => {
    setDirection(next > current ? 1 : -1);
    setCurrent((next + SLIDES.length) % SLIDES.length);
    setProgress(0);
    startRef.current = Date.now();
  };

  useEffect(() => {
    if (paused) return;

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        setDirection(1);
        setCurrent((c) => (c + 1) % SLIDES.length);
        setProgress(0);
        startRef.current = Date.now();
      }
    };

    timerRef.current = setInterval(tick, 30);
    return () => clearInterval(timerRef.current);
  }, [paused, current]);

  const slide = SLIDES[current];
  const Demo = slide.Demo;

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section className="section design-lab" id="design-lab">
      <div className="container">
        {/* Header */}
        <motion.div
          className="design-lab__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            <FiCpu size={13} />
            Diseño & Psicología Visual
          </span>
          <h2 className="section-title">
            Por qué <span className="gradient-text">este diseño</span>
            <br />
            funciona en tu cerebro.
          </h2>
          <p className="section-desc">
            Cada decisión visual tiene respaldo en neurociencia y psicología
            cognitiva. Aquí lo demuestro en vivo.
          </p>
        </motion.div>

        {/* Lab card */}
        <div
          className="lab-card"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Progress bar */}
          <div className="lab-progress">
            <motion.div
              className="lab-progress__fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="lab-card__inner">
            {/* Demo panel */}
            <div className="lab-demo-panel">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={slide.id}
                  className="lab-demo-wrap"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Demo />
                </motion.div>
              </AnimatePresence>

              {/* Label pill */}
              <motion.div
                key={`label-${slide.id}`}
                className="lab-label-pill"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <FiEye size={12} />
                {slide.label}
              </motion.div>
            </div>

            {/* Text panel */}
            <div className="lab-text-panel">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`text-${slide.id}`}
                  className="lab-text-content"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.05 }}
                >
                  <div className="lab-stat">
                    <span className="lab-stat__number">{slide.stat}</span>
                    <span className="lab-stat__source">— {slide.source}</span>
                  </div>

                  <h3 className="lab-text-title">{slide.title}</h3>
                  <p className="lab-text-body">{slide.body}</p>

                  {/* Dots nav */}
                  <div className="lab-dots">
                    {SLIDES.map((s, i) => (
                      <button
                        key={s.id}
                        className={`lab-dot${i === current ? ' lab-dot--active' : ''}`}
                        onClick={() => go(i)}
                        aria-label={s.label}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Arrow controls */}
          <button className="lab-arrow lab-arrow--prev" onClick={() => go(current - 1)}>
            <FiChevronLeft size={20} />
          </button>
          <button className="lab-arrow lab-arrow--next" onClick={() => go(current + 1)}>
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
