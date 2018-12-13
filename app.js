const express = require('express');
const app = express();
app.use(express.json());
const itemRoutes = require('./routes');
app.use('/items', itemRoutes);

//Catch 404 error
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

// Error Handler should be here
app.use(function(err, req, res, next) {
  let status = err.status || 500;
  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});

// Put app.listen at bottom
app.listen(3000, () => console.log('App on port 3000'));
