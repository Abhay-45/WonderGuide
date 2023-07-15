from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient
import json
import bcrypt

app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb+srv://abhay452002:AbhayDev45@userdata.o3rpjed.mongodb.net/?retryWrites=true&w=majority')

db = client.get_database("user")

def register(email, password):
    if db.users.find_one({"email":email}) == None:
        hashpwd = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        k = {"email":email, "password":hashpwd}
        db.users.insert_one(k)
        return {"status":"success"}
    else:
        return {"status":"failed"}
    
def login(email, password):
    if db.users.find_one({"email":email}) == None:
        return {"status":"failed"}
    else:
        hashpwd = db.users.find_one({"email":email})['password']
        if bcrypt.checkpw(password.encode('utf-8'), hashpwd):
            return {"status":"success"}
        else:
            return {"status":"failed"}

@app.route('/register', methods=["GET", "POST"])
def register_endpoint():
    data = request.json
    result = register(data['email'], data['password'])
    return result

@app.route('/login', methods=["GET", "POST"])
def login_endpoint():
    data = request.json
    result = login(data['email'], data['password'])
    return result


if __name__ == "__main__":
    app.run()