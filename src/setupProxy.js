const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  // app.use(proxy("/data", { target: "http://localhost:8888", changeOrigin: true }));
  // app.use(proxy("", {target: "", changeOrigin: true}));
};