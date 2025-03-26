from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

# Données simulées
users = {}
products = {}
orders = {}
carts = {}

@app.route('/users/register', methods=['POST'])
def register_user():
    data = request.get_json()
    user_id = str(uuid.uuid4())
    users[user_id] = {
        "username": data['username'],
        "email": data['email'],
        "password": data['password'],
        "order_history": []
    }
    return jsonify({"message": "Utilisateur enregistré", "user_id": user_id})

@app.route('/', methods=['GET'])
def home():
    return 'Bienvenue sur l’API Dior-Commerce 🛍️'

if __name__ == "__main__":
    app.run(debug=True)
