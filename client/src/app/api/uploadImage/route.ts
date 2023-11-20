// pages/api/upload.js
// @ts-nocheck
import AWS from 'aws-sdk';
import formidable from 'formidable-serverless';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const file = files.file[0];
      const fileStream = fs.createReadStream(file.filepath);

      const uploadParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: file.newFilename, // or any custom filename
        Body: fileStream,
      };

      s3.upload(uploadParams, function (s3Err, data) {
        if (s3Err) {
          return res.status(500).json({ error: s3Err.message });
        }
        res.status(200).json({ url: data.Location });
      });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
