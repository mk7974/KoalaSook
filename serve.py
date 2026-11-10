import http.server
import json
import os
import sys

PORT = 8096
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KoalaSook.Server", "koalasook-web")

class KoalaSookHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        if self.path == "/System/Info/Public":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            info = {
                "ProductName": "Koala Sook Server",
                "Version": "12.1.0",
                "LocalAddress": f"http://127.0.0.1:{PORT}",
                "Id": "KS-SERVER-PRIMARY",
                "ServerName": "KoalaSook-Host"
            }
            self.wfile.write(json.dumps(info).encode("utf-8"))
            return
        elif self.path == "/api-docs/swagger" or self.path == "/api-docs":
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            self.wfile.write(b"<html><head><title>KoalaSook API</title></head><body style='background:#090c10;color:#00d2ff;font-family:sans-serif;padding:40px;text-align:center;'><h2>Koala Sook API Engine</h2><p>REST & WebSocket services active on port 8096.</p><a href='/' style='color:#fff;'>&larr; Return to Web Client</a></body></html>")
            return
        elif self.path == "/api-docs/koalasook.svg":
            self.send_response(200)
            self.send_header("Content-Type", "image/svg+xml")
            self.end_headers()
            svg = b'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#00d2ff"/></svg>'
            self.wfile.write(svg)
            return

        super().do_GET()

    def log_message(self, format, *args):
        sys.stdout.write(f"[KoalaSook-Web] {self.address_string()} - {format % args}\n")
        sys.stdout.flush()

if __name__ == "__main__":
    server = http.server.ThreadingHTTPServer(("0.0.0.0", PORT), KoalaSookHandler)
    print(f"Koala Sook Web Server running at http://127.0.0.1:{PORT}/")
    print(f"Serving media frontend from: {DIRECTORY}")
    sys.stdout.flush()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        server.server_close()

