from email import message
from flask import Blueprint, request, jsonify
from app.services.db_service import get_all_projects

project_bp = Blueprint('projects', __name__)

@project_bp.route('/projects', methods=['GET'])
def fetch_projects():
    try:
        projects = get_all_projects()
        return jsonify(projects), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@project_bp.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    if not name or not email or not message:
        return jsonify({"error": "All fields are required"}), 400
    
    print(f"Contact form submitted by {name} ({email}): {message}")
    return jsonify({"message": "Thanks for reaching out"}), 200