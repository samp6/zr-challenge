const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    
    let responseText = "";
    let statusCode = 0;
    
    const { id } = event;

    const params = {
        TableName: "zr-table",
        Key: {
            id: id,
        }
    };
    
    try {
        const data = await documentClient.delete(params).promise();
        responseText = JSON.stringify(data);
        statusCode = 200;
    } catch(error) {
        responseText = "Error deleting: " + error;
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