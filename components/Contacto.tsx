'use client';

import React, { useState } from 'react';
import { IconMail, IconPhone, IconPin, IconClock, IconSend, IconCheck } from './Icons';

const Contacto: React.FC = () => {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    area: 'Derecho Administrativo',
    mensaje: '',
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err: { [key: string]: string } = {};
    if (!form.nombre.trim()) err.nombre = 'Requerido';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = 'Email inválido';
    if (!form.mensaje.trim()) err.mensaje = 'Requerido';
    setErrors(err);

    if (Object.keys(err).length === 0) {
      setLoading(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setSent(true);
        } else {
          const data = await response.json();
          setErrors({ general: data.error || 'Error al enviar el mensaje' });
        }
      } catch (error) {
        setErrors({ general: 'Error de conexión. Por favor intente nuevamente.' });
      } finally {
        setLoading(false);
      }
    }
  };

  const field = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value }),
    style: {
      width: '100%',
      padding: '14px 16px',
      background: '#fff',
      border: `1px solid ${errors[k] ? '#DC2626' : 'var(--line)'}`,
      borderRadius: 2,
      color: 'var(--ink)',
      outline: 'none',
      transition: 'border-color .15s',
      fontSize: 15,
      fontFamily: 'inherit',
    } as React.CSSProperties,
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      (e.target.style.borderColor = 'var(--navy)'),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      (e.target.style.borderColor = errors[k] ? '#DC2626' : 'var(--line)'),
  });

  const label: React.CSSProperties = {
    display: 'block',
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--navy)',
    fontWeight: 500,
    marginBottom: 8,
  };

  return (
    <section id="contacto" className="section-pad" style={{ background: 'var(--cream)', padding: '128px 0' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div
          className="grid-contacto"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 64,
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
              Contacto
            </div>
            <h2
              style={{
                margin: '24px 0 20px',
                fontFamily: 'var(--font-serif)',
                fontSize: 44,
                fontWeight: 700,
                color: 'var(--navy)',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
              }}
            >
              Comencemos a{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  color: 'var(--gold-deep)',
                  fontWeight: 500,
                }}
              >
                Trabajar Juntos
              </span>
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(14px, 1.6vw, 16px)',
                lineHeight: 1.7,
                color: 'var(--slate)',
                maxWidth: 440,
              }}
            >
              ¿Su empresa enfrenta un desafío legal en materia administrativa o previsional?
              Contáctenos y uno de nuestros especialistas se comunicará con usted a la
              brevedad.
            </p>

            <div
              style={{
                marginTop: 40,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              {[
                { icon: IconMail, l: 'Email', v: 'contacto@ruoccoasociados.com.uy' },
                { icon: IconPhone, l: 'Teléfono', v: '+598 2900 1234' },
                { icon: IconPin, l: 'Ubicación', v: 'Montevideo, Uruguay' },
                { icon: IconClock, l: 'Horario', v: 'Lun a Vie · 9:00 – 18:00' },
              ].map((c, i) => {
                const Ic = c.icon;
                return (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        background: '#fff',
                        border: '1px solid var(--line)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--navy)',
                      }}
                    >
                      <Ic size={18} stroke={1.5} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--slate-2)',
                          fontWeight: 500,
                        }}
                      >
                        {c.l}
                      </div>
                      <div
                        style={{
                          fontSize: 15,
                          color: 'var(--navy)',
                          fontWeight: 500,
                          marginTop: 2,
                        }}
                      >
                        {c.v}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={submit}
            className="form-card"
            style={{
              background: '#fff',
              borderRadius: 4,
              border: '1px solid var(--line)',
              position: 'relative',
              padding: 40,
            }}
          >
            {sent ? (
              <div style={{ padding: '60px 20px', textAlign: 'center' }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 999,
                    background: 'var(--cream)',
                    border: '1px solid var(--gold)',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-deep)',
                  }}
                >
                  <IconCheck size={28} stroke={1.8} />
                </div>
                <h3
                  style={{
                    margin: '24px 0 12px',
                    fontFamily: 'var(--font-serif)',
                    fontSize: 26,
                    fontWeight: 700,
                    color: 'var(--navy)',
                  }}
                >
                  Mensaje enviado
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: 'var(--slate)',
                    maxWidth: 380,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  Hemos recibido su consulta. Uno de nuestros especialistas se comunicará con
                  usted dentro de las próximas 24 horas hábiles.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm({
                      nombre: '',
                      empresa: '',
                      email: '',
                      telefono: '',
                      area: 'Derecho Administrativo',
                      mensaje: '',
                    });
                  }}
                  style={{
                    marginTop: 24,
                    background: 'none',
                    border: 'none',
                    color: 'var(--gold-deep)',
                    fontWeight: 500,
                    fontSize: 14,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gold-deep)')}
                >
                  Enviar otra consulta →
                </button>
              </div>
            ) : (
              <>
                <div
                  className="grid-form"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 20,
                  }}
                >
                  <div>
                    <label style={label}>Nombre completo *</label>
                    <input {...field('nombre')} placeholder="Su nombre" />
                  </div>
                  <div>
                    <label style={label}>Empresa</label>
                    <input {...field('empresa')} placeholder="Nombre de su empresa" />
                  </div>
                  <div>
                    <label style={label}>Email *</label>
                    <input {...field('email')} type="email" placeholder="email@empresa.com" />
                  </div>
                  <div>
                    <label style={label}>Teléfono</label>
                    <input {...field('telefono')} placeholder="+598 ..." />
                  </div>
                  <div data-span2 style={{ gridColumn: 'span 2' }}>
                    <label style={label}>Área de consulta</label>
                    <select {...field('area')}>
                      <option>Derecho Administrativo</option>
                      <option>Previsión Social</option>
                      <option>Escribanía</option>
                      <option>Consultoría Legal Permanente</option>
                      <option>Otra consulta</option>
                    </select>
                  </div>
                  <div data-span2 style={{ gridColumn: 'span 2' }}>
                    <label style={label}>Mensaje *</label>
                    <textarea
                      {...field('mensaje')}
                      rows={5}
                      placeholder="Cuéntenos brevemente su consulta..."
                      style={{ ...field('mensaje').style, resize: 'vertical' }}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: -9999 }}
                />

                {errors.general && (
                  <div
                    style={{
                      marginTop: 20,
                      padding: '12px 16px',
                      background: '#FEE2E2',
                      border: '1px solid #DC2626',
                      borderRadius: 4,
                      color: '#DC2626',
                      fontSize: 14,
                      textAlign: 'center',
                    }}
                  >
                    {errors.general}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-dark form-cta"
                  style={{
                    marginTop: 24,
                    width: '100%',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 8,
                    fontWeight: 500,
                    fontSize: 14,
                    letterSpacing: '0.02em',
                    padding: '18px 28px',
                    borderRadius: 2,
                    border: '1px solid var(--navy)',
                    background: loading ? '#6B7280' : 'var(--navy)',
                    color: '#fff',
                    transition: 'all .18s ease',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) e.currentTarget.style.background = '#05111F';
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) e.currentTarget.style.background = 'var(--navy)';
                  }}
                >
                  {loading ? 'Enviando...' : 'Enviar Consulta'}{' '}
                  {!loading && <IconSend size={16} stroke={1.6} />}
                </button>
                <p
                  style={{
                    margin: '16px 0 0',
                    fontSize: 12,
                    color: 'var(--slate-2)',
                    textAlign: 'center',
                    lineHeight: 1.5,
                  }}
                >
                  Al enviar, acepta nuestra política de tratamiento de datos personales.
                  Respuesta garantizada dentro de 24 h hábiles.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
