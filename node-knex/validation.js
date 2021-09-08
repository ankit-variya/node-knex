const Joi = require("joi");

exports.postsValidationSchema = Joi.object().keys({
    title: Joi.string()
        .min(3)
        .max(100)
        .error(new Error('add valid title'))
        .required(),
    description: Joi.string()
        .max(1000)
        .error(new Error('add your description'))
        .required(),
});


exports.ratingValidationSchema = Joi.object().keys({
    rating: Joi.number()
        .error(new Error('add your rating'))
        .required(),
    postId: Joi.number()
        .error(new Error('add your postId'))
        .required(),
});