from flask import Flask, request, jsonify
from flask_cors import CORS #to fix error that blocked requests between different ports 
import ollama

app = Flask(__name__) #create flask application
CORS(app) #enables CORS for all routes

#route for post request that will return AI response in JSON
@app.route("/generate-meal", methods=["POST"])
def generate_response():
    data = request.get_json()#get json data from post request 
    ingredientsArray = data["ingredients"] #get ingredients array
    ingredients = ', '.join(ingredientsArray) #convert list of ingredients into one string seperated by comma

    ollamaClient = ollama.Client() #initialize ollama client 
    
    #define model and prompt 
    model = "llama3"
    prompt = "Make me a meal with these given ingredients: " + ingredients

    response = ollamaClient.generate(model=model, prompt=prompt) 

    #return LLM response using python dictionary
    dictionary = {
        "jsonResponse": response.response 
    }

    return jsonify(dictionary), 201
    



#run flask application/server
if __name__ == "__main__":
    app.run(debug=True)
