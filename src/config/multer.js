const crypto = require('crypto')
const multer = require('multer')
const appConfig = require('./app')
const path = require('path')

module.exports = {
  storage: multer.diskStorage({
    destination: appConfig.ImagesPath || path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, raw) => {
        if (err) return cb(err)
        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
