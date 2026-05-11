# AUTOMIQ -CORE- Landing Page

Proyecto frontend de una landing page B2B enfocada en agencias de Inteligencia Artificial. Creado con **Next.js (App Router)** y **Tailwind CSS**.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18.17 o superior recomendada)
- Un gestor de paquetes (`npm`, `yarn`, o `pnpm`)

## 🛠️ Instalación y Desarrollo Local

1. **Instalar las dependencias:**
   Ejecuta el siguiente comando en la raíz del proyecto para descargar todas las librerías necesarias (como Next.js, React y Lucide-react).
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo:**
   Inicia el entorno local para ver la página en tiempo real.
   ```bash
   npm run dev
   ```

3. **Ver la página:**
   Abre tu navegador web e ingresa a [http://localhost:3000](http://localhost:3000). Los cambios que hagas en el código se reflejarán automáticamente.

## 🚀 Despliegue en Vercel

Este proyecto está optimizado y listo para ser desplegado en **Vercel** (los creadores de Next.js), lo que es la forma más rápida y recomendada.

**Método 1: Vía Vercel Dashboard (Recomendado)**
1. Sube este código a un repositorio en GitHub, GitLab o Bitbucket.
2. Inicia sesión en [Vercel](https://vercel.com).
3. Haz clic en "Add New..." y selecciona "Project".
4. Importa tu repositorio.
5. Vercel detectará automáticamente que es un proyecto de Next.js. No necesitas cambiar ninguna configuración de compilación.
6. Haz clic en "Deploy". En un par de minutos, tu sitio estará en vivo con un dominio de Vercel (y podrás añadir tu propio dominio personalizado).

**Método 2: Vía Vercel CLI**
Si prefieres la terminal:
1. Instala el CLI de Vercel globalmente: `npm i -g vercel`
2. Ejecuta `vercel` en la raíz de este proyecto y sigue las instrucciones.

## Estructura del Proyecto

El proyecto sigue una arquitectura modular dentro de la carpeta `src/`:

```
src/
├── app/
│   ├── globals.css      # Estilos globales y configuración de Tailwind
│   ├── layout.js        # Layout principal y fuentes
│   └── page.js          # Ensamblaje de la Landing Page
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Secciones de la landing (Hero, Services, Process, etc.)
│   └── ui/              # Componentes reutilizables (Botones, etc.)
```
