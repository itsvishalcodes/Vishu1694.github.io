document.addEventListener("DOMContentLoaded",
  function (event) {

  	var blocks = [33,34,35,36,37,38];
	var isTuckShop = [1,1,0,0,1,1];

    
    function getNearestBlock (event) {
    	document.querySelector("#nearest-block-got").textContent = "";
    	var curr_block = document.querySelector(".curr-block-input").value;
        var class_name = document.querySelector("#nearest-block-got");
    	for(var i = 0;i<6;i++) {
    		if(blocks[i]==curr_block) {
    			if(isTuckShop[i]===1) {
                    document.querySelector("#nearest-block-got").innerHTML = "<div class=\"alert alert-success\" role=\"alert\"><strong> Nearest TuckShop:  </strong>BLOCK: "+blocks[i].toString()+"</div>";
    				break;
    			}
    			else if(isTuckShop[i]===0) {
    				document.querySelector("#nearest-block-got").innerHTML = "<div class=\"alert alert-warning\" role=\"alert\"><strong> :(  </strong> No Tuck Shop in this block </div>";
    				break;
    			}
    		}
    		else if(document.querySelector(".curr-block-input").value == "") {
    			document.querySelector("#nearest-block-got").innerHTML = "<div class=\"alert alert-info\" role=\"alert\"><strong> ://  </strong> Please Enter some block </div>";
    		}
    		else {
    			document.querySelector("#nearest-block-got").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"><strong> :/?  </strong> No Such Block </div>";
    		}
    	}
    }

    // Unobtrusive event binding
    document.querySelector(".get_near_shop_btn")
      .addEventListener("click", getNearestBlock);

  }
);