# 🚀 Checklist de Deploy - Graciela Ruocco & Asociados

## Pre-Deploy

### 1. Contenido ✍️

- [ ] **Textos Revisados**

  - [ ] Verificar ortografía en español
  - [ ] Confirmar títulos y descripciones
  - [ ] Validar bios del equipo
  - [ ] Revisar descripciones de servicios

- [ ] **Datos de Contacto**
  - [ ] Email real del estudio
  - [ ] Teléfono con código de área correcto
  - [ ] Dirección física completa
  - [ ] Horarios de atención actualizados
  - [ ] LinkedIn URL (si existe)

### 2. Imágenes 🖼️

- [ ] **Hero Section**

  - [ ] Foto de oficina/profesional (1920x1080px)
  - [ ] Formato: JPG optimizado < 200KB

- [ ] **Equipo** (5 fotos)

  - [ ] Graciela Ruocco (400x400px)
  - [ ] Ariel Moller (400x400px)
  - [ ] Victoria Frigerio Ruocco (400x400px)
  - [ ] Adriana Laurito (400x400px)
  - [ ] Formato: JPG, fondo profesional

- [ ] **Favicon**
  - [ ] Crear favicon.ico (32x32, 16x16)
  - [ ] Apple touch icon (180x180)

### 3. Funcionalidad 🔧

- [ ] **API de Contacto**

  - [ ] Testear envío de emails
  - [ ] Configurar email destinatario

- [ ] **Formulario**
  - [ ] Testear validación (campos vacíos)
  - [ ] Testear validación de email
  - [ ] Verificar mensaje de éxito
  - [ ] Probar honeypot anti-spam

### 4. SEO 🔍

- [ ] **Metadata**

  - [ ] Title optimizado (< 60 caracteres)
  - [ ] Description (< 160 caracteres)
  - [ ] Keywords relevantes
  - [ ] Open Graph tags

- [ ] **Contenido**

  - [ ] H1 único por página
  - [ ] Alt text en imágenes
  - [ ] URLs semánticas

- [ ] **Technical SEO**
  - [ ] Crear `robots.txt`
  - [ ] Crear `sitemap.xml`
  - [ ] Schema.org markup (LegalService)

### 5. Performance ⚡

- [ ] **Build Test**

  - [ ] `npm run build` sin errores
  - [ ] Revisar warnings en consola
  - [ ] Verificar tamaño de bundle

- [ ] **Lighthouse Audit**

  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 90
  - [ ] Best Practices ≥ 90
  - [ ] SEO ≥ 90

- [ ] **Optimizaciones**
  - [ ] Imágenes comprimidas (< 200KB c/u)
  - [ ] Lazy loading activado
  - [ ] Fonts preloaded

---

## Deploy

### 6. Vercel Setup 🌐

- [ ] **Cuenta Vercel**

  - [ ] Crear cuenta en vercel.com
  - [ ] Conectar con GitHub (opcional)

- [ ] **Deploy Inicial**

  ```bash
  npm install -g vercel
  cd graciela-ruocco-web
  vercel
  ```

  - [ ] Seguir prompts de configuración
  - [ ] Confirmar URL temporal (.vercel.app)

- [ ] **Variables de Entorno**
  - [ ] `RESEND_API_KEY` o `SENDGRID_API_KEY`
  - [ ] `CONTACT_EMAIL` (email destinatario)
  - [ ] `NEXT_PUBLIC_GA_ID` (Google Analytics)

### 7. Dominio 🌍

- [ ] **Comprar Dominio**

  - Opciones:
    - [ ] ruoccoasociados.com.uy
    - [ ] gracielaruocco.com.uy
    - [ ] estudiojuridicogr.com.uy

- [ ] **Configurar DNS**

  - [ ] Agregar dominio en Vercel
  - [ ] Copiar registros DNS de Vercel
  - [ ] Configurar en proveedor de dominio
  - [ ] Esperar propagación (hasta 48h)

- [ ] **SSL**
  - [ ] Verificar certificado SSL (automático en Vercel)
  - [ ] Forzar HTTPS

### 8. Analytics 📊

- [ ] **Google Analytics 4**

  - [ ] Crear cuenta GA4
  - [ ] Obtener ID (G-XXXXXXXXXX)
  - [ ] Instalar `@next/third-parties`
  - [ ] Agregar GoogleAnalytics en layout

- [ ] **Vercel Analytics** (opcional)
  - [ ] Activar en dashboard de Vercel

---

## Post-Deploy

### 9. Testing Final 🧪

- [ ] **Funcional**

  - [ ] Navegación entre secciones
  - [ ] Scroll suave
  - [ ] Mobile menu abre/cierra
  - [ ] Formulario envía correctamente
  - [ ] Email llega a destinatario

- [ ] **Cross-Browser**

  - [ ] Chrome (desktop + mobile)
  - [ ] Safari (desktop + iOS)
  - [ ] Firefox (desktop)
  - [ ] Edge (desktop)

- [ ] **Responsive**

  - [ ] Desktop (1920px, 1440px, 1366px)
  - [ ] Tablet (768px, 1024px)
  - [ ] Mobile (375px, 390px, 414px)

- [ ] **Dispositivos Reales**
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] iPad

### 10. SEO Post-Launch 🎯

- [ ] **Google Search Console**

  - [ ] Verificar propiedad
  - [ ] Enviar sitemap
  - [ ] Verificar indexación

- [ ] **Bing Webmaster Tools**

  - [ ] Verificar sitio
  - [ ] Enviar sitemap

- [ ] **Local SEO** (opcional)
  - [ ] Google Business Profile
  - [ ] Dirección consistente

### 11. Monitoreo 📈

- [ ] **Configurar Alertas**

  - [ ] Vercel: notificaciones de deploy
  - [ ] Email: notificaciones de formulario
  - [ ] Analytics: reporte semanal

- [ ] **Backup**
  - [ ] Código en GitHub (privado)
  - [ ] Backup de base de datos (si aplica)

---

## Entrega al Cliente

### 12. Documentación 📚

- [ ] **Entregar**

  - [ ] URL del sitio en producción
  - [ ] Acceso a Vercel (invitar como colaborador)
  - [ ] Acceso a Google Analytics
  - [ ] README con instrucciones
  - [ ] Credenciales de servicios

- [ ] **Capacitación** (opcional)
  - [ ] Cómo recibir emails del formulario
  - [ ] Cómo ver analytics
  - [ ] Cómo hacer cambios básicos

### 13. Facturación 💰

- [ ] **Pago Final**
  - [ ] Confirmar entrega completa
  - [ ] Emitir factura 50% restante
  - [ ] Confirmar recepción de pago

---

## Mantenimiento Futuro (Opcional)

### Servicios Adicionales

- [ ] **Soporte Mensual**

  - [ ] Actualizaciones de contenido
  - [ ] Respaldo mensual
  - [ ] Monitoreo de uptime
  - [ ] Reportes de analytics

- [ ] **Features Futuros**
  - [ ] Blog
  - [ ] Casos de éxito
  - [ ] Newsletter
  - [ ] Integración WhatsApp

---

## ✅ Criterios de Aceptación (del PRD)

El proyecto se considera entregado cuando:

1. ✅ Las 4 secciones principales estén implementadas según mockups
2. ✅ El sitio sea completamente responsive (mobile, tablet, desktop)
3. ✅ El formulario de contacto envíe emails correctamente
4. ✅ Lighthouse ≥ 90 en Performance y SEO (mobile y desktop)
5. ✅ Sitio desplegado en Vercel con dominio configurado
6. ✅ Funciona en Chrome, Safari, Firefox y Edge
7. ✅ Contenidos del cliente incorporados correctamente

---

**Última actualización:** Abril 2026
