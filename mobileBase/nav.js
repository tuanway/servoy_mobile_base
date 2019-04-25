//Add navigation logic here

/**
 * @properties={typeid:24,uuid:"AD12AFA4-3063-42B5-8E3D-E5ADBAEEDDBE"}
 */
function goHome(event) {
	var item = new scopes.svyNavigation.NavigationItem('homeContainer');	
	scopes.svyNavigation.open(item);
	application.showForm('homeContainer');
}

/**
 * @param {JSEvent} event
 * @param {String} formName
 * @param {Object} [customData]
 * @properties={typeid:24,uuid:"6B6A0D81-B1A1-45EA-8A16-4EC80E4ACEE1"}
 */
function gotoForm(event, formName, customData) {
	var item = new scopes.svyNavigation.NavigationItem(formName);
	item.setCustomData(customData);
	scopes.svyNavigation.open(item);
	forms.nav.switchContent(formName);
	application.showForm('nav');	
}
