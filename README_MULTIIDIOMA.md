# Portfolio Multiidioma com Presentación Protegida

## 🎯 Implementaciones Realizadas

### 1. **Sistema Multiidioma (PT-BR y ES-ES)**
- Selector de idioma en la barra de navegación
- Traducciones dinámicas de todos los elementos principales
- Persistencia de preferencia de idioma en `localStorage`
- Soporte para Portugués Brasileño y Español España

### 2. **Presentación Profesional Protegida**
- Página separada: `presentation.html`
- Autenticación con contraseña: **szadmin**
- Sesión segura con `sessionStorage`
- 10 proyectos de impacto profesional
- Galería visual de tecnologías

### 3. **Contenido de los 10 Proyectos**

1. **Automatización de envío de órdenes por WhatsApp**
   - Tecnologías: Power Automate, Excel, RPA, APIs WhatsApp

2. **Insights Predictivos TRACTIAN**
   - Tecnologías: Power Automate, IA NLP, Email Parsing

3. **Análisis de Secadores (Temperatura vs Producción)**
   - Tecnologías: Python, Análisis Estadístico, BI

4. **Análisis de Variables de Patio Industrial**
   - Tecnologías: BI, Análisis Histórico, Data Engineering

5. **Automatizaciones con IA (Langflow + n8n)**
   - Tecnologías: Langflow, n8n, APIs IA, LLM

6. **Procesamiento en Databricks**
   - Tecnologías: Databricks, Python, Data Engineering

7. **Dashboards Operacionales**
   - Tecnologías: Power BI, Streamlit, Python

8. **Automatización Excel + Macros**
   - Tecnologías: VBA, Lógica Condicional

9. **Interfaces con PI System**
   - Tecnologías: PI System, Integración Industrial

10. **Desarrollo Backend y Apps de Datos**
    - Tecnologías: Django, Streamlit, APIs Python

## 📁 Estructura de Archivos

```
portfolio/
├── index.html                      # Página principal (multiidioma)
├── presentation.html               # Presentación protegida
├── css/
│   ├── styles.css                 # Estilos principales
│   └── presentation.css           # Estilos de presentación
├── js/
│   ├── main.js                    # Lógica principal + multiidioma
│   ├── presentation.js            # Lógica de autenticación y presentación
│   ├── translations.json          # Traducciones (PT-BR, ES-ES)
│   └── presentations.json         # Contenido de los 10 proyectos
└── images/                        # Carpeta de imágenes
```

## 🔐 Contraseña de Acceso

**Contraseña**: `szadmin`

Esta contraseña permite acceder a la presentación professional en:
```
https://tu-dominio.github.io/presentation.html
```

## 🌐 Cómo Usar el Sistema Multiidioma

1. **Selector en la Navegación**: Aparece en la barra superior derecha
2. **Cambio de Idioma**: Selecciona PT-BR o ES-ES
3. **Persistencia**: Tu preferencia se guardará automáticamente

### Idiomas Disponibles:
- 🇧🇷 **Portugués Brasileiro (PT-BR)**
- 🇪🇸 **Español España (ES-ES)**

## 📊 Características de la Presentación

### Autenticación
- Modal de contraseña elegante
- Validación con feedback visual
- Sesión por navegador

### Contenido
- 10 proyectos de impacto
- Detalles de:
  - Problemas resueltos
  - Soluciones implementadas
  - Resultados alcanzados
  - Stack de tecnologías

### Diseño
- Interfaz glassmorphism (igual al portafolio)
- Animaciones suaves
- Responsive en todos los dispositivos
- Modo oscuro profesional

## 🚀 Despliegue en GitHub Pages

1. Actualiza tu repositorio con los nuevos archivos
2. GitHub Pages cargará automáticamente `index.html`
3. La presentación está en `presentation.html`

URLs:
```
Portafolio Principal: https://usuario.github.io/repositorio/
Presentación: https://usuario.github.io/repositorio/presentation.html
```

## 📝 Nota sobre Imágenes

Como se especifica en la presentación:
> "Muchas imágenes no se presentan por confidencialidad de datos industriales"

Los conceptos están completamente documentados, pero las imágenes de proyectos reales se omiten por seguridad.

## ✨ Notas Adicionales

- Las traducciones son completamente dinámicas
- El sistema funciona sin dependencias externas ((solo HTML, CSS, JS vanilla)
- Totalmente compatible con GitHub Pages
- Responde perfectamente en dispositivos móviles
- Autenticación segura sin backend requerido

## 🎨 Personalización

Para personalizar colores o textos:
1. Edita `js/translations.json` para cambiar textos
2. Edita `js/presentations.json` para cambiar proyectos
3. Modifica `:root` en `css/styles.css` para colores

---

**Creado para:** Sebastián Zambrano - Automación & Data Solutions
