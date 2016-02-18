
import chai = require('chai');
import sinon = require('sinon');
import {sayHello} from "../../../src/lib/hello-hi";
import {sayHi} from "../../../src/lib/hello-hi";

chai.use(require("sinon-chai"));

var expect = chai.expect;

describe("hello-hi Spec",()=>{

    describe("sayHello",()=>{

        it("should resolve with 'hello' ",(done)=>{

            sayHello().then((result:string)=>{

                expect(result).to.equal("hello");
                done()
            })

        });

    });

    describe("sayHi",()=>{

        it("should resolve retrun 'hi' ",()=>{

            expect(sayHi()).to.equal("hi");
        });
    })
});

