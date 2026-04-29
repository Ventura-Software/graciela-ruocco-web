"use client";

import React from "react";
import { IconMail } from "./Icons";

const Footer: React.FC = () => (
  <footer
    style={{
      background: "var(--navy)",
      color: "rgba(255,255,255,0.7)",
      padding: "72px 0 32px",
    }}
  >
    <div
      className="container"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}
    >
      <div
        className="grid-footer"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 56,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: 22,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Graciela Ruocco
          </div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: 4,
              color: "var(--gold)",
            }}
          >
            &amp; Asociados
          </div>
          <p
            style={{
              marginTop: 20,
              fontSize: 14,
              lineHeight: 1.7,
              maxWidth: 320,
            }}
          >
            Estudio jurídico especializado en Derecho Administrativo, Previsión
            Social y Escribanía. Asesoramiento para personas y empresas en
            Uruguay.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
            <a
              href="mailto:gruoccocosta@gmail.com"
              style={{
                width: 36,
                height: 36,
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.7)",
                transition: "color .15s, border-color .15s",
              }}
              aria-label="Email"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
              }}
            >
              <IconMail size={16} stroke={1.5} />
            </a>
          </div>
        </div>

        {[
          {
            title: "Servicios",
            links: [
              { l: "Derecho Administrativo", h: "#servicios" },
              { l: "Escribanía", h: "#servicios" },
              { l: "Previsión Social", h: "#servicios" },
              { l: "Consultoría Legal", h: "#servicios" },
            ],
          },
          {
            title: "Estudio",
            links: [
              { l: "Nuestro Equipo", h: "#nosotros" },
              { l: "Por Qué Elegirnos", h: "#porque" },
              { l: "Preguntas Frecuentes", h: "#faq" },
              { l: "Contacto", h: "#contacto" },
            ],
          },
          {
            title: "Contacto",
            links: [
              {
                l: "gruoccocosta@gmail.com",
                h: "mailto:gruoccocosta@gmail.com",
              },
              { l: "+598 2902 44 72", h: "tel:+59829024472" },
              {
                l: "Pza. Independencia 838/402, Montevideo",
                h: "https://maps.google.com/?q=Plaza+Independencia+838,+Montevideo,+Uruguay",
              },
            ],
          },
        ].map((col, i) => (
          <div key={i}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              {col.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {col.links.map((ln, j) => (
                <a
                  key={j}
                  href={ln.h}
                  target={ln.h.startsWith("http") ? "_blank" : undefined}
                  rel={
                    ln.h.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.7)",
                    transition: "color .15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                  }
                >
                  {ln.l}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="footer-bottom"
        style={{
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          © 2026 Graciela Ruocco & Asociados · Todos los derechos reservados.
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          Derecho Administrativo · Previsión Social · Escribanía · Uruguay
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
