
import {sayHello} from "../../../src/lib/hello-hi";
import {sayHi} from "../../../src/lib/hello-hi";

describe("hello-hi Spec",()=>{

    describe("sayHello",()=>{

        it("should resolve with 'hello' ",function(done){

            sayHello().then((result:string)=>{

                expect(result).to.equal("hello");
                done()
            })

        });

    });

    describe("sayHi",function(){

        it("should resolve retrun 'hi' ",()=>{

            expect(sayHi()).to.equal("hi");
        });
    })
});

