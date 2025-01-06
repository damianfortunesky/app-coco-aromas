from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.models import Category
from app.schemas.schemas import CategoryBase, CategoryOut

router = APIRouter()

# Obtener todas las categorías
@router.get("/", response_model=list[CategoryOut])
def get_categories(db: Session = Depends(get_db)):
    return db.query(Category).all()

# Crear una nueva categoría
@router.post("/", response_model=CategoryOut)
def create_category(category: CategoryBase, db: Session = Depends(get_db)):
    db_category = db.query(Category).filter(Category.CategoryName == category.CategoryName).first()

    if db_category:
        raise HTTPException(status_code=400, detail="La categoría ya existe")

    new_category = Category(**category.dict())

    db.add(new_category)
    db.commit()
    db.refresh(new_category)
    
    return new_category
