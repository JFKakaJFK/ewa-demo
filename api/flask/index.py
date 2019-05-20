import datetime
from flask import Flask, Response, __version__
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def getTime(path):
    return Response("%s" % datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), mimetype='text/html')