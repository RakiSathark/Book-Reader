// Modules required

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

// Dictionary holding file content types
const fileTypes = {
  // Audio and Video Types
  "ogg" : "video/ogg",
  "mp4" : "video/mp4",
  "mp3" : "audio/mpeg",
  // Image Types
  "jpeg" : "image/jpeg",
  "jpg" : "image/jpeg",
  "png" : "image/png",
  "gif" : "image/gif",
  // Text Types
  "html" : "text/html",
  "css" : "text/css",
  "js" : "text/javascript",
  "txt" : "text",
  "json" : "application/json",
  // Application Types
  "pdf" : "application/pdf"
};

// Hostname and Port
const hostname = '127.0.0.1';
const port = 3000;

// Create Server
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    var uri = url.parse(req.url).pathname;
    // Current working directory + identifier
    var fileName = path.join(process.cwd().replace(/\\/g,"/"), unescape(uri));
    var stats;

    try {
      stats = fs.lstatSync(fileName);
    } catch(e) {
      // If file is not found
      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.write('404 file not Found');
      res.end();
      return;
    }
    // Check if the object is a file or directory
    if(stats.isFile()) {
      var fileType = fileTypes[path.extname(fileName).split('.').reverse()[0]];
      res.statusCode = 200;
      res.setHeader('Content-Type', fileType);
      var fileStream = fs.createReadStream(fileName);
      fileStream.pipe(res);
    } else if(stats.isDirectory()) {
      res.statusCode = 300;
      res.setHeader('Location', '');
      res.end();
    } else {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end();
    }
  }
});

// Run the server
server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port);
});