import http.server
from multiprocessing.dummy import Pool as ThreadPool

class server_http:
    def __init__():
        self.pool = ""
        self.port = ""
        self.bind = ""
        self.cgi = ""

    def server(self, port=8009, bind='127.0.0.1', cgi=True):
        if cgi==True:
            http.server.test(HandlerClass=http.server.CGIHTTPRequestHandler, port=port, bind=bind)
        else:
            http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler,port=port,bind=bind)

    def start_server(self, port="", bind="", cgi=""):
        self.pool = ThreadPool(1)
        results = self.pool.starmap(function, server(port, bind, cgi))


    def close_server(self):
        self.pool.close()
        self.pool.join()

if __name__ == '__main__':
    main()
