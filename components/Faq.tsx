'use client';

import React, { useState } from 'react';
import { IconChevronDown } from './Icons';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: '¿Cuáles son las obligaciones previsionales de una empresa en Uruguay?',
    a: 'Las empresas en Uruguay deben realizar aportes al BPS (Banco de Previsión Social) sobre las remuneraciones de sus trabajadores, incluyendo aportes patronales, personales y contribuciones especiales. Asesoramos en el correcto cumplimiento y optimización de esta carga.',
  },
  {
    q: '¿Qué servicios de escribanía necesita una empresa habitualmente?',
    a: 'Las empresas requieren servicios notariales para la constitución de sociedades, reformas de estatutos, poderes, compraventas, contratos y certificaciones de firma. Cubrimos toda la documentación corporativa necesaria.',
  },
  {
    q: '¿Cómo puedo impugnar una resolución administrativa que afecta a mi empresa?',
    a: 'En Uruguay existen recursos administrativos (revocación, jerárquico, de anulación) y la acción de nulidad ante el TCA. Evaluamos cada caso y diseñamos la estrategia legal más adecuada según plazos y probabilidades.',
  },
  {
    q: '¿Cuándo conviene contratar una consultoría legal permanente para mi empresa?',
    a: 'Cuando su empresa tiene operaciones regulares con el Estado, empleados bajo distintos regímenes, contratos frecuentes o riesgos regulatorios, una consultoría permanente previene conflictos y reduce costos a largo plazo.',
  },
  {
    q: '¿Cómo es el proceso para comenzar a trabajar con el estudio?',
    a: 'El proceso es simple: complete el formulario de contacto o escríbanos por email. Coordinamos una reunión inicial sin costo para entender su necesidad, y luego presentamos una propuesta de trabajo clara y acotada.',
  },
];

const Faq: React.FC = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad" style={{ background: '#fff', padding: '128px 0' }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: 'var(--cream-2)',
              color: 'var(--navy)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              borderRadius: 2,
            }}
          >
            FAQ
          </div>
          <h2
            style={{
              margin: '24px auto 16px',
              fontFamily: 'var(--font-serif)',
              fontSize: 48,
              fontWeight: 700,
              color: 'var(--navy)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
            }}
          >
            Preguntas{' '}
            <span
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-deep)',
                fontWeight: 500,
              }}
            >
              Frecuentes
            </span>
          </h2>
          <p
            style={{
              maxWidth: 560,
              margin: '0 auto',
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              lineHeight: 1.7,
              color: 'var(--slate)',
            }}
          >
            Respuestas claras a las consultas más comunes que recibimos de empresas en
            Uruguay.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--line)' }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="faq-q"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '28px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    textAlign: 'left',
                    color: 'var(--navy)',
                    cursor: 'pointer',
                    fontSize: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 999,
                      flexShrink: 0,
                      border: '1px solid var(--line)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? 'var(--gold-deep)' : 'var(--slate)',
                      background: isOpen ? 'var(--cream)' : '#fff',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'all .22s ease',
                    }}
                  >
                    <IconChevronDown size={16} stroke={1.5} />
                  </span>
                </button>
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 400 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height .3s ease, opacity .25s ease',
                  }}
                >
                  <p
                    className="faq-a"
                    style={{
                      margin: 0,
                      padding: '0 60px 28px 4px',
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: 'var(--slate)',
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="faq-cta"
          style={{
            marginTop: 48,
            background: 'var(--cream)',
            borderRadius: 4,
            padding: '32px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(17px, 2vw, 20px)',
                fontWeight: 600,
                color: 'var(--navy)',
              }}
            >
              ¿Su consulta no aparece aquí?
            </div>
            <div style={{ marginTop: 4, fontSize: 14, color: 'var(--slate)' }}>
              Contáctenos directamente y le responderemos a la brevedad.
            </div>
          </div>
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
              border: '1px solid var(--navy)',
              background: 'var(--navy)',
              color: '#fff',
              transition: 'all .18s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#05111F')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--navy)')}
          >
            Hacer una Consulta →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
