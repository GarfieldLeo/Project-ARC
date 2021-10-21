var AWS = require('aws-sdk');
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

const s3CreatingBucket = (bucketName) => {
    s3.createBucket(bucketName, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Location);
      }
    });
};
// call S3 to create the bucket


module.exports = "s3CreatingBucket";