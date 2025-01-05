from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Numeric
from sqlalchemy.orm import relationship
from app.database.database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    UserID = Column(Integer, primary_key=True, index=True)
    Username = Column(String(50), nullable=False, unique=True)
    Email = Column(String(100), nullable=False, unique=True)
    PasswordHash = Column(String(255), nullable=False)
    CreatedAt = Column(DateTime, default=datetime.utcnow)
    UpdatedAt = Column(DateTime, default=datetime.utcnow)
    IsActive = Column(Boolean, default=True)

    roles = relationship("UserRole", back_populates="user")


class Role(Base):
    __tablename__ = "roles"

    RoleID = Column(Integer, primary_key=True, index=True)
    RoleName = Column(String(50), nullable=False, unique=True)

    user_roles = relationship("UserRole", back_populates="role")


class UserRole(Base):
    __tablename__ = "userroles"

    UserRoleID = Column(Integer, primary_key=True, index=True)
    UserID = Column(Integer, ForeignKey("users.UserID"), nullable=False)
    RoleID = Column(Integer, ForeignKey("roles.RoleID"), nullable=False)

    user = relationship("User", back_populates="roles")
    role = relationship("Role", back_populates="user_roles")


class Product(Base):
    __tablename__ = "products"

    ProductID = Column(Integer, primary_key=True, index=True)
    Name = Column(String(100), nullable=False)
    Description = Column(String(255), nullable=True)
    Price = Column(Numeric(10, 2), nullable=False)
    ImageURL = Column(String(255), nullable=True)
    CreatedAt = Column(DateTime, default=datetime.utcnow)
    UpdatedAt = Column(DateTime, default=datetime.utcnow)

    categories = relationship("ProductCategory", back_populates="product")


class Category(Base):
    __tablename__ = "categories"

    CategoryID = Column(Integer, primary_key=True, index=True)
    CategoryName = Column(String(100), nullable=False, unique=True)

    product_categories = relationship("ProductCategory", back_populates="category")


class ProductCategory(Base):
    __tablename__ = "productcategories"

    ProductCategoryID = Column(Integer, primary_key=True, index=True)
    ProductID = Column(Integer, ForeignKey("products.ProductID"), nullable=False)
    CategoryID = Column(Integer, ForeignKey("categories.CategoryID"), nullable=False)

    product = relationship("Product", back_populates="categories")
    category = relationship("Category", back_populates="product_categories")

