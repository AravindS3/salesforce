({
	showInfo : function(component, event, helper) {
        var eventSource = event.getSource();
        var cycobj = eventSource.get('v.name');
        console.log(cycobj);
        component.set('v.cycleId',cycobj);
           $A.createComponent(
            "c:cycledetails",
            {
                "cycleId":cycobj
            },
            function(cycledetails,status,errorMessage){
                if(status === "SUCCESS"){
                    component.find('overLayLib').showCustomModal({
                        header:"Cycle Details",
                        body:cycledetails,
                        footer:'Red Rocks Cycles',
                        showCloseButton:true,
                        closeCallback:function(){
                            
                        }
                    });
                    
                }else if(status ==="INCOMPLETE"){
                    console.log("No Response from the server or client is offline");
                }else if(status === "ERROR"){
                    console.log("Error: "+ errorMessage);
                }
            }
        );
		
	}
})
