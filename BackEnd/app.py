from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import json
import bcrypt
from google.cloud import vision
import io
import base64
import wikipedia

app = Flask(__name__)
CORS(app)

cred_path = "Credentials/google-cloud-vision-api.json"

dbClient = MongoClient('mongodb+srv://abhay452002:AbhayDev45@userdata.o3rpjed.mongodb.net/?retryWrites=true&w=majority')

db = dbClient.get_database("user")

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
        
def detect_landmark(file):
    client = vision.ImageAnnotatorClient.from_service_account_json(cred_path)
    content = base64.b64decode(file)
    image = vision.Image(content=content)
    
    response = client.landmark_detection(image=image).landmark_annotations
    
    if not response:
        title = "Could not detect, Try again"
        latitude = "0"
        longitude = "0"
        return title, latitude, longitude
    
    title = response[0].description
    latitude = response[0].locations[0].lat_lng.latitude
    longitude = response[0].locations[0].lat_lng.longitude

    return title, latitude, longitude


def get_information(title):
    if title == "Could not detect, Try again":
        wiki_title = "NA"
        summary = "NA"
        wiki_url = "NA"
        image_link = "NA"
        status = "Failed"
        return wiki_title, summary, wiki_url, image_link, status
    
    wiki_title = wikipedia.search(title)[0]
    summary = wikipedia.summary(wiki_title)
    wiki_url = wikipedia.page(title).url
    image_link = wikipedia.page(wiki_title).images[0]
    status = "Success"

    return wiki_title, summary, wiki_url, image_link, status


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

@app.route('/getResults', methods=["GET", "POST"])
def results_endpoint():
    data = request.get_json()
    title, latitude, longitude = detect_landmark(data['base_64'])
    wiki_title, summary, wiki_url, image_link, status = get_information(title)

    return {
        "status": status,
        "title": title,
        "latitude": latitude,
        "longitude": longitude,
        "wiki_title": wiki_title,
        "summary": summary,
        "wiki_url": wiki_url,
        "image_link": image_link
    }

if __name__ == "__main__":
    app.run()