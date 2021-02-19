//declaration of function

function resetForm() {
    var sellingPrice  = document.getElementById("sellingPrice").value;

    if(costPrice === ""){
        document.getElementById("comment").style.display = "none"
        document.getElementById("sp").style.display = "none"
        document.getElementById("each").style.display = "none"    
    }else{
        document.getElementById("comment").style.display = "block"
        document.getElementById("sp").style.display = "block"
        document.getElementById("sp").style.display = "block"
    }

    document.getElementById("sellingPrice").style.display = "none"; 

   
}

function calculateSprice(){
    // alert("hi");

//store the data from inputs

    var costPrice = document.getElementById("costPrice").value;
    var pallets = document.getElementById("pallets").value;
    // var mPercent = document.getElementById("mPercent").value;

    if(costPrice === ""){
        alert("Please fill the box");
    }

    if(pallets === "" || pallets <= 1){
        pallets = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }

    var total = ((costPrice/pallets) / (1 - 0.35));
    // total = Math.round(total * 100)/100;
    total = total.toFixed(2);  

    document.getElementById("sellingPrice").style.display = "block"; 
    document.getElementById("sp").innerHTML = total; 
    // document.getElementById("text").innerHTML = "";
    // document.getElementById("number").innerHTML = "";
    // document.getElementById("comment").innerHTML = "";
}

document.getElementById("sellingPrice").style.display = "none";

document.getElementById("each").style.display = "none"; 

document.getElementById("calculate").onclick = function(){
    calculateSprice();
}

document.getElementById("reset").onclick = function(){
    calculateSprice();
}

document.getElementById("reset").onclick = function(){
    resetForm();
}

// function resetForm(){  
//     document.getElementById("sellingPrice").reset();  
//   }   
 


