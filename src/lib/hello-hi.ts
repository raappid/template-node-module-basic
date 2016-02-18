

export function sayHello():Promise<string>
{
   console.log("saying hello...");
   return Promise.resolve("hello")
}

export function sayHi():string
{
    console.log("saying hi...");
    return "hi";
}