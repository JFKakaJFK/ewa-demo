import random
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()

        json = '{"x":%d,"y":%d}' % random.randint(0, 100), random.randint(0,100)

        self.wfile.write(json)
        return
