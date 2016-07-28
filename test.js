'use strict'

const imageSizeStream = require('image-size-stream')
const through = require('through2')
const fs = require('fs')

const s = fs.createReadStream('./img.jpg')
s.pipe(through())
const is = imageSizeStream({ limit: Infinity })

const timeout = setTimeout(function () {
  console.error('didn\'t work')
  process.exit(1)
}, 1000)

s.pipe(is).on('size', function (size) {
  console.log('worked')
  console.log(size)
  clearTimeout(timeout)
})
