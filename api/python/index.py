import random
# import json
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','application/json')
        self.end_headers()
        # self.wfile.write(json.dumps({'x': random.randint(0, 100), 'y': random.randint(0,100)}))
        #self.wfile.write(json.dumps({'hello': 'world', 'received': 'ok'}))
        self.wfile.write('{"x":"' + random.randint(0, 100) + '","y":"' + random.randint(0, 100) + '"}')
        return
