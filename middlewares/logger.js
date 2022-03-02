function logger(req, res, next) {
  console.log(
    `Method =  ${req.method}  Host = ${req.hostname} URL = ${req.baseUrl} ORIGINAL URL = ${req.originalUrl}`,
  );
  next();
}

export { logger };
