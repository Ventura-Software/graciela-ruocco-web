# Graciela Ruocco & Asociados - Landing Web

Landing page institucional para el estudio jurídico Graciela Ruocco & Asociados, especializado en Derecho Administrativo y Previsión Social en Montevideo, Uruguay.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + TypeScript
- **Estilos:** Tailwind CSS v4
- **Hosting:** Vercel (recomendado)
- **Fuentes:** Playfair Display (serif) + Roboto (sans-serif)

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
graciela-ruocco-web/
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales + variables CSS
├── components/
│   ├── Header.tsx           # Navegación sticky + drawer mobile
│   ├── Hero.tsx             # Sección hero con stats
│   ├── Nosotros.tsx         # Sección equipo
│   ├── Servicios.tsx        # Sección servicios
│   ├── PorQue.tsx           # Por qué elegirnos
│   ├── Faq.tsx              # Preguntas frecuentes
│   ├── Contacto.tsx         # Formulario de contacto
│   ├── Footer.tsx           # Footer
│   └── Icons.tsx            # Biblioteca de iconos SVG
└── public/                  # Archivos estáticos
```

## 🎨 Diseño

### Paleta de Colores

- **Navy:** `#0A1628` (principal)
- **Gold:** `#C9A96E` (acento)
- **Cream:** `#FAF8F5` (fondo alternativo)
- **Slate:** `#4A5568` (texto secundario)

### Tipografía

- **Títulos:** Playfair Display (serif, elegante)
- **Cuerpo:** Roboto (sans-serif, legible)

### Responsive Breakpoints

- **Desktop:** > 900px
- **Tablet:** 421px - 900px
- **Mobile:** ≤ 420px

## 📋 Secciones Principales

1. **Header** - Navegación fija con scroll effect + drawer mobile
2. **Hero** - Propuesta de valor + estadísticas clave
3. **Nosotros** - Presentación del equipo (5 integrantes)
4. **Servicios** - 4 áreas principales de práctica
5. **Por Qué Elegirnos** - 4 razones clave
6. **FAQ** - 5 preguntas frecuentes con acordeón
7. **Contacto** - Formulario + información de contacto
8. **Footer** - Enlaces + redes sociales

## ✅ Características Implementadas

- ✅ Diseño completamente responsive (mobile-first)
- ✅ Navegación sticky con efecto de scroll
- ✅ Drawer mobile con animaciones suaves
- ✅ Formulario de contacto con validación
- ✅ Acordeón FAQ interactivo
- ✅ Hover states en todos los elementos interactivos
- ✅ SEO metadata configurado
- ✅ Smooth scroll entre secciones
- ✅ Honeypot anti-spam en formulario

## 🔧 Pendientes para Producción

### 1. Imágenes

Agregar las siguientes imágenes en `/public`:

```
/public/
  ├── hero-office.jpg          # Foto hero (1920x1080 recomendado)
  └── team/
      ├── graciela.jpg         # 400x400px
      ├── ariel.jpg
      ├── victoria.jpg
      ├── adriana.jpg
      └── valentina.jpg
```

**Nota:** Por ahora las imágenes del equipo muestran placeholders con gradiente.

### 2. API de Formulario de Contacto ✅

**¡YA IMPLEMENTADO!** El formulario está completamente funcional con Resend.

**Para activarlo, solo necesitas:**

1. Crear cuenta gratuita en [resend.com](https://resend.com)
2. Obtener tu API key
3. Agregar la API key a `.env.local`:
   ```bash
   RESEND_API_KEY=re_tu_api_key_aqui
   CONTACT_EMAIL=gruoccocosta@gmail.com
   ```
4. Reiniciar el servidor: `npm run dev`

**📖 Guía completa:** Ver `EMAIL_SETUP_GUIDE.md` para instrucciones paso a paso.

**Características incluidas:**

- ✅ Email hermosamente formateado con los colores del sitio
- ✅ Validación anti-spam (honeypot)
- ✅ Estados de carga y error
- ✅ Reply-to automático al email del consultante
- ✅ Gratis hasta 3,000 emails/mes

### 3. Información de Contacto

Actualizar en `/components/Contacto.tsx` y `/components/Footer.tsx`:

- Email real (actualmente: `gruoccocosta@gmail.com`)
- Teléfono real (actualmente: `+598 2900 1234`)
- Dirección completa
- URL de LinkedIn del estudio (si existe)

### 4. Analytics

Agregar Google Analytics 4:

```bash
npm install @next/third-parties
```

En `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

### 5. Dominio y Deploy

1. **Comprar dominio** (sugerencias):

   - `ruoccoasociados.com.uy`
   - `gracielaruocco.com.uy`

2. **Deploy en Vercel:**

   ```bash
   npm install -g vercel
   vercel
   ```

3. **Conectar dominio** en Vercel Dashboard

### 6. SEO Adicional

- [ ] Sitemap.xml automático
- [ ] robots.txt
- [ ] Schema.org LegalService markup
- [ ] Open Graph images
- [ ] Favicon personalizado

## 🛠️ Comandos Disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter ESLint
```

## 📱 Testing Recomendado

Antes del lanzamiento, probar en:

- ✅ Chrome (desktop + mobile)
- ✅ Safari (desktop + iOS)
- ✅ Firefox
- ✅ Edge

## 📞 Soporte

Desarrollado por **Bruno Pintos**

Para consultas técnicas sobre el proyecto, contactar al desarrollador.

---

**Versión:** 1.0
**Última actualización:** Abril 2026
