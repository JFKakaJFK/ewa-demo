import random
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','application/json')
        self.end_headers()
        # self.wfile.write(str('{"x":' + random.randint(0, 100) + ',"y":' + random.randint(0, 100) + '}').encode())
        self.wfile.write(str('{"x":%d,"y":%d}' % (random.randint(0, 100), random.randint(0, 100))).encode())
        return
