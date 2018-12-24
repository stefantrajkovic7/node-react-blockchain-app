module.exports = app => {

    /**
     * @BlocksApiRoutes
     */
    app.use('/api/v1/blocks', require('../api/v1/blocks'));

};