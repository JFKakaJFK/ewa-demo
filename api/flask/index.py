from flask import Flask
app = Flask(__name__)

@app.route('/')
def index(path):
    return '{"x":123,"y":345}'