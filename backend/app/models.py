from . import db

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(80), unique=True, nullable=False)
	password_hash = db.Column(db.String(128), nullable=False)

	alpaca_api_key_encrypted = db.Column(db.LargeBinary, nullable=True)
	alpaca_secret_key_encrypted = db.Column(db.LargeBinary, nullable=True)

	def __repr__(self):
		return f'<User {self.username}>'
