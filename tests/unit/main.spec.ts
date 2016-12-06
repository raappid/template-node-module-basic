
import {sayHelloAndHi} from "../../src/main";
import helloHI = require("../../src/lib/hello-hi");


describe("main Spec",()=>{

    describe("sayHelloAndHi",()=>{


        it("should resolve with hello and hi",function(done){

            this.sinon.stub(helloHI,"sayHello").returns(Promise.resolve("helloStub"));
            this.sinon.stub(helloHI,"sayHi").returns("hiStub");

            sayHelloAndHi().then((result)=>{

                expect(result).to.equal("helloStub and hiStub");
                done();
            })

        });

        it("should reject with error, if hi service rejected with error",function(done){

            this.sinon.stub(helloHI,"sayHello").returns(Promise.reject(new Error("yay")));

            sayHelloAndHi().then(null,(error)=>{

                expect(error).to.be.instanceOf(Error);
                expect(error.message).to.equal("yay");
                done();
            })
        });

    });
});

