import random
from flask import Flask, Response
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return Response(str('{"x":%d,"y":%d}' % (random.randint(0, 100), random.randint(0, 100))), mimetype="text/plain")