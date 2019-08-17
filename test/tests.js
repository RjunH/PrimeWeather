var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("List of APIs - 200 test",function(){
  // #1 should return list of APIs response

  it("should return list of APIs response",function(done){
    // calling api's list
    server
    .get("/apis")
    .expect("Content-type",/json/)
    .expect(200) // This is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });
});


describe("Current weather of Prime Day - 200 and 400 test",function(){
  // #1 should return list of APIs response

  it("should return weather response only if current is prime day",function(done){
    // calling api's list
    let expectedStatus = 400;
    if(isCurrentDatePrime){
      expectedStatus = 200;
    }

    server
    .get("/api/weather/prime")
    .expect("Content-type",/json/)
    .expect(expectedStatus) // This is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

  it("should return  error response if given day is not prime number",function(done){
    // calling api's list
    server
    .get("/api/weather/prime/12")
    .expect("Content-type",/json/)
    .expect(400) // This is HTTP response
    .end(function(err,res){
      // HTTP status should be 400
      res.status.should.equal(400);
      done();
    });
  });

});

describe("Current Weather by City - 200 and 400 test",function(){
  // #1 should return list of APIs response

  it("should return error response if city does not exists",function(done){
    // calling weather/current/:city API 
    server
    .get("/api/weather/current/Punee")
    .expect("Content-type",/json/)
    .expect(400) // This is HTTP response
    .end(function(err,res){
      // HTTP status should be 400
      res.status.should.equal(400);
      done();
    });
  });

  it("should return success response if city exists",function(done){
    // calling weather/current/:city API 
    server
    .get("/api/weather/current/Goa")
    .expect("Content-type",/json/)
    .expect(200) // This is HTTP response
    .end(function(err,res){
      // HTTP status should be 400
      res.status.should.equal(200);
      done();
    });
  });
});

describe("URL not found - 404 test",function(){

  it("should return 404",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  })
});

function isCurrentDatePrime(){   
  let currentDate = new Date();
  return isPrime(currentDate.getDate());
}

function isPrime(num) {
  let sqrtnum=Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for(let i=2; i<=sqrtnum; i++) { 
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}