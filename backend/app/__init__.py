from flask import Flask

def create_app():
	app = Flask(__name__, instance_relative_config=True)

	@app.route('/api/hello')
	def hello():
		return {'message': 'Hello from the backend!'}

	return app
