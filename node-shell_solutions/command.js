'use strict';

const fs = require('fs');
const request = require('request');

function pwd (args, done) {
  done(process.cwd());
}

function date (args, done) {
  done(Date());
}

function ls (args, done) {
  fs.readdir('.', function (err, filenames) {
    if (err) throw err;
    done(filenames.join('\n'))
    });
}

function echo (args, done) {
  const output = args
  .split(' ')
  .map(arg => {
    return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
  })
  .join(' ');
  done(output);
}

function cat (filenames, done) {
  filenames.split(' ');
  const texts = [];
  var count = 0;
  filenames.forEach((filename, i) => {
    fs.readFile(filename, { encoding: 'utf8' }, (err, text) => {
      if (err) throw err;
      texts[i] = text
      count++;
      if (count === filenames.length) {
        done(texts.join(''));
      }
    });
  });
}

function head (filename, done) {
  fs.readFile(filename, { encoding: 'utf8' }, (err, text) => {
    if (err) throw err;
    done(text.split('\n').slice(0, 5).join('\n'));
  });
}

function tail (filename, done) {
  fs.readFile(filename, { encoding: 'utf8' }, (err, text) => {
    if (err) throw err;
    done(text.split('\n').slice(-5).join('\n'));
  });
}

function sort (filename, done) {
  fs.readFile(filename, { encoding: 'utf8' }, (err, text) => {
    if (err) throw err;
    done(text.split('\n').sort().join('\n'));
  });
}

function wc (filename, done) {
  fs.readFile(filename, { encoding: 'utf8' }, (err, text) => {
    if (err) throw err;
    done(text.split('\n').length);
  });
}

function uniq (filename, done) {
  fs.readFile(filename, { encoding: 'utf8' }, (err, text) => {
    if (err) throw err;
    const lines = text.split('\n');
    for (var i = 0; i < lines.length; i++) {
      if (lines[i] === lines[i + 1]) {
        lines.splice(i, 1);
        i--;
      }
    }
    done(lines.join('\n'));
  });
}

function curl (url, done) {
  if (url.slice(0, 7) !== 'http://') url = 'http://' + url;
  request(url, (err, response, body) => {
    if (err) throw err;
    else if (resonse && (response.statusCode > 399)) throw new Error(response.statusCode);
    if (body) done(body);
    else done('');
  })
}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo,
  cat: cat,
  head: head,
  tail: tail,
  sort: sort,
  wc: wc,
  uniq: uniq,
  curl: curl
}
