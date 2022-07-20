({
	dosearch : function(component, event, helper) {
		var componentEvent = component.getEvent('cycleevent');
        var searchparam = component.find('searchInput').get('v.value');
        componentEvent.setParams({
            searchtext:searchparam
        });
        componentEvent.fire();
	}
})
