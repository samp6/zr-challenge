# zr-challenge

Thank you for the opportunity to take this challenge! 
I have plenty of experience with creating APIs, working with DBs, and working in AWS, but this was my first attempt at all those things at once. The infrastructure had a small learning curve to work with, but with some help from the internet it was easy enough to get going. 

Here is a link to my postman collection: https://www.getpostman.com/collections/7a5d07bd338c2c4ee289

And here is the publicly accessible endpoint for AWS: https://o7yy09xid9.execute-api.us-east-1.amazonaws.com/zr-challenge/events

The code is also available to view in each Lambda function. 

The Postman collection has one request per operation. To test it, I would view the DB within the DynamoDB service in AWS, then run Create, Get, Update, Get, Delete, and Get in that order. This will create an entry, update said entry, then delete it. 

Some things I would do if I had more time to work:
- some sort of procedure for generating ids, or something less manual
- currently you need all data for POST, so it's technically no different than put. It would not be that much more difficult to create the query strings programatically based on which params the user wants to update, but I left it off in the interest of time
- going along with the first point, I'm doing everything off the /events endpoint, but I would like to move that towards an id-based structure (also so we can get single entries)

I really enjoyed working on this, and really appreciate your time. I look forward to hearing back. Thank you!
