'use client';

import React from 'react';

interface Reason {
  n: string;
  title: string;
  desc: string;
}

const REASONS: Reason[] = [
  {
    n: '01',
    title: 'Especialización en las Áreas Clave',
    desc: 'Enfocados exclusivamente en Derecho Administrativo, Previsión Social y Servicios de Escribanía para empresas. No somos generalistas: somos especialistas.',
  },
  {
    n: '02',
    title: 'Atención Personalizada',
    desc: 'Cada empresa tiene necesidades únicas. Trabajamos de cerca con cada cliente, comprendiendo su realidad antes de proponer una estrategia legal.',
  },
  {
    n: '03',
    title: 'Trayectoria Académica y Profesional',
    desc: 'Nuestro equipo combina la rigurosidad académica con décadas de experiencia real, incluyendo cátedra universitaria en Derecho Administrativo.',
  },
  {
    n: '04',
    title: 'Comunicación Clara con el Cliente',
    desc: 'Traducimos el lenguaje jurídico complejo en información útil. Usted siempre sabrá qué está pasando con su caso y por qué.',
  },
];

const ReasonCard: React.FC<{ r: Reason }> = ({ r }) => (
  <div
    className="grid-reason reason-row"
    style={{
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 32,
      alignItems: 'start',
      padding: '36px 0',
      borderTop: '1px solid rgba(255,255,255,0.12)',
    }}
  >
    <div
      className="serif reason-n"
      style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 56,
        fontWeight: 700,
        color: 'var(--gold)',
        lineHeight: 1,
        fontStyle: 'italic',
      }}
    >
      {r.n}
    </div>
    <div>
      <h3
        className="serif reason-title"
        style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontSize: 26,
          fontWeight: 600,
          color: '#fff',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}
      >
        {r.title}
      </h3>
      <p
        className="reason-desc"
        style={{
          margin: '14px 0 0',
          fontSize: 15,
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.68)',
          maxWidth: 640,
        }}
      >
        {r.desc}
      </p>
    </div>
  </div>
);

const PorQue: React.FC = () => (
  <section
    id="porque"
    className="section-pad"
    style={{
      background: 'var(--navy)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      padding: '128px 0',
    }}
  >
    {/* Decorative rings */}
    <div
      aria-hidden
      className="porque-ring"
      style={{
        position: 'absolute',
        top: -100,
        right: -120,
        width: 400,
        height: 400,
        borderRadius: 999,
        border: '1px solid rgba(201,169,110,0.15)',
      }}
    />
    <div
      aria-hidden
      className="porque-ring"
      style={{
        position: 'absolute',
        top: -60,
        right: -80,
        width: 320,
        height: 320,
        borderRadius: 999,
        border: '1px solid rgba(201,169,110,0.1)',
      }}
    />
    <div
      aria-hidden
      className="porque-ring"
      style={{
        position: 'absolute',
        bottom: -140,
        left: -140,
        width: 460,
        height: 460,
        borderRadius: 999,
        border: '1px solid rgba(201,169,110,0.08)',
      }}
    />

    <div className="container" style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            border: '1px solid rgba(201,169,110,0.4)',
            color: 'var(--gold)',
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 500,
            borderRadius: 2,
          }}
        >
          Por Qué Elegirnos
        </div>
        <h2
          style={{
            margin: '24px auto 16px',
            fontFamily: 'var(--font-serif)',
            fontSize: 48,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            maxWidth: 820,
          }}
        >
          Por Qué Confiar en{' '}
          <span
            style={{
              fontStyle: 'italic',
              color: 'var(--gold)',
              fontWeight: 500,
            }}
          >
            Nosotros
          </span>
        </h2>
        <p
          style={{
            maxWidth: 640,
            margin: '0 auto',
            fontSize: 'clamp(14px, 1.6vw, 16px)',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Más de dos décadas acompañando a las empresas uruguayas, basadas en resultados
          concretos y transparencia total.
        </p>
      </div>

      <div
        style={{
          maxWidth: 980,
          margin: '0 auto',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {REASONS.map((r, i) => (
          <ReasonCard key={i} r={r} />
        ))}
      </div>
    </div>
  </section>
);

export default PorQue;
