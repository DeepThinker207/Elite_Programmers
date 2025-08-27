import os

class Config:
    # Security
    SECRET_KEY = os.environ.get("SECRET_KEY") or "dev_secret_key_change_me"

    # Database
    SQLALCHEMY_DATABASE_URI = (
        os.environ.get("DATABASE_URL") or "sqlite:///elite_programmers.db"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
