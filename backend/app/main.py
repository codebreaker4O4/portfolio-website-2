from flask import Flask
from flask_cors import CORS
from app.routes.project_routes import project_bp


app = Flask(__name__)
CORS(app)

app.register_blueprint(project_bp, url_prefix='/api')