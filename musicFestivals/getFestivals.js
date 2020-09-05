exports.handler = (event, context, callback) => {
    console.log('event', event);
    console.log('787878');
    // callback(error, success)
    // This tells the lambda to response back to the client    
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World'
        })
    });
};
