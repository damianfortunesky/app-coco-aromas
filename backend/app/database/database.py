import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Ruta absoluta al archivo .env
load_dotenv("E:/Escritorio/Damian/Programacion/app-coco-aromas/backend/app/.env")

# Leer la URL de la base de datos desde el archivo .env
DATABASE_URL = os.getenv("DATABASE_URL")

#print(f"DATABASE_URL loaded: {DATABASE_URL}")  # Esto debe mostrar la URL si está configurada

if not DATABASE_URL:
    raise ValueError("La variable de entorno DATABASE_URL no está configurada.")

# Configurar SQLAlchemy
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependencia para obtener la sesión de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
