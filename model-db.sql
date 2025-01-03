USE [app-coco-aromas];

CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL UNIQUE,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE(),
    IsActive BIT DEFAULT 1
);

CREATE TABLE Roles (
    RoleID INT PRIMARY KEY IDENTITY(1,1),
    RoleName NVARCHAR(50) NOT NULL UNIQUE
);

-- Insertar roles iniciales
INSERT INTO Roles (RoleName) VALUES 
('Administrador'),
('Empleado'),
('Comprador');

CREATE TABLE UserRoles (
    UserRoleID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT NOT NULL,
    RoleID INT NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID),
    CONSTRAINT UC_UserRole UNIQUE (UserID, RoleID) -- Evitar duplicados
);

--SELECT * FROM [dbo].[Roles]
--SELECT * FROM [dbo].[UserRoles]

CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255),
    Price DECIMAL(10, 2) NOT NULL,
    ImageURL NVARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE()
);

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY(1,1),
    CategoryName NVARCHAR(100) NOT NULL UNIQUE
);

-- Insertar categorías iniciales
INSERT INTO Categories (CategoryName) VALUES 
('Aromas'),
('Decoración'),
('Accesorios');


CREATE TABLE ProductCategories (
    ProductCategoryID INT PRIMARY KEY IDENTITY(1,1),
    ProductID INT NOT NULL,
    CategoryID INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID),
    CONSTRAINT UC_ProductCategory UNIQUE (ProductID, CategoryID) -- Evitar duplicados
);

/*

--Listar productos con sus categorías:

SELECT p.ProductID, p.Name, c.CategoryName
FROM Products p
INNER JOIN ProductCategories pc ON p.ProductID = pc.ProductID
INNER JOIN Categories c ON pc.CategoryID = c.CategoryID;
Listar usuarios con sus roles:

--Listar usuarios con sus roles
SELECT u.Username, r.RoleName
FROM Users u
INNER JOIN UserRoles ur ON u.UserID = ur.UserID
INNER JOIN Roles r ON ur.RoleID = r.RoleID;



*/