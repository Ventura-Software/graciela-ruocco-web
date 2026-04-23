'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: 760,
        height: '100vh',
        maxHeight: 920,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        paddingTop: 80,
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
        }}
      >
        <Image
          src="/hero-office.jpg"
          alt="Office background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          quality={90}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.72) 50%, rgba(10,22,40,0.88) 100%)',
        }}
      />

      {/* Subtle vertical rule */}
      <div
        className="hide-mobile"
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 1,
          background:
            'linear-gradient(to bottom, transparent, rgba(201,169,110,0.35) 30%, rgba(201,169,110,0.35) 70%, transparent)',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          textAlign: 'center',
          maxWidth: 1000,
          zIndex: 2,
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* Pill */}
        <div
          className="hero-pill-text-wrap"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 18px',
            border: '1px solid rgba(255,255,255,0.22)',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: 'var(--gold)',
              borderRadius: 999,
            }}
          />
          <span
            className="hero-pill-text"
            style={{
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.88)',
            }}
          >
            Estudio Jurídico · Montevideo, Uruguay
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: 'clamp(42px, 5.6vw, 76px)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
          }}
        >
          Asesoramiento Legal{' '}
          <span
            style={{
              fontStyle: 'italic',
              color: 'var(--gold)',
              fontWeight: 500,
            }}
          >
            Especializado
          </span>
          <br />
          para Empresas
        </h1>

        <p
          style={{
            marginTop: 24,
            maxWidth: 680,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 'clamp(15px, 1.7vw, 18px)',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.8)',
            fontWeight: 300,
          }}
        >
          Expertos en Derecho Administrativo y Previsión Social. Acompañamos a las empresas
          uruguayas en cada desafío legal con rigor académico y atención personalizada.
        </p>

        <div
          className="hero-buttons"
          style={{
            marginTop: 36,
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: '0.02em',
              padding: '16px 28px',
              borderRadius: 2,
              border: '1px solid var(--gold)',
              background: 'var(--gold)',
              color: 'var(--navy)',
              transition: 'all .18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold-deep)';
              e.currentTarget.style.borderColor = 'var(--gold-deep)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--gold)';
              e.currentTarget.style.borderColor = 'var(--gold)';
            }}
          >
            Solicitar Consulta →
          </a>
          <a
            href="#servicios"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: '0.02em',
              padding: '16px 28px',
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.35)',
              background: 'transparent',
              color: '#fff',
              transition: 'all .18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
            }}
          >
            Ver Servicios
          </a>
        </div>

        {/* Stat strip */}
        <div
          className="stat-strip"
          style={{
            marginTop: 72,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            borderTop: '1px solid rgba(255,255,255,0.15)',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          {[
            { v: '20+', l: 'Años de Experiencia' },
            { v: '5', l: 'Especialistas en el Equipo' },
            { v: '100%', l: 'Enfoque Empresarial' },
          ].map((s, i) => (
            <div
              key={i}
              className="stat-cell"
              style={{
                padding: '24px 20px',
                borderRight:
                  i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 36,
                  fontWeight: 700,
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.65)',
                  textAlign: 'center',
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
