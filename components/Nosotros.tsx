'use client';

import React from 'react';
import Image from 'next/image';
import { IconAcademic, IconScale, IconHandshake } from './Icons';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  img: string;
  lead?: boolean;
}

const TEAM: TeamMember[] = [
  {
    name: 'Graciela Ruocco',
    role: 'Catedrática de Derecho Administrativo',
    bio: 'Profesora Titular de Posgrado de Derecho Administrativo de la Facultad de Derecho de la Universidad Católica del Uruguay. Profesora Titular de Derecho Público de la Facultad de Derecho de la Universidad de la República. Directora del Instituto de Derecho Administrativo de la misma universidad (2021-2023). Máster en Derecho con énfasis en Derecho Constitucional y Derechos Humanos. Miembro del Foro Iberoamericano de Derecho Administrativo, de la Asociación de Derecho Público del Mercosur, de la Red Internacional de Bienes Públicos, del Instituto Internacional de Derecho Administrativo y del Centro Iberoamericano de Estudios de Derecho Público y Tecnología. Abogada I de la Dirección Jurídica del Poder Legislativo (1994-2019).',
    img: '/graciela_ruocco.jpg',
    lead: true,
  },
  {
    name: 'Victoria Frigerio Ruocco',
    role: 'Abogada y Escribana',
    bio: 'Doble titulación en Derecho y Escribanía. Especialista en documentación corporativa, contratos y trámites notariales para empresas.',
    img: '/victoria_frigerio_ruocco.jpg',
  },
  {
    name: 'Adriana Laurito',
    role: 'Abogada',
    bio: 'Abogada con sólida formación en derecho público y privado. Enfocada en la atención integral de clientes corporativos y resolución de conflictos.',
    img: '/adriana_laurito.jpeg',
  },
  {
    name: 'Valentina Frigerio Ruocco',
    role: 'Licenciada en Comunicación',
    bio: 'Especialista en comunicación institucional y estratégica. Garantiza que la relación con cada cliente sea clara, fluida y efectiva.',
    img: '/valentina_frigerio.jpeg',
  },
];

const Portrait: React.FC<{ src: string; large?: boolean }> = ({ src, large }) => {
  const size = large ? 96 : 72;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        border: '2px solid rgba(201,169,110,0.35)',
        flexShrink: 0,
        boxShadow: '0 2px 10px -2px rgba(10,22,40,0.15)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Image
        src={src}
        alt="Team member"
        fill
        style={{ objectFit: 'cover' }}
        sizes={`${size}px`}
      />
    </div>
  );
};

const TeamCard: React.FC<{ m: TeamMember }> = ({ m }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className="team-card"
      style={{
        background: '#fff',
        padding: 28,
        borderRadius: 4,
        border: hover ? '1px solid rgba(201,169,110,0.55)' : '1px solid var(--line)',
        display: 'flex',
        gap: 20,
        alignItems: 'flex-start',
        transition: 'border-color .2s, transform .2s, box-shadow .2s',
        height: '100%',
        boxShadow: hover ? '0 14px 30px -18px rgba(10,22,40,0.18)' : 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Portrait src={m.img} large={m.lead} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--font-serif)',
            fontSize: m.lead ? 22 : 18,
            fontWeight: 700,
            color: 'var(--navy)',
            letterSpacing: '-0.01em',
          }}
        >
          {m.name}
        </h3>
        <div
          style={{
            marginTop: 6,
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--gold-deep)',
            fontWeight: 500,
          }}
        >
          {m.role}
        </div>
        <p
          style={{
            marginTop: 14,
            marginBottom: 0,
            fontSize: 14,
            lineHeight: 1.65,
            color: 'var(--slate)',
          }}
        >
          {m.bio}
        </p>
      </div>
    </div>
  );
};

const Nosotros: React.FC = () => (
  <section id="nosotros" className="section-pad" style={{ background: 'var(--cream)', padding: '128px 0' }}>
    <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
      <div
        className="grid-nosotros-head"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 80,
          alignItems: 'start',
          marginBottom: 64,
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: 'var(--navy)',
              color: '#fff',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              borderRadius: 2,
            }}
          >
            Nuestro Equipo
          </div>
          <h2
            style={{
              margin: '24px 0 0',
              fontFamily: 'var(--font-serif)',
              fontSize: 48,
              fontWeight: 700,
              color: 'var(--navy)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Experiencia y Profesionalismo al Servicio de{' '}
            <span
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-deep)',
                fontWeight: 500,
              }}
            >
              Cada Cliente
            </span>
          </h2>
        </div>
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              lineHeight: 1.7,
              color: 'var(--slate)',
            }}
          >
            Un equipo multidisciplinario con sólida trayectoria académica y profesional,
            comprometido con brindar soluciones legales claras, estratégicas y orientadas a
            los objetivos de cada cliente.
          </p>
          <div
            className="nosotros-badges"
            style={{
              marginTop: 28,
              display: 'flex',
              gap: 32,
            }}
          >
            {[
              { icon: IconAcademic, l: 'Rigor Académico' },
              { icon: IconScale, l: 'Visión Estratégica' },
              { icon: IconHandshake, l: 'Trato Cercano' },
            ].map((f, i) => {
              const Ic = f.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    color: 'var(--navy)',
                  }}
                >
                  <Ic size={18} stroke={1.3} style={{ color: 'var(--gold-deep)' }} />
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{f.l}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="grid-team"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 20,
        }}
      >
        <div className="team-lead" style={{ gridColumn: 'span 6' }}>
          <TeamCard m={TEAM[0]} />
        </div>
        <div className="team-half" style={{ gridColumn: 'span 2' }}>
          <TeamCard m={TEAM[1]} />
        </div>
        <div className="team-half" style={{ gridColumn: 'span 2' }}>
          <TeamCard m={TEAM[2]} />
        </div>
        <div className="team-half" style={{ gridColumn: 'span 2' }}>
          <TeamCard m={TEAM[3]} />
        </div>
      </div>
    </div>
  </section>
);

export default Nosotros;
