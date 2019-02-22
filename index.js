const htmlDocx = require('html-docx-js')
const save = require('save-file')
const Inliner = require('inliner')

const url = ''

new Inliner(url, function (error, html) {
  // compressed and inlined HTML page
  const converted = htmlDocx.asBlob(html)
  save(converted, 'test.docx')
})
