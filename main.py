from flask import Flask, request, jsonify
from flask_cors import CORS #to fix error that blocked requests between different ports 

app = Flask(__name__) #create flask application
CORS(app) #enables CORS for all routes

#route for post request that will return AI response in JSON
@app.route("/generate-meal", methods=["POST"])
def generate_response():
    data = request.get_json()#get json data from post request 
    return jsonify(data), 201


#run flask application/server
if __name__ == "__main__":
    app.run(debug=True)
