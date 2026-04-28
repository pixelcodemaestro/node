from flask import Flask, jsonify, request
import json
import os

app = Flask(__name__)

DATA_FILE = "users.json"

# Load users from file (or start empty)
def load_users():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r") as f:
            return json.load(f)
    return []

# Save users to file
def save_users(users):
    with open(DATA_FILE, "w") as f:
        json.dump(users, f, indent=2)

# GET - Fetch all users
@app.route('/users', methods=['GET'])
def get_users():
    users = load_users()
    return jsonify(users)

# GET - Fetch one user
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    users = load_users()
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

# POST - Add a new user
@app.route('/users', methods=['POST'])
def add_user():
    users = load_users()
    data = request.json
    new_user = {"id": len(users) + 1, "name": data["name"], "age": data["age"]}
    users.append(new_user)
    save_users(users)   # 💾 saves to users.json
    return jsonify(new_user), 201

if __name__ == '__main__':
    app.run(debug=True)