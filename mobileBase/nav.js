/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16E91054-D2C2-4B74-AEF3-CE74FFA817B3"}
 */
var header_title = '';

//Add navigation logic here

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B129AD39-98FB-41A7-9171-3652FA9F5147"}
 */
function goBack(event) {
	scopes.svyNavigation.close();
	var item = scopes.svyNavigation.getCurrentItem();
	return gotoForm(event, item.getFormName(), item.getText(), item.getCustomData());
}

/**
 * @param {JSEvent} event
 * @param {String} formName
 * @param {String} title
 * @param {Object} [customData]
 * @properties={typeid:24,uuid:"6B6A0D81-B1A1-45EA-8A16-4EC80E4ACEE1"}
 */
function gotoForm(event, formName, title, customData) {
	var item = new scopes.svyNavigation.NavigationItem(formName);
	item.setCustomData(customData);
	item.setText(title)
	scopes.svyNavigation.open(item);
	forms.nav.switchContent(formName);
	application.showForm('nav');

	//set the header
	header_title = item.getText();

	//if we are going back to main page:
	if (formName == 'homeContainer') {
		forms.homeContainer.loadMainMenu();
	}

	//if we are going back to subMenu
	if (formName == 'homeMobile_sub') {
		forms.nav.switchContent('homeContainer');
		forms.homeContainer.loadSubMenu();
		//close out of submenu item
		scopes.svyNavigation.close();
	}
}
