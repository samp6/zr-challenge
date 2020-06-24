const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    
    let responseText = "";
    let statusCode = 0;
    
    const params = {
        TableName: "zr-table",
    };
    
    try {
        const data = await documentClient.scan(params).promise();
        responseText = JSON.stringify(data.Items);
        statusCode = 200;
    } catch(error) {
        responseText = "Error getting: " + error;
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