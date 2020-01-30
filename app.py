import pandas as pd
import psycopg2
import sqlalchemy
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
import numpy as np
from pprint import pprint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float 
import pprint
import  json  

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

POSTGRES_ADDRESS = 'localhost' 
POSTGRES_PORT = '5432'
POSTGRES_USERNAME = 'postgres' 
POSTGRES_PASSWORD = 'dd'  
POSTGRES_DBNAME = 'diagnostiya' 
postgres_str = ('postgresql://{username}:{password}@{ipaddress}:{port}/{dbname}'.format(username=POSTGRES_USERNAME,password=POSTGRES_PASSWORD,ipaddress=POSTGRES_ADDRESS,port=POSTGRES_PORT,dbname=POSTGRES_DBNAME))

Base = declarative_base()
engine = create_engine(postgres_str)
conn = engine.connect()

app = Flask (__name__)




@app.route("/")
def home():
    conn.execute("DELETE FROM particulares_livianos WHERE anio = 2021;")

    df_particulares_livianos = pd.read_sql_query('''SELECT * FROM particulares_livianos;''', engine)

    df_part_livianos = df_particulares_livianos.to_dict(orient ="records")
    
    #global df_part_livianos
    #part_livianos = {"particulares_livianos": df_part_livianos}
    return render_template("index.html", response = df_part_livianos )




if __name__ == '__main__':
    app.run(debug=True)
