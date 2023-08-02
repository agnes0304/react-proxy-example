const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/book', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:3080', 
      changeOrigin: true, 
    })
  );

  app.use(
    '/api/books', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:3080', 
      changeOrigin: true, 
    })
  );

  app.use(
    '/api2/todo', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:3070', 
      changeOrigin: true, 
    })
  );
  
  app.use(
    '/api2/todos', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:3070', 
      changeOrigin: true, 
    })
  );
};