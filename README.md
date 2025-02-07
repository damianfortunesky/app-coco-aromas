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


# 6. Instalar react-router-dom

    npm install react-router-dom


    # Instalar los tipos para TypeScript
    
    npm install --save-dev @types/react-router-dom

# 7. Instala Axios para manejar las solicitudes al backend:

    npm install axios

# 8. Instalar libreria de Iconos

    $ npm install @heroicons/react@v1

# 9. Instalar librería de clases dinámicas 

    npm install clsx

# 10. Configurar los scripts en package.json

    "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
    }

# 11. Ejecutar el servidor de desarrollo

    npm run dev

# 12. Manejo de fechas
    
    npm install date-fns

    # Tipado para date-fns
    npm install --save-dev @types/date-fns

# 12. Observaciones

    Dependencias de producción:
    
        react: Biblioteca principal.
        react-dom: Renderiza React en el navegador.
        react-router-dom: Manejo de rutas.
        axios: Peticiones HTTP al backend.
        @heroicons/react: Íconos SVG compatibles con TailwindCSS.
        clsx: Manejo de clases dinámicas.
        date-fns: Manejo de fechas.
    
    Dependencias de desarrollo:
     
        typescript: Tipado estático.
        @types/react, @types/react-dom, @types/react-router-dom: Tipos para TypeScript.
        tailwindcss, postcss, autoprefixer: Configuración de TailwindCSS.

    Instalacion de 1 sola vez:

    npm install react react-dom react-router-dom axios @heroicons/react clsx date-fns && \
    npm install -D typescript @types/react @types/react-dom @types/react-router-dom tailwindcss postcss autoprefixer


/* ---------------------------------------------------------------------- BACKEND-APP -------------------------------------------------------------------------- */

# 1. Crear directorio:

  app-coco-aromas> mkdir backend
  app-coco-aromas> cd backend

# 2. Preparar Entorno Virtual:

    -- Crear Entorno
        app-coco-aromas\backend> python -m venv .venv

    -- Activar Entorno
        app-coco-aromas\backend> .\.venv\Scripts\activate
    
    -- Si no funciona
        app-coco-aromas\backend> Set-ExecutionPolicy RemoteSigned
        app-coco-aromas\backend> .\.venv\Scripts\activate

        -- Git Bash
            source .venv/Scripts/activate



# 3. Instalar dependecias:

    PATH = app-coco-aromas\backend> 
    
    Principales
    
        PATH>    pip install -r requirements.txt
        PATH>    python.exe -m pip install --upgrade pip

    Adicionales que surgieron
    
        PATH>    pip install --upgrade python-dotenv
        PATH>    pip install pydantic[email]
        PATH>    pip install --upgrade passlib bcrypt

    Actualizar 
        
        pip freeze > requirements.txt

    Guardar automaticamente al instalar

        pip install nombre_del_paquete --save 


# 4. Ejecucion y gestion

    -- Ejecutar
    app-coco-aromas\backend>  uvicorn app.main:app --reload


    
