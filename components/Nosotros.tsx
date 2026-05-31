"use client";

import React from "react";
import Image from "next/image";
import { IconAcademic, IconScale, IconHandshake } from "./Icons";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  img: string;
  lead?: boolean;
}

const TEAM: TeamMember[] = [
  {
    name: "Graciela Ruocco",
    role: "Doctora en Derecho y Ciencias Sociales · Catedrática de Derecho Administrativo",
    bio: "Profesora Titular de Posgrado de Derecho Administrativo de la Facultad de Derecho de la Universidad Católica del Uruguay. Profesora Titular de Derecho Público de la Facultad de Derecho de la Universidad de la República. Directora del Instituto de Derecho Administrativo de la misma universidad (2021-2023). Máster en Derecho con énfasis en Derecho Constitucional y Derechos Humanos. Miembro del Foro Iberoamericano de Derecho Administrativo, de la Asociación de Derecho Público del Mercosur, de la Red Internacional de Bienes Públicos, del Instituto Internacional de Derecho Administrativo y del Centro Iberoamericano de Estudios de Derecho Público y Tecnología. Abogada I de la Dirección Jurídica del Poder Legislativo (1994-2019). Consultora especializada en Derecho Público y litigación en la materia.",
    img: "/graciela_ruocco.jpg",
    lead: true,
  },
  {
    name: "Victoria Frigerio Ruocco",
    role: "Doctora en Derecho y Ciencias Sociales · Escribana",
    bio: "Doble titulación en Derecho y Escribanía. Especialista en documentación corporativa, contratos y trámites notariales para empresas. Asesoramiento integral en el proceso de formación jurídica de la voluntad negocial del cliente y los actos que requieren documentación notarial. Vasta experiencia en materia de Familia, Laboral y Arrendamientos.",
    img: "/victoria_frigerio_ruocco.jpg",
  },
  {
    name: "Adriana Laurito",
    role: "Doctora en Derecho y Ciencias Sociales",
    bio: "Abogada con sólida formación en derecho público y privado. Con énfasis en Derecho de Familia, Laboral y Aeronáutico. Vasta experiencia en asuntos tales como sucesiones, divorcios, uniones concubinarias, despidos, arrendamientos y reclamos por faltantes o averías de carga aérea. Enfocada en la atención integral de clientes corporativos y resolución de conflictos.",
    img: "/adriana_laurito.jpeg",
  },
];

const Portrait: React.FC<{ src: string; large?: boolean }> = ({
  src,
  large,
}) => {
  const size = large ? 220 : 180;
  return (
    <div
      className="team-portrait"
      style={
        {
          width: size,
          flexShrink: 0,
          alignSelf: "stretch",
          overflow: "hidden",
          position: "relative",
          "--portrait-size": `${size}px`,
        } as React.CSSProperties
      }
    >
      <Image
        src={src}
        alt="Team member"
        fill
        style={{ objectFit: "cover" }}
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
        background: "#fff",
        borderRadius: 4,
        border: hover
          ? "1px solid rgba(201,169,110,0.55)"
          : "1px solid var(--line)",
        display: "flex",
        gap: 0,
        alignItems: "stretch",
        transition: "border-color .2s, transform .2s, box-shadow .2s",
        height: "100%",
        overflow: "hidden",
        boxShadow: hover ? "0 14px 30px -18px rgba(10,22,40,0.18)" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Portrait src={m.img} large={m.lead} />
      <div style={{ flex: 1, minWidth: 0, padding: 28 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-serif)",
            fontSize: m.lead ? 22 : 18,
            fontWeight: 700,
            color: "var(--navy)",
            letterSpacing: "-0.01em",
          }}
        >
          {m.name}
        </h3>
        <div
          style={{
            marginTop: 6,
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gold-deep)",
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
            color: "var(--slate)",
          }}
        >
          {m.bio}
        </p>
      </div>
    </div>
  );
};

const Nosotros: React.FC = () => (
  <section
    id="nosotros"
    className="section-pad"
    style={{ background: "var(--cream)", padding: "128px 0" }}
  >
    <div
      className="container"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}
    >
      <div
        className="grid-nosotros-head"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 80,
          alignItems: "start",
          marginBottom: 64,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              background: "var(--navy)",
              color: "#fff",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
              borderRadius: 2,
            }}
          >
            Nuestro Equipo
          </div>
          <h2
            style={{
              margin: "24px 0 0",
              fontFamily: "var(--font-serif)",
              fontSize: 48,
              fontWeight: 700,
              color: "var(--navy)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Experiencia y Profesionalismo al Servicio de{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "var(--gold-deep)",
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
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.7,
              color: "var(--slate)",
            }}
          >
            Un equipo multidisciplinario con sólida trayectoria académica y
            profesional, comprometido con brindar soluciones legales claras,
            estratégicas y orientadas a los objetivos de cada cliente.
          </p>
          <div
            className="nosotros-badges"
            style={{
              marginTop: 28,
              display: "flex",
              gap: 32,
            }}
          >
            {[
              { icon: IconAcademic, l: "Rigor Académico" },
              { icon: IconScale, l: "Visión Estratégica" },
              { icon: IconHandshake, l: "Trato Cercano" },
            ].map((f, i) => {
              const Ic = f.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "var(--navy)",
                  }}
                >
                  <Ic
                    size={18}
                    stroke={1.3}
                    style={{ color: "var(--gold-deep)" }}
                  />
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
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
        }}
      >
        <div className="team-lead" style={{ gridColumn: "span 2" }}>
          <TeamCard m={TEAM[0]} />
        </div>
        <div className="team-half">
          <TeamCard m={TEAM[1]} />
        </div>
        <div className="team-half">
          <TeamCard m={TEAM[2]} />
        </div>
      </div>
    </div>
  </section>
);

export default Nosotros;
