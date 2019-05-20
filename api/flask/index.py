import datetime
from flask import Flask, Response, __version__
app = Flask(__name__)

@app.route('/api/flask/')
def getTime(path):
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")