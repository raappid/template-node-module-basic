
import chai = require('chai');
import sinon = require('sinon');
import {sayHelloAndHi} from "../../src/main";
import helloHI = require("../../src/lib/hello-hi");

chai.use(require("sinon-chai"));

var expect = chai.expect;

describe("main Spec",()=>{

    describe("sayHelloAndHi",()=>{

        var sayHiStub:any;
        var sayHelloStub:any;

        beforeEach(()=>{
            sayHelloStub = sinon.stub(helloHI,"sayHello");
            sayHiStub = sinon.stub(helloHI,"sayHi");
        });

        afterEach(()=>{
            sayHelloStub.restore();
            sayHiStub.restore();
        });

        it("should resolve with hello and hi",(done)=>{

            sayHelloStub.returns(Promise.resolve("helloStub"));
            sayHiStub.returns("hiStub");

            sayHelloAndHi().then((result)=>{

                expect(result).to.equal("helloStub and hiStub");
                done();
            })

        });

        it("should reject with error, if hi service rejected with error",(done)=>{

            sayHelloStub.returns(Promise.reject(new Error("yay")));

            sayHelloAndHi().then(null,(error)=>{

                expect(error).to.be.instanceOf(Error);
                expect(error.message).to.equal("yay");
                done();
            })
        });

    });
});

