/**
 * Created by cicoriasmbp13 on 2/23/16.
 */


var request = require('supertest')
    , express = require('express');

var app = express();

app.get('/user', function(req, res){
    res.status(200).json({ name: 'tobi' });
});



describe('GET /user', function(){
    it('respond with json', function(done){
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})


