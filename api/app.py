from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
users = [
    {"id": 1, "name": "Alice", "age": 25},
    {"id": 2, "name": "Bob", "age": 30},
]

# GET - Fetch all users
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

# GET - Fetch one user by ID
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

# POST - Add a new user
@app.route('/users', methods=['POST'])
def add_user():
    data = request.json
    new_user = {"id": len(users) + 1, "name": data["name"], "age": data["age"]}
    users.append(new_user)
    return jsonify(new_user), 201

if __name__ == '__main__':
    app.run(debug=True)


import sqlite3

def save_user(name, age):
    conn = sqlite3.connect("users.db")  # saves to a file
    conn.execute("INSERT INTO users (name, age) VALUES (?, ?)", (name, age))
    conn.commit()
    conn.close()