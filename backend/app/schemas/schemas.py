from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

# User schemas
class UserBase(BaseModel):
    Username: str
    Email: EmailStr
    IsActive: Optional[bool] = True

class UserCreate(UserBase):
    Password: str

class UserOut(UserBase):
    UserID: int
    CreatedAt: datetime

    class Config:
        orm_mode = True


# Role schemas
class RoleBase(BaseModel):
    RoleName: str

class RoleOut(RoleBase):
    RoleID: int

    class Config:
        orm_mode = True


# UserRole schemas
class UserRoleBase(BaseModel):
    UserID: int
    RoleID: int

class UserRoleOut(UserRoleBase):
    UserRoleID: int

    class Config:
        orm_mode = True


# Product schemas
class ProductBase(BaseModel):
    Name: str
    Description: Optional[str] = None
    Price: float
    ImageURL: Optional[str] = None

class ProductCreate(ProductBase):
    pass

class ProductOut(ProductBase):
    ProductID: int
    CreatedAt: datetime
    UpdatedAt: datetime

    class Config:
        orm_mode = True


# Category schemas
class CategoryBase(BaseModel):
    CategoryName: str

class CategoryOut(CategoryBase):
    CategoryID: int

    class Config:
        orm_mode = True


# ProductCategory schemas
class ProductCategoryBase(BaseModel):
    ProductID: int
    CategoryID: int

class ProductCategoryOut(ProductCategoryBase):
    ProductCategoryID: int

    class Config:
        orm_mode = True
