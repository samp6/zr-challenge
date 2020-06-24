const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    
    let responseText = "";
    let statusCode = 0;
    const { id, organizer, venue, date } = event;
    
    const params = {
        TableName: "zr-table",
        Key: {
            id: id
        }, 
        UpdateExpression: "set organizer = :var1, venue = :var2, #d = :var3",
        ExpressionAttributeValues: {
            ":var1": organizer,
            ":var2": venue,
            ":var3": date
        },
        ExpressionAttributeNames: {
            "#d": "date"
        },
        ReturnValues: "UPDATED_NEW"
    };
    
    try {
        const data = await documentClient.update(params).promise();
        responseText = JSON.stringify(data);
        statusCode = 200;
    } catch(error) {
        responseText = "Error updating: " + error;
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