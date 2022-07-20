({
	handleCompEvent : function(component, event, helper) {
		var searchparam = event.getParam('searchtext');
		var action = component.get('c.searchcycle');
        action.setParams({
            searchparam : searchparam
        });
        action.setCallback(this,function(response){
                 var state = response.getState();
          
        if(state === 'SUCCESS'){
            var responseValue = response.getReturnValue();
            console.log('responseValue',responseValue);
            component.set('v.cyclelist',responseValue)
        }
            else{
                console.log(response.getError())
            }
                           });
        $A.enqueueAction(action);
    }
})
