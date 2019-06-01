from flask import Flask, make_response
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return make_response('{"x":123,"y":345}', 200)