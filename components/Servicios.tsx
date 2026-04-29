"use client";

import React from "react";
import {
  IconBuilding,
  IconShield,
  IconScroll,
  IconBriefcase,
  IconChevronRight,
} from "./Icons";

interface Service {
  icon: React.FC<any>;
  title: string;
  tag: string;
  desc: string;
  bullets: string[];
}

const SERVICES: Service[] = [
  {
    icon: IconBuilding,
    title: "Derecho Administrativo",
    tag: "Área Principal",
    desc: "Asesoramos a nuestros clientes en sus relaciones con la Administración Pública: contrataciones con el Estado, procedimientos administrativos, recursos, licitaciones y regulaciones sectoriales.",
    bullets: [
      "Contrataciones públicas",
      "Peticiones y recursos administrativos",
      "Intervención en el procedimiento administrativo en cualquier etapa",
      "Regulación sectorial",
      "Funcionarios públicos",
      "Actuación ante el Poder Judicial y el Sistema Contencioso Administrativo: amparo, inconstitucionalidad de la ley, acción anulatoria, acción reparatoria, expropiaciones, etc.",
    ],
  },
  {
    icon: IconScroll,
    title: "Servicios de Escribanía",
    tag: "Servicios Notariales",
    desc: "Redacción y certificación de contratos, estatutos societarios, poderes notariales y toda la documentación requerida.",
    bullets: [
      "Contratos",
      "Estatutos societarios",
      "Poderes y certificaciones",
      "Escrituras de compraventa de inmuebles y automotores",
      "Hipotecas, cesiones de contratos y cesiones de derechos hereditarios",
    ],
  },
  {
    icon: IconShield,
    title: "Asesoramiento en Previsión Social",
    tag: "Área Principal",
    desc: "Orientamos a nuestros clientes en el cumplimiento de sus obligaciones ante el BPS y organismos previsionales, incluyendo aportes, contingencias laborales y jubilaciones.",
    bullets: [
      "Aportes BPS",
      "Jubilaciones y pensiones",
      "Contingencias laborales",
    ],
  },
  {
    icon: IconBriefcase,
    title: "Consultoría Legal Personalizada",
    tag: "Acompañamiento Integral",
    desc: "Asesoramiento legal integral en las materias de especialidad del estudio, con atención personalizada y dedicación a cada caso.",
    bullets: ["Derecho Administrativo", "Previsión Social", "Escribanía"],
  },
];

const ServiceCard: React.FC<{ s: Service }> = ({ s }) => {
  const [hover, setHover] = React.useState(false);
  const Ic = s.icon;

  return (
    <div
      className="service-card"
      style={{
        position: "relative",
        background: "#fff",
        border: hover ? "1px solid var(--gold)" : "1px solid var(--line)",
        borderRadius: 2,
        padding: "36px 32px 32px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "all .22s ease",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 20px 40px -20px rgba(10,22,40,0.15)" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 48,
          height: 2,
          background: "var(--gold)",
        }}
      />
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 2,
          background: "var(--cream)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--navy)",
          marginBottom: 24,
        }}
      >
        <Ic size={24} stroke={1.4} />
      </div>
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold-deep)",
          fontWeight: 500,
          marginBottom: 10,
        }}
      >
        {s.tag}
      </div>
      <h3
        style={{
          margin: 0,
          fontFamily: "var(--font-serif)",
          fontSize: 22,
          fontWeight: 700,
          color: "var(--navy)",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
        }}
      >
        {s.title}
      </h3>
      <div style={{ flex: 1 }}>
        <p
          style={{
            margin: "16px 0 20px",
            fontSize: 14,
            lineHeight: 1.65,
            color: "var(--slate)",
          }}
        >
          {s.desc}
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {s.bullets.map((b, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                gap: 10,
                fontSize: 13,
                color: "var(--slate)",
              }}
            >
              <span
                style={{
                  minWidth: 14,
                  width: 14,
                  height: 1,
                  marginTop: 8,
                  background: "var(--gold)",
                }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#contacto"
        style={{
          color: "var(--gold-deep)",
          fontWeight: 500,
          fontSize: 14,
          letterSpacing: "0.04em",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-deep)")}
      >
        Consultar <IconChevronRight size={14} stroke={1.5} />
      </a>
    </div>
  );
};

const Servicios: React.FC = () => (
  <section
    id="servicios"
    className="section-pad"
    style={{ background: "#fff", padding: "128px 0" }}
  >
    <div
      className="container"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}
    >
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 14px",
            background: "var(--cream-2)",
            color: "var(--navy)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            borderRadius: 2,
          }}
        >
          Nuestros Servicios
        </div>
        <h2
          style={{
            margin: "24px auto 16px",
            fontFamily: "var(--font-serif)",
            fontSize: 48,
            fontWeight: 700,
            color: "var(--navy)",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            maxWidth: 820,
          }}
        >
          Soluciones Legales{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "var(--gold-deep)",
              fontWeight: 500,
            }}
          >
            Integrales
          </span>{" "}
          a su Medida
        </h2>
        <p
          style={{
            maxWidth: 620,
            margin: "0 auto",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            lineHeight: 1.7,
            color: "var(--slate)",
          }}
        >
          Combinamos experiencia técnica con un profundo conocimiento del
          sistema legal uruguayo, para ofrecer asesoramiento claro y efectivo a
          cada cliente.
        </p>
      </div>

      <div
        className="grid-services"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
        }}
      >
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} s={s} />
        ))}
      </div>

      <div style={{ marginTop: 48, textAlign: "center" }}>
        <a
          href="#contacto"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: "0.02em",
            padding: "16px 28px",
            borderRadius: 2,
            border: "1px solid var(--navy)",
            background: "var(--navy)",
            color: "#fff",
            transition: "all .18s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#05111F")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--navy)")
          }
        >
          Agendar Consulta →
        </a>
      </div>
    </div>
  </section>
);

export default Servicios;
