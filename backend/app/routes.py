from flask import request, jsonify, Blueprint
from . import db
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash

main = Blueprint('main', __name__)

@main.route('/api/register', methods=['POST'])
def register():
	data = request.get_json()
	if not data:
		return jsonify({'message': 'No input data provided'}), 400

	username = data.get('username')
	password = data.get('password')

	# VALIDATION
	if not username or not password:
		return jsonify({'message': 'Username and password are required'}), 400

	if User.query.filter_by(username=username).first():
		return jsonify({'message': 'Username already exists'}), 409

	# Create new user
	hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
	new_user = User(username=username, password_hash=hashed_password)

	db.session.add(new_user)
	db.session.commit()

	return jsonify({'message': 'New user created successfully'}), 201
