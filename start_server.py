import http.server
import socketserver
import ssl
import os

PORT = 9090

os.chdir("web")

Handler = http.server.SimpleHTTPRequestHandler

httpd = socketserver.TCPServer(("", PORT), Handler)

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(certfile="../cert.pem", keyfile="../key.pem")

httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print(f"Serveur HTTPS lancé sur : https://localhost:{PORT}")
httpd.serve_forever()
