document.addEventListener("DOMContentLoaded",
  function (event) {

  	var blocks = [1,2,4,3,5,6,7,8,9,10,12,15,13,16,11,14,18,19,20,21,22,23,17,25,26,27,38,37,36,35,39,34,33,32,31,30,29,28,40,41,42,43,44,46,45,47,50,48,49,51,53,54,60,55,56,57,52,58,59,61,62,63,64,65];
	var isTuckShop = [1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0];
    var phone = ["9772303977","9956098149","","","8381881171","8601191015"];
    var email = ["block33@mail.com","block34@mail.com","","","block37@mail.com","block38@mail.com"];
    //Phone and EMail not implemented well due to not having enough data
    
    function getNearestBlock (event) {
    	document.querySelector("#nearest-block-got").textContent = "";
    	var curr_block = document.querySelector(".curr-block-input").value;
        var class_name = document.querySelector("#nearest-block-got");
        var pos,toCalc=1,flag=0,flag_sm=0;
        if(document.querySelector(".curr-block-input").value == "") {
   		    document.querySelector("#nearest-block-got").innerHTML = "<div class=\"alert alert-info\" role=\"alert\"><strong> ://  </strong> Please Enter some block </div>";
  		    document.querySelector(".to-fill-phone").textContent = "";
            document.querySelector(".to-fill-email").textContent = "";
            pos=-1;
            flag_sm=1;
        }
		else if(curr_block>0 && curr_block<66) {
			for(var i=0;i<64;i++) {
        		if(blocks[i]==curr_block) {
        			pos = i;
        			flag = 1;
        		}
        	}
        }
        if(flag==0 && flag_sm==0) {
	        document.querySelector("#nearest-block-got").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"><strong> :/?  </strong> No Such Block </div>";
		    document.querySelector(".to-fill-phone").textContent = "";
	        document.querySelector(".to-fill-email").textContent = "";
	        pos=-1;
	    } 

	    if(pos>=0) {
	        if(isTuckShop[pos]==1) {
	        	document.querySelector("#nearest-block-got").innerHTML = "<div class=\"alert alert-success\" role=\"alert\"><strong> Nearest TuckShop:  </strong>BLOCK: "+blocks[pos].toString()+"</div>";
	    		document.querySelector(".to-fill-phone").textContent = "Not Available";
	            document.querySelector(".to-fill-email").textContent = "Not Available";
	        }
	        else {
	        	while(1) {
	        		if((pos-toCalc)>=0 && isTuckShop[pos-toCalc]==1) {
	        			document.querySelector("#nearest-block-got").innerHTML = "<div class=\"alert alert-success\" role=\"alert\"><strong> Nearest TuckShop:  </strong>BLOCK: "+blocks[pos-toCalc].toString()+"</div>";
	    				document.querySelector(".to-fill-phone").textContent = "Not Available";
	            		document.querySelector(".to-fill-email").textContent = "Not Available";
	            		break;
	        		}
	        		else if((pos+toCalc)<=64 && isTuckShop[pos+toCalc]==1){
	        			document.querySelector("#nearest-block-got").innerHTML = "<div class=\"alert alert-success\" role=\"alert\"><strong> Nearest TuckShop:  </strong>BLOCK: "+blocks[pos+toCalc].toString()+"</div>";
	    				document.querySelector(".to-fill-phone").textContent = "Not Available";
	            		document.querySelector(".to-fill-email").textContent = "Not Available";
	        			break;
	        		}
	        		toCalc+=1;
	        	}
	        }
	    }
    }

    function feedbackSubmission (event) {
    	console.log("working");
    }

    // Unobtrusive event binding
    	
    document.querySelector(".get_near_shop_btn")
      .addEventListener("click", getNearestBlock);


  }
);