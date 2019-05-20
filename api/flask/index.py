import datetime
from flask import Flask, Response, __version__
app = Flask(__name__)

@app.route('/')
def catch_all(path):
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")