console.log("Welcome to the password validator tool!\n");

const readline =require('readline');

const reader = readline.createInterface({input:process.stdin, output:process.stdout});

reader.question("Please enter a password to validate: ", (nPut) =>{
    if(nPut.length >= 10){
         console.log("\nThis password meets the requirements!");
    }
    else{
         console.log("\nThis password does not meet the requirements.");

    }
reader.close();
});
