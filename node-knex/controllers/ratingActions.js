const express = require('express');
var router = express.Router();
const { insert, findById, list, update, deletedata } = require('../models/commonModel');
const { ratingValidationSchema } = require('../validation');
const Joi = require("joi");

let tableName = 'ratings';
let validationSchema;

const validate = async (body) => {
    validationSchema = ratingValidationSchema;

    if (typeof validationSchema != "undefined") {
        const validateData = validationSchema.validate(body);
        console.log('---validateData', validateData)
        if (validateData.error && validateData.error !== null)
            return validateData.error.message;
    }
}

router.post('/create', async (req, res, next) => {

    try {
        const body = req.body;
        const postObj = {
            rating: body.rating,
            postId: body.postId
        }

        let validData = await validate(body);
        if (validData != 'undefined') throw new Error(validData);
        // let validation = 
        const insertedData = await insert(tableName, postObj);
        if (!insertedData.data) throw new Error('data is not inserted');

        const record = await findById(tableName, { 'id': insertedData.data[0] })
        console.log('record', record)

        res.send({
            data: record.data
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    }
});

router.get('/list', async (req, res) => {
    try {
        const listData = await list(tableName);
        if (!listData.data) throw new Error('data is not found');
        res.send({
            data: listData.data
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    }
})

router.put('/update', async (req, res) => {
    try {
        const body = req.body;
        const updateObj = {
            rating: body.rating,
            postId: body.postId
        }
        const finddata = await findById(tableName, { 'id': body.id })
        if (!finddata.data) throw new Error('data is not find');

        const updateData = await update(tableName, { 'id': body.id }, updateObj);
        if (!updateData.data) throw new Error('data is not updated');

        const record = await findById(tableName, { 'id': updateData.data })

        res.send({
            data: record.data
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    }
})

router.delete('/delete', async (req, res) => {
    try {
        const body = req.body;
        const finddata = await findById(tableName, { 'id': body.id })
        if (!finddata.data) throw new Error('data is not find');

        const deleteData = await deletedata(tableName, { 'id': body.id });
        if (!deleteData.data) throw new Error('data is not deleted');

        res.send({
            data: 'record successfully deleted'
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    }
})

module.exports = router;