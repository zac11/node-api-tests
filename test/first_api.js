'use strict';
var request = require('request');
var chai = require('chai');
const expect = chai.expect;

chai.use(require('chai-http'));


describe('First API',()=>{

    let response;
    let url = 'posts/'
    it('makes the first API request',()=>{
        return chai.request('https://jsonplaceholder.typicode.com').get('/posts/').then((r) => {
                console.log(r);
        })
        });       
        
    });

     