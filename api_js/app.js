const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'users.json');

// Middleware - allows reading JSON from requests
app.use(express.json());

// ─── Helper Functions ───────────────────────────────────────

// Load users from file
function loadUsers() {
    if (fs.existsSync(DATA_FILE)) {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    }
    return [];
}

// Save users to file
function saveUsers(users) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

// ─── Routes ─────────────────────────────────────────────────

// ✅ GET - Fetch all users
app.get('/users', (req, res) => {
    const users = loadUsers();
    res.json(users);
});

// ✅ GET - Fetch one user
app.get('/users/:id', (req, res) => {
    const users = loadUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

// ✅ POST - Add new user
app.post('/users', (req, res) => {
    const users = loadUsers();
    const { name, age } = req.body;
    const newUser = {
        id: users.length + 1,
        name: name,
        age: age
    };
    users.push(newUser);
    saveUsers(users);
    res.status(201).json(newUser);
});

// ✅ PUT - Update existing user
app.put('/users/:id', (req, res) => {
    const users = loadUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    const { name, age } = req.body;
    if (name) user.name = name;
    if (age) user.age = age;
    saveUsers(users);
    res.json(user);
});

// ✅ DELETE - Remove a user
app.delete('/users/:id', (req, res) => {
    let users = loadUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    users = users.filter(u => u.id !== parseInt(req.params.id));
    saveUsers(users);
    res.json({ message: `User ${req.params.id} deleted successfully` });
});

// ─── Start Server ────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});