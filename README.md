# app-coco-aromas

/* ---------------------------------------------------------------------- SUBIR A GIT ----------------------------------------------------------------------*/

# 1. Navegar a la carpeta del proyecto
cd /ruta/de/tu/proyecto

# 2. Inicializar el repositorio de Git (si aún no lo has hecho)
git init

# 3. Agregar el repositorio remoto de GitHub (cambia la URL a la de tu repositorio)
git remote add origin [URL]

# 4. Traer cambios del repositorio remoto
git pull origin main --allow-unrelated-histories

# 5. Agregar todos los archivos al área de staging
git add .

# 6. Realizar el commit inicial
git commit -m "Primer commit"

# 7. Subir el proyecto al repositorio remoto en GitHub
git push -u origin master  # (usa "main" en lugar de "master" si tu rama principal es "main")

/* ---------------------------------------------------------------------- FRONTEND-APP -------------------------------------------------------------------------- */

Configuración del Proyecto: Vite + React + TypeScript + TailwindCSS

# 1. Crear el proyecto

    npm create vite@latest nombre-del-proyecto -- --template react-ts

    cd frontend 
    npm install
    npm run dev

# 2. Instalar TailwindCSS y PostCSS

    npm install -D tailwindcss postcss autoprefixer
    
    # Generar los archivos de configuración

    npx tailwindcss init -p

# 3. Configurar tailwind.config.js

    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

# 4. Crear el archivo index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

# 5. Importar el index.css en main.tsx

    import './index.css'; 
    
# 6. Ejecutar el servidor de desarrollo

    npm run dev

# 7. Instalar react-router-dom

    npm install react-router-dom

# 8. Instalar los tipos para TypeScript

    npm install --save-dev @types/react-router-dom

# 8. Instala Axios para manejar las solicitudes al backend:

    npm install axios


