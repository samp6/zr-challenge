const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    
    let responseText = "";
    let statusCode = 0;
    const { id, organizer, venue, date } = event;
    
    const params = {
        TableName: "zr-table",
        Item: {
            id: id,
            organizer: organizer,
            venue: venue,
            date: date
        }
    };
    
    try {
        const data = await documentClient.put(params).promise();
        responseText = JSON.stringify(data);
        statusCode = 200;
    } catch(error) {
        responseText = "Error creating: " + error;
        statusCode = 403;
    }
    
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: responseText,
    };
    
    return response;
};