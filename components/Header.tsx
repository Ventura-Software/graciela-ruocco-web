'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Por Qué Elegirnos', href: '#porque' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        zIndex: 50,
        background: scrolled || open ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.0)',
        backdropFilter: scrolled || open ? 'saturate(1.4) blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled || open ? 'saturate(1.4) blur(10px)' : 'none',
        borderBottom: scrolled || open ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background .25s ease, border-color .25s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <a href="#top" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: '-0.02em',
              color: scrolled || open ? 'var(--navy)' : '#fff',
            }}
          >
            Graciela Ruocco
          </span>
          <span
            style={{
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginTop: 4,
              color: scrolled || open ? 'var(--slate)' : 'rgba(255,255,255,0.7)',
            }}
          >
            &nbsp;&amp;&nbsp;Asociados
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: 36 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.03em',
                color: scrolled ? 'var(--slate)' : 'rgba(255,255,255,0.82)',
                transition: 'color .2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? 'var(--navy)' : '#fff')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? 'var(--slate)'
                  : 'rgba(255,255,255,0.82)')
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: '0.02em',
              padding: '12px 22px',
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
            Solicitar Consulta
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            padding: 8,
            color: scrolled || open ? 'var(--navy)' : '#fff',
            cursor: 'pointer',
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mounted &&
        createPortal(
          <div
            className={`drawer ${open ? 'open' : ''}`}
            aria-hidden={!open}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 60,
              pointerEvents: open ? 'auto' : 'none',
            }}
          >
            <div
              className="drawer-overlay"
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(10,22,40,0.5)',
                opacity: open ? 1 : 0,
                transition: 'opacity .25s ease',
                zIndex: 60,
              }}
            />
            <div
              className="drawer-panel"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(320px, 86vw)',
                background: '#fff',
                padding: '80px 28px 32px',
                transform: open ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform .28s cubic-bezier(.4,0,.2,1)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-8px 0 30px -10px rgba(10,22,40,0.2)',
                zIndex: 61,
              }}
            >
              <button
                className="drawer-close"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--navy)',
                  padding: 8,
                  cursor: 'pointer',
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <a
                href="#top"
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  lineHeight: 1,
                  marginBottom: 12,
                  border: 'none',
                  padding: '0 0 20px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: '-0.02em',
                    color: 'var(--navy)',
                  }}
                >
                  Graciela Ruocco
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    marginTop: 4,
                    color: 'var(--slate)',
                  }}
                >
                  &amp; Asociados
                </span>
              </a>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '16px 0',
                    fontSize: 18,
                    fontWeight: 500,
                    color: 'var(--navy)',
                    borderBottom: '1px solid var(--line-soft)',
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                style={{
                  marginTop: 24,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  letterSpacing: '0.02em',
                  padding: '16px 28px',
                  borderRadius: 2,
                  border: '1px solid var(--gold)',
                  background: 'var(--gold)',
                  color: 'var(--navy)',
                }}
              >
                Solicitar Consulta
              </a>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Header;
