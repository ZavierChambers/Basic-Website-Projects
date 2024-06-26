

var submitButton = document.getElementById("submitbutton");


submitButton.addEventListener("click",binToDecConvert,false)

function binToDecConvert()
{
    var outputtext = document.getElementById("outputfordec");
    var x = 12;
    var input = document.getElementById("inputbin");
    var binaryNumber = input.value;
    var result =0;
    
    var binaryArray = input.value.toString().split('').map(Number);


    for (var i = binaryArray.length-1; i >=0; i-- )
    {
        //check if all numbers are 1's and 0's
        if (binaryArray[i] != 1 && binaryArray[i] != 0 )
        {
            outputtext.textContent = "ERROR: NOT A BINARY NUMBER";
            return;
            
        }
    }
    if(binaryArray.length >= 9)
    {
        outputtext.textContent = "ERROR: MORE THEN A BYTE";
        return;
    }
    else
    {
        if (binaryArray.length <=7)
        {
            outputtext.textContent = "ERROR: LESS THEN A BYTE";
            return;
        }
    }


       if (binaryArray[0] == 1)
       {
            result += 128;
       }
       else
       {

       }
       if (binaryArray[1] == 1)
       {
            result += 64;
       }
       if (binaryArray[2] == 1)
       {
            result += 32;
       }
       if (binaryArray[3] == 1)
       {
            result += 16;
       }
       if (binaryArray[4] == 1)
       {
            result += 8;
       }
       if (binaryArray[5] == 1)
       {
            result += 4;
       }
       if (binaryArray[6] == 1)
       {
            result += 2;
       }
       if (binaryArray[7] == 1)
       {
            result += 1;
       }

       outputtext.textContent = result.toString();

}