#!/usr/bin/env node
var open = require('open')

start()
function start() {
  var query = getQuery()
  var url = 'http://nodejs.org/api/' + query + '.html'
  open(url)
}

function getQuery() {
  var argv = process.argv
  if (argv.length < 3) {
    throw new Error('no documentation term supplied')
  }

  var query = argv[2]
  return query
}
