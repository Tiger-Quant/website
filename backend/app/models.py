from . import db
import uuid

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(80), unique=True, nullable=False)
	public_id = db.Column(db.String(36), unique=True, nullable=False, default=lambda: str(uuid.uuid4()))

	alpaca_api_key_encrypted = db.Column(db.LargeBinary, nullable=True)
	alpaca_secret_key_encrypted = db.Column(db.LargeBinary, nullable=True)

	def __repr__(self):
		return f'<User {self.username}>'
