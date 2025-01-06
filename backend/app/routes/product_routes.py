from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.models import Product
from app.schemas.schemas import ProductCreate, ProductOut

router = APIRouter()

# Obtener todos los productos
@router.get("/", response_model=list[ProductOut])
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

# Crear un nuevo producto
@router.post("/", response_model=ProductOut)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):

    new_product = Product(**product.dict())

    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

# Actualizar un producto
@router.put("/{product_id}", response_model=ProductOut)
def update_product(product_id: int, product: ProductCreate, db: Session = Depends(get_db)):

    db_product = db.query(Product).filter(Product.ProductID == product_id).first()

    if not db_product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")

    for key, value in product.dict().items():
        setattr(db_product, key, value)

    db.commit()
    db.refresh(db_product)
    return db_product

# Eliminar un producto
@router.delete("/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):

    db_product = db.query(Product).filter(Product.ProductID == product_id).first()

    if not db_product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
        
    db.delete(db_product)
    db.commit()
    return {"detail": "Producto eliminado"}
