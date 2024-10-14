import flask
from flask import request, jsonify

#setup an app
app = flask.Flask(__name__)

#see errors in browser
app.config['DEBUG'] = True 

@app.route('/', methods=['GET'])
def home():
    return f"<h1> Hello, this is a route example. </h1>"

#starts the app
app.run()