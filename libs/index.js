let fetch = require('fetch').fetchUrl

const url = 'https://www.jsonstore.io/'

class jsonstore {
  constructor(token){
    if (typeof(token) === 'undefined' || token === '') {
      console.log(new Error("Invalid Token, get token from https://www.jsonstore.io/"))
    }
    this.end_url = url + token
  }

  read(node){
    let url = this.end_url
    if (typeof(node) !== 'undefined') url = url + '/' + node
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'GET',
      }
      fetch(url, config, (error, meta, body) => {
        if(!error){
          try {
            let response = JSON.parse(body.toString())
            if (response.ok) resolve(response.result)
          } catch (err) {
            reject(new Error("Token is incorrect, unable to read data."))
          }
        }
        else reject(new Error("Bad request, couldn't read data"))
      })
    })
  }

  write(node, payload){
    let url = this.end_url
    if (typeof(node) !== 'undefined' && node !== '') url = url + '/' + node
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        payload : JSON.stringify(payload)
      }
      fetch(url, config, (error, meta, body) => {
        if(!error){
          try {
            let response = JSON.parse(body.toString())
            if (response.ok) resolve(response.ok)
          } catch (err) {
            reject(new Error("Token is incorrect, unable to read data."))
          }
        }
        else reject(new Error("Bad request, couldn't read data"))
      })
    })
  }

  delete(node){
    let url = this.end_url
    if (typeof(node) !== 'undefined' && node !== '') url = url + '/' + node
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        },
        method: 'DELETE'
      }
      fetch(url, config, (error, meta, body) => {
        if(!error){
          try {
            let response = JSON.parse(body.toString())
            if (response.ok) resolve(response.ok)
          } catch (err) {
            reject(new Error("Token is incorrect, unable to read data."))
          }
        }
        else reject(new Error("Bad request, couldn't read data"))
      })
    })
  }
}

module.exports = jsonstore
