	
function listboxSelectallItems(listID, isSelect) {
	    var listedElements = document.getElementById(listID);
        for(var count=0; count < listedElements.options.length; count++) {
            listedElements.options[count].selected = isSelect;
			    }
		}
function moveToTarget(sourceID,destID){
	var src=document.getElementById(sourceID);
	var dest=document.getElementById(destID);
	
	for(var count=0;count<src.options.length;count++){
		if(src.options[count].selected==true){
			var option=src.options[count];
			var newOption=document.createElement("option");
			newOption.value=option.value;
			newOption.text=option.text;
			newOption.selected=true;
			try{
				dest.add(newOption,null);
				src.remove(count,null);}
				catch(error){
					dest.add(newOption);
					src.remove(count);}
					count--;}
					}
				}
				
function invertSelection(sel2){
				
   					 var selLength = sel2.length;
    				 var i;
    				for(i=selLength-1; i>=0; i--){
						             if(sel2.options[i].selected){
						                 sel2.options[i].selected = false;
								             }else{
												  sel2.options[i].selected = true;
												               }
											         }
										}

