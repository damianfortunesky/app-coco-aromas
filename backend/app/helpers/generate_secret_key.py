import secrets

# Genera una clave secreta segura de 32 bytes
secret_key = secrets.token_urlsafe(32)
print(secret_key)

# Ejecutar
# /e/Escritorio/Damian/Programacion/app-coco-aromas/backend/app/helpers>  python generate_secret_key.py