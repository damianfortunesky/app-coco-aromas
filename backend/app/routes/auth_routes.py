from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.models import User
from app.schemas.schemas import UserCreate, UserOut
from app.security.auth import create_access_token, verify_password, hash_password
from datetime import timedelta

router = APIRouter()

# Registrar un nuevo usuario
@router.post("/register", response_model=UserOut)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    
    db_user = db.query(User).filter(User.Email == user.Email).first()

    if db_user:
        raise HTTPException(status_code=400, detail="El correo ya está registrado")

    hashed_password = hash_password(user.Password)
    new_user = User(Username=user.Username, Email=user.Email, PasswordHash=hashed_password)

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# Inicio de sesión
@router.post("/login")
def login_user(username: str, password: str, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.Username == username).first()

    if not user or not verify_password(password, user.PasswordHash):
        raise HTTPException(status_code=400, detail="Credenciales inválidas")

    access_token = create_access_token(data={"sub": user.Username})
    
    return {"access_token": access_token, "token_type": "bearer"}
