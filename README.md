# Cifrato Lite — Gestión Contable para Personas Mayores

**Cifrato Lite** es una solución diseñada específicamente para simplificar la gestión de facturas y contabilidad para emprendedores y dueños de negocios de la tercera edad ("Don José"). 

Nuestro objetivo es reducir la brecha digital y tecnológica, transformando procesos complejos de la DIAN y Siigo en experiencias fluidas, accesibles y, sobre todo, comprensibles.

---

## 🌟 ¿Por qué Cifrato Lite?

La digitalización de la contabilidad en Colombia (Facturación Electrónica) ha creado una barrera para muchas personas mayores que han manejado sus negocios exitosamente durante décadas. 

Cifrato Lite nace para ser su acompañante tecnológico:
- **Interfaz amigable para seniors**: Botones gigantes (min. 64px), tipografía clara (24px+), alto contraste y navegación lineal.
- **Sin términos técnicos confusos**: Traducimos la jerga contable ("PUC", "Conciliación", "Token Access") a acciones naturales ("Traer mis facturas", "Clasificar gasto").
- **Automatización**: Extracción de datos inteligente para evitar la digitación manual propensa a errores.

---

## 🚀 Funcionalidades Principales

1. **Sincronización Mágica (DIAN)**: Con un solo enlace del correo, el sistema trae todas las facturas recibidas automáticamente.
2. **Clasificación Asistida**: El sistema sugiere la categoría del gasto y solo pide una confirmación simple ("Sí, es correcto").
3. **Conexión con Siigo**: Sube la información directamente a la nube contable sin que el usuario tenga que entrar a plataformas complicadas.
4. **Registro con Foto**: Los gastos manuales se registran simplemente tomando una foto a la factura física.

---

## 🏗️ Arquitectura del Proyecto

El código ha sido refactorizado siguiendo estándares de elite para garantizar mantenibilidad y escalabilidad:

- **Estructura por Features**: Organización basada en dominios de negocio (ej: `sync-invoices`, `classify-invoice`).
- **Separación de Capas**: 
  - **Hooks**: Toda la lógica de estado y navegación.
  - **Services**: Integraciones y lógica de negocio pura.
  - **U.I. Components**: Componentes visuales atómicos y legibles.
- **Enforzado de Constantes**: Cero valores hardcodeados; todas las rutas, estados y tiempos están centralizados.

---

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS (Tailwind UI + Custom Senior Patterns)
- **Iconografía**: Lucide React
- **Animaciones**: Framer Motion / Tailwind-Animate (para feedback visual suave)

---

## 🚦 Primeros Pasos

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Verificación de Calidad
```bash
npm run build && npm run lint
```

---

## 🎨 Filosofía de Diseño

> "Si Don José puede usarlo sin preguntar, entonces está bien hecho."

1. **Menos es Más**: Solo una acción principal por pantalla.
2. **Feedback Constante**: Estados de carga claros con mensajes humanos ("Trayendo sus facturas", "Guardando...").
3. **Seguridad**: Confirmaciones explícitas antes de realizar acciones críticas.
