

import {sayHello} from "./lib/hello-hi";
import {sayHi} from "./lib/hello-hi";

export function sayHelloAndHi():Promise<string>
{
    return new Promise((resolve,reject)=>{

        sayHello().then((result)=>{

            resolve(result + " and " + sayHi() );

        },(error)=>{

            reject(error);
        })
    });
}



