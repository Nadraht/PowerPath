import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# 1. Load the .env file
load_dotenv()

# 2. Set the URL (Prioritizes .env but has a hardcoded fallback)
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL") or "postgresql://postgres.pkbojtncpyjukturvrwm:Awggffrtxsw55&@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"

# 3. Create the engine with "Pre-Ping" 
# This checks if the connection is alive before every request
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_pre_ping=True,
    pool_recycle=3600,
    connect_args={"sslmode": "require"} # Security requirement for Supabase
)

# 4. Session and Base setup
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# 5. Dependency for FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()