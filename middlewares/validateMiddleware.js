// validateMiddleware.js

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        details: error.details.map(d => d.message)
      });
    }
    next();
  };
};

module.exports = validate;
