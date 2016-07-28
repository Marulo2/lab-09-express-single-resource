'use strict';




let appError = module.exports = exports = function(statusCode, message, errCb) {
  return function(error) {
    errCb({error, statusCode, message, type: 'AppError'});
  };
};




//
// const appError = module.exports = function(message, statusCode, resMessage){
//   this.message = message;
//   this.statusCode = statusCode;
//   this.resMessage = resMessage;
// };

// appError.prototype.respond = function(res){
//   res.status(this.statusCode).json(this.message);
// };
//
// appError.hasError = function(err){
//   return err instanceof appError;
// };
//
// appError.error400 = function(message){
//   return new appError(message, 400, 'Lame request!!!!');
// };
//
// appError.error404 = function(message){
//   return new appError(message, 404, 'not found!!!');
// };
//
// appError.error500 = function(message){
//   return new appError(message, 500, 'server error!!!!');
// };
