/*jshint esversion: 6*/

var chai = require("chai");
var expect = chai.expect;
var pigafy = require("../piglatin");

// var testCapLetter = "Banana";
// var testVowelAt1 = "omelet";
// var testVowelAt2 = "piggy";
// var testVowelAt3 = "glove";
var testPigafy = "The rain in Spain falls only on the plane";

describe("pigafy", function(){

  it("should be a function", function(){
    expect(pigafy).to.be.a("function");
  });

  it("should return a string", function(){
    expect(pigafy(testPigafy)).to.be.a("string");
  });

  it.skip("should validate or convert that the first letter is lower-case",function(){
    expect(pigafy(testPigafy)).to.be.equal("the rain in spain falls only on the plane");
  });

  it.skip("should add an '- ay' to the end of words with a vowel at integer 0", function() {
    expect(pigafy(testPigafy)).to.be.equal("the rain in-ay spain falls only-ay on-ay the plane");
  });

  it.skip("should add an 'first letter + -ay' to the end of words with a vowel at integer 1", function() {
    expect(pigafy(testPigafy)).to.be.equal("the ain-ray in-ay spain alls-fay only-ay on-ay the plane");
  });

  it.skip("should add an 'first & second letter + -ay' to the end of words with a vowel at integer 2", function(){
    expect(pigafy(testPigafy)).to.be.equal("e-thay ain-ray in-ay ain-spay alls-fay only-ay on-ay e-thay ane-play");
  });

   it.skip("should captilize the first letter of the first word in the translated sentence", function(){
    expect(pigafy(testPigafy)).to.be.equal("E-thay ain-ray in-ay ain-spay alls-fay only-ay on-ay e-thay ane-play");
  });

});