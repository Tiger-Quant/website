from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()

def create_app():
	app = Flask(__name__, instance_relative_config=True)

	app.config.from_mapping(
		SECRET_KEY = 'dev',
		SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'
	)

	db.init_app(app)
	migrate = Migrate(app, db)

	from . import models
	from .routes import main as main_blueprint
	app.register_blueprint(main_blueprint)

	return app
