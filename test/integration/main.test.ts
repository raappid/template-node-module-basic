
import chai = require('chai');
import main = require("../../src/main");

describe('my-manager Integration Test cases', () => {

    var expect = chai.expect;


    describe("sayHello",()=>{

        it("should resolve with hello and hi",(done)=>{

            main.sayHelloAndHi().then((result)=>{

                expect(result).to.equal("hello and hi");
                done();
            })

        });

    });
});