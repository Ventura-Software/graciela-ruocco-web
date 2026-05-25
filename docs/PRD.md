# PRD – Landing Web Estudio Jurídico Graciela Ruocco & Asociados

**Versión:** 1.0
**Fecha:** Abril 2026
**Responsable del desarrollo:** Bruno Pintos
**Cliente:** Graciela Ruocco & Asociados
**Tipo de documento:** Product Requirements Document (PRD)

---

## 1. Resumen Ejecutivo

Desarrollo de una landing web institucional para el estudio jurídico **Graciela Ruocco & Asociados**, orientada a fortalecer su presencia digital, transmitir confianza profesional y generar consultas calificadas de clientes corporativos.

El sitio se enfocará en posicionar al estudio como referente en **Derecho Administrativo** y **Previsión Social**, con un diseño moderno, profesional y optimizado para conversión a través de un formulario de contacto.

**Indicadores clave:**

- Presupuesto: USD 1.200 + IVA
- Duración: 2 a 3 semanas
- Stack: Next.js + Tailwind + Vercel
- Referencia de inspiración: https://delpiazzo.com/

---

## 2. Contexto y Problema

El estudio actualmente no cuenta con una presencia digital moderna que refleje su nivel profesional, trayectoria y áreas de especialización. Esto implica:

- **Pérdida de oportunidades comerciales:** empresas potenciales no pueden encontrar o evaluar al estudio online.
- **Falta de canal de captación:** no existe un flujo digital claro para recibir consultas.
- **Desalineación con estándares del sector:** estudios competidores (como Delpiazzo Abogados) ya cuentan con sitios modernos que transmiten solidez y profesionalismo.

El PRD define los requisitos para construir una landing que resuelva estos puntos, priorizando **simplicidad, claridad, confianza y conversión**.

---

## 3. Objetivos del Proyecto

### 3.1 Objetivos de Negocio

1. **Posicionar al estudio como referente** en Derecho Administrativo, Previsión Social y Recursos Humanos.
2. **Generar consultas calificadas** de clientes corporativos vía formulario de contacto.
3. **Comunicar servicios de forma clara**, sin tecnicismos innecesarios.
4. **Consolidar la presencia digital** con un sitio alineado a estándares profesionales actuales.

### 3.2 Objetivos Medibles (KPIs)

| Métrica                            | Meta sugerida (primeros 3 meses post-lanzamiento) |
| ---------------------------------- | ------------------------------------------------- |
| Consultas recibidas vía formulario | ≥ 5 por mes                                       |
| Tiempo promedio en sitio           | ≥ 1:30 min                                        |
| Tasa de rebote                     | ≤ 65%                                             |
| Performance móvil (Lighthouse)     | ≥ 90                                              |
| Indexación en Google               | 100% de páginas principales                       |

---

## 4. Público Objetivo

### 4.1 Segmento primario

**Empresas** que requieren asesoramiento jurídico en:

- Derecho administrativo (contrataciones con el Estado, procedimientos administrativos, regulaciones)
- Previsión social (aportes, jubilaciones, contingencias laborales)

### 4.2 Segmento secundario

**Personas físicas** con necesidades puntuales en trabajos de escribanía (compraventas, poderes, certificaciones, sucesiones).

### 4.3 Perfil del visitante tipo

- Gerente, responsable de RRHH, contador, o dueño de empresa buscando asesoramiento legal.
- Accede desde computadora de oficina o celular.
- Busca rapidez, claridad y señales de confianza (trayectoria, equipo, especialización).
- Decide contactar si percibe solidez profesional y facilidad de contacto.

---

## 5. Stakeholders

| Stakeholder        | Rol                                                                             |
| ------------------ | ------------------------------------------------------------------------------- |
| Graciela Ruocco    | Cliente principal, referente del estudio, Catedrática de Derecho Administrativo |
| Bruno Pintos       | Desarrollador / responsable del proyecto                                        |
| Equipo del estudio | Provee contenido, fotos (eventualmente), revisión y aprobación                  |

---

## 6. Alcance del Proyecto

### 6.1 Dentro del alcance (In Scope)

- Diseño UX/UI moderno y responsive
- Desarrollo frontend completo en Next.js
- 4 secciones principales (Home, Sobre el estudio, Servicios, Contacto)
- Formulario de contacto funcional (envío por email)
- SEO básico (estructura HTML semántica, metadatos, sitemap)
- Optimización de performance (Core Web Vitals)
- Deploy en Vercel
- Testing funcional y cross-browser
- Versión inicial sin fotos profesionales (opcional, a incorporar más adelante)

### 6.2 Fuera del alcance (Out of Scope)

- Hosting premium (se usará plan gratuito de Vercel inicialmente)
- Compra/gestión de dominio (a cargo del cliente)
- Blog o sistema de publicación de contenido dinámico
- Integraciones con CRM, WhatsApp Business, chat en vivo u otros sistemas externos
- Traducción a otros idiomas
- Campañas de Google Ads o SEO avanzado
- Producción de fotografía profesional del equipo
- Mantenimiento posterior al deploy (a acordar aparte si se requiere)

---

## 7. Requisitos Funcionales

### 7.1 Estructura del sitio

**7.1.1 Home (Landing principal)**

- Hero section con propuesta de valor clara (especialización + público objetivo)
- Call-to-action principal: "Consultar" / "Agendar contacto"
- Bloque de áreas de práctica destacadas
- Sección de confianza (trayectoria / cifras / frase institucional)
- CTA secundario hacia formulario de contacto

**7.1.2 Sobre el estudio**

- Historia y trayectoria del estudio
- Presentación del equipo (5 integrantes, con cargos y especialidades):
  - Graciela Ruocco – Catedrática de Derecho Administrativo
  - Ariel Moller – Especialista en Previsión Social
  - Victoria Frigerio Ruocco – Abogada y Escribana
  - Valentina Frigerio Ruocco – Licenciada en Comunicación
  - Adriana Laurito – Abogada
- Placeholder para fotografías profesionales (incorporables a futuro)

**7.1.3 Servicios**

- Derecho Administrativo (área principal)
- Previsión Social (área principal)
- Servicios de Escribanía (área a impulsar)
- Otros servicios asociados según definición del cliente
- Descripción clara, sin tecnicismos, por cada área

**7.1.4 Contacto**

- Formulario con campos: Nombre, Empresa, Email, Teléfono, Área de consulta, Mensaje
- Información de contacto alternativa (email, teléfono, dirección)
- Confirmación visual al enviar
- Envío de email automático a casilla del estudio

### 7.2 Funcionalidades del formulario

- Validación de campos (obligatoriedad, formato de email)
- Protección anti-spam (honeypot o similar)
- Email con toda la información al receptor definido por el cliente
- Mensaje de confirmación al usuario tras envío exitoso
- Manejo visible de errores

### 7.3 Navegación

- Menú superior fijo con acceso a las 4 secciones
- Scroll suave entre secciones (one-page) o navegación entre páginas (a definir)
- CTA de contacto visible permanentemente
- Footer con datos de contacto, redes sociales (si aplica) y enlaces legales

---

## 8. Requisitos No Funcionales

### 8.1 Performance

- Tiempo de carga inicial < 2 segundos en 4G
- Puntaje Lighthouse ≥ 90 en Performance, Accessibility, Best Practices y SEO
- Imágenes optimizadas (WebP, lazy loading)

### 8.2 Responsive / Multiplataforma

- Diseño mobile-first
- Soporte en: Chrome, Safari, Firefox, Edge (últimas 2 versiones)
- Breakpoints: mobile, tablet, desktop

### 8.3 SEO

- Estructura HTML semántica
- Metatags (title, description, Open Graph) por sección
- Sitemap.xml y robots.txt
- URLs limpias y amigables
- Schema markup para LegalService (JSON-LD)

### 8.4 Seguridad

- HTTPS por defecto (provisto por Vercel)
- Sanitización de datos del formulario
- Cumplimiento con buenas prácticas de protección de datos personales

### 8.5 Accesibilidad

- Cumplimiento mínimo con WCAG 2.1 nivel AA en elementos críticos
- Contraste adecuado, navegación por teclado, textos alternativos

### 8.6 Mantenibilidad

- Código documentado en puntos clave
- Componentes reutilizables
- Estructura de carpetas clara y escalable

---

## 9. Requisitos de Diseño

### 9.1 Estética

- **Tono:** serio, profesional, moderno, institucional
- **Paleta:** tonos sobrios (azules, grises, neutros) con acento que transmita confianza
- **Tipografía:** legible, moderna, adecuada para entorno corporativo
- **Imágenes:** institucionales, alineadas al ámbito legal/corporativo

### 9.2 Referencia estética

- Se usa como referencia el sitio de [Estudio Delpiazzo](https://delpiazzo.com/), pero se buscará un enfoque **más moderno y orientado a conversión**, no solo informativo.

### 9.3 Principios de diseño

- Jerarquía visual clara
- Espacios en blanco generosos
- CTAs visibles y consistentes
- Coherencia entre secciones

---

## 10. Especificaciones Técnicas

| Componente           | Tecnología                                                                |
| -------------------- | ------------------------------------------------------------------------- |
| Framework            | Next.js (React)                                                           |
| Estilos              | Tailwind CSS / CSS moderno                                                |
| Formulario           | API Route de Next.js + servicio de email (ej. Resend, SendGrid o similar) |
| Hosting / Deploy     | Vercel (plan gratuito inicial)                                            |
| Dominio              | A gestionar por el cliente                                                |
| Control de versiones | Git / GitHub                                                              |
| Analytics            | Google Analytics 4 (opcional, a confirmar)                                |

---

## 11. Historias de Usuario Clave

**HU-01 – Empresa interesada en asesoramiento**

> Como responsable de una empresa, quiero entender rápidamente las áreas de especialización del estudio para evaluar si me pueden asesorar en mi problema.

**HU-02 – Cliente potencial enviando consulta**

> Como potencial cliente, quiero enviar una consulta desde el sitio sin fricciones y recibir confirmación, para sentirme tranquilo de que mi mensaje fue recibido.

**HU-03 – Visitante evaluando trayectoria**

> Como visitante, quiero conocer a los profesionales del estudio y su experiencia para decidir si confío en ellos.

**HU-04 – Usuario móvil**

> Como usuario que entra desde el celular, quiero navegar cómodamente y contactar rápidamente sin tener que hacer zoom ni buscar datos.

**HU-05 – Socio del estudio recibiendo consultas**

> Como socia del estudio, quiero recibir las consultas por email con toda la información relevante para responder rápidamente.

---

## 12. Contenido Requerido por el Cliente

Para avanzar con el desarrollo se requiere que el cliente provea:

- [ ] Textos institucionales (historia del estudio, misión/valores si aplica)
- [ ] Bios cortas de cada integrante del equipo
- [ ] Descripción de áreas de servicio (derecho administrativo, previsión social, escribanía, otros)
- [ ] Datos de contacto oficiales (email, teléfono, dirección)
- [ ] Logo del estudio (si existe) en vectorial o alta resolución
- [ ] Fotografías del equipo (opcional para v1)
- [ ] Email destinatario del formulario de contacto
- [ ] Enlaces a redes sociales (si aplica)

---

## 13. Cronograma Estimado

**Duración total: 2 a 3 semanas**

| Fase                            | Duración estimada | Entregables                                |
| ------------------------------- | ----------------- | ------------------------------------------ |
| Análisis y definición           | 2-3 días          | Validación final de estructura y contenido |
| Diseño UX/UI                    | 3-5 días          | Mockups de secciones clave para aprobación |
| Desarrollo frontend             | 5-7 días          | Implementación de todas las secciones      |
| Integración de formulario y SEO | 1-2 días          | Formulario funcional + metadatos           |
| Testing y ajustes               | 1-2 días          | Pruebas cross-browser y mobile             |
| Deploy y entrega                | 1 día             | Sitio en producción                        |

---

## 14. Presupuesto

**Costo total:** USD 1.200 + IVA

**Incluye:**

- Diseño UI moderno
- Desarrollo completo de la landing
- Implementación del formulario de contacto
- Testing funcional
- Deploy y puesta en producción

**Forma de pago:**

- 50% al inicio del proyecto
- 50% al finalizar la entrega

**No incluye:**

- Hosting (Vercel plan gratuito o según uso)
- Compra de dominio
- Producción fotográfica
- Mantenimiento post-lanzamiento

---

## 15. Criterios de Aceptación

El proyecto se considerará entregado y aceptado cuando:

1. Las 4 secciones principales estén implementadas según los mockups aprobados.
2. El sitio sea completamente responsive (mobile, tablet, desktop).
3. El formulario de contacto envíe correctamente los emails al destinatario definido.
4. El puntaje de Lighthouse sea ≥ 90 en Performance y SEO en mobile y desktop.
5. El sitio esté desplegado en Vercel y accesible desde el dominio definido.
6. Se haya validado el correcto funcionamiento en Chrome, Safari, Firefox y Edge.
7. Los contenidos provistos por el cliente estén correctamente incorporados.

---

## 16. Riesgos y Supuestos

### 16.1 Riesgos

| Riesgo                                                  | Impacto                   | Mitigación                                                  |
| ------------------------------------------------------- | ------------------------- | ----------------------------------------------------------- |
| Demora en provisión de contenidos por parte del cliente | Retraso en el cronograma  | Definir checklist de contenidos al inicio y fechas límite   |
| Cambios de alcance durante el desarrollo                | Aumento de tiempo y costo | Registrar cambios y evaluar impacto antes de implementarlos |
| Ausencia de fotografía profesional                      | Diseño menos impactante   | Usar alternativas visuales (íconos, ilustraciones) en v1    |
| Expectativas distintas a la referencia                  | Rework en diseño          | Aprobar mockups antes de iniciar el desarrollo              |

### 16.2 Supuestos

- El cliente gestionará la compra del dominio.
- El cliente proveerá todo el contenido (textos, datos, logo) en tiempo y forma.
- La v1 del sitio se lanzará sin fotografías profesionales del equipo.
- No se requiere migración desde una web anterior.

---

## 17. Próximos Pasos

1. Validación y aprobación de este PRD por parte del cliente.
2. Entrega de contenidos según checklist (sección 12).
3. Firma del acuerdo y pago del 50% inicial.
4. Inicio del diseño UX/UI y presentación de mockups para aprobación.
5. Desarrollo, testing y deploy.
6. Entrega final y pago del 50% restante.

---

_Documento elaborado como base de trabajo para el proyecto. Cualquier modificación al alcance, cronograma o entregables debe ser consensuada entre las partes y documentada por escrito._
