
import main = require("../../src/main");

describe('my-manager Integration Test cases', () => {


    describe("sayHello",()=>{

        it("should resolve with hello and hi",function(done){

            main.sayHelloAndHi().then((result)=>{

                expect(result).to.equal("hello and hi");
                done();
            })

        });

    });
});