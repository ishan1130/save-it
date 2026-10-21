// let position = 0;

function moveLeft1()
{
    const num = document.getElementById("num");
    num.value = Number(num.value)-1;
    const num2 = document.getElementById("slider");
    num2.value = Number(num.value);
    // if(num.value <= 0)
    // {
    //     non();
    // }

}

function moveRight1()
{
    const num = document.getElementById("num");
    num.value = Number(num.value)+1;
    const num2 = document.getElementById("slider");
    num2.value = Number(num.value);
    
}

function moveLeft25()
{
    const num = document.getElementById("num");
    num.value = Number(num.value)-0.25;
    const num2 = document.getElementById("slider");
    num2.value = Number(num.value);
    // if(num.value <= 0)
    //     {
    //         non();
    //     }

}

function moveRight25()
{
    const num = document.getElementById("num");
    num.value = Number(num.value)+0.25;
    const num2 = document.getElementById("slider");
    num2.value = Number(num.value);
    
}

function moveLeft50()
{
    const num = document.getElementById("num");
    num.value = Number(num.value)-0.5;
    const num2 = document.getElementById("slider");
    num2.value = Number(num.value);
    // if(num.value <= 0)
    //     {
    //         non();
    //     }

}

function moveRight50()
{
    const num = document.getElementById("num");
    num.value = Number(num.value)+0.5;
    const num2 = document.getElementById("slider");
    num2.value = parseFloat(Number(num.value));
    
}

function file(){

// let file = document.getElementById("my-file");
// let message = document.getElementById("message");

// file.addEventListener("input", ()=>{
//     if(file.files.length){
//         let fileName = file.files[0].name;
//         message.innerHTML = '${fileName}';
//     }
//     else{
//         message.innerHTML = "hey there!..";
//     }
// });

}

function non()
{
    const num = document.getElementById("num");
    num.value = Number(0);
}

function Set0()
{
    const num = document.getElementById("Set0");
    const num2 = document.getElementById("num");
    const num3 = document.getElementById("slider");

    num2.value = Number(0);
    num3.value = parseFloat(Number(num2.value));


}