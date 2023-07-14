from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient
import json

app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb+srv://abhay452002:AbhayDev45@userdata.o3rpjed.mongodb.net/?retryWrites=true&w=majority')

db = client.get_database("user")

def register(email, password):
    if db.users.find_one({"email":email}) == None:
        # hashp = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        k = {"email":email, "password":password}
        db.users.insert_one(k)
        return {"status":"success"}
    else:
        return {"status":"failed"}

@app.route('/register', methods=["GET", "POST"])
def register_endpoint():
    data = request.json
    result = register(data['email'], data['password'])
    print(result)
    return result


if __name__ == "__main__":
    app.run()