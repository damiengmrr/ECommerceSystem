import http.server
import socketserver
import os

PORT = 8080

# Définit le répertoire de travail à "web"
os.chdir("web")

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serveur lancé sur : http://localhost:{PORT}")
    httpd.serve_forever()