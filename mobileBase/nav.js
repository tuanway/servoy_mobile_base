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
 * @param event
 *
 * @properties={typeid:24,uuid:"B129AD39-98FB-41A7-9171-3652FA9F5147"}
 */
function goBack(event) {
	scopes.svyNavigation.close();
	var item = scopes.svyNavigation.getCurrentItem();
	if (item.getFormName() == 'homeContainer') {
		return goHome(event);
	}
	return gotoForm(event, item.getFormName(), item.getCustomData());
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
