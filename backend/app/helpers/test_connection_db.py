from sqlalchemy import create_engine

DATABASE_URL = "mssql+pyodbc://sa:srr09srr.-@DESKTOP-GL07V03/DFORTUNESKY?driver=ODBC+Driver+17+for+SQL+Server"

try:
    engine = create_engine(DATABASE_URL)
    connection = engine.connect()
    print("¡Conexión exitosa a SQL Server!")
    connection.close()
except Exception as e:
    print("Error al conectar a SQL Server:", e)

# app-coco-aromas/backend> python test_connection.py
