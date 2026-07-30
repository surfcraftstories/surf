import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("dist/client");
const backend = { hostname: "127.0.0.1", port: 3001 };
const mime = {".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",".json":"application/json; charset=utf-8",".ico":"image/x-icon",".woff":"font/woff",".woff2":"font/woff2"};

function staticFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const target = path.resolve(root, "." + clean);
  if (!target.startsWith(root + path.sep) && target !== root) return null;
  try { return fs.statSync(target).isFile() ? target : null; } catch { return null; }
}

const server = http.createServer((req, res) => {
  const file = staticFile(req.url || "/");
  if (file) {
    res.writeHead(200, {"Content-Type": mime[path.extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control":"no-cache"});
    fs.createReadStream(file).pipe(res);
    return;
  }
  const proxy = http.request({ ...backend, method:req.method, path:req.url, headers:{...req.headers, host:`${backend.hostname}:${backend.port}`} }, upstream => {
    res.writeHead(upstream.statusCode || 502, upstream.headers);
    upstream.pipe(res);
  });
  proxy.on("error", () => { res.writeHead(502,{"Content-Type":"text/plain; charset=utf-8"}); res.end("Podgląd uruchamia się — odśwież stronę za chwilę."); });
  req.pipe(proxy);
});
server.listen(3000,"127.0.0.1",()=>console.log("Surfcraftstories preview: http://127.0.0.1:3000"));
