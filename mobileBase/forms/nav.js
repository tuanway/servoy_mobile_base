/**
 * Switch Content
 * @param formName
 *
 * @properties={typeid:24,uuid:"AB7CBD5B-6B5E-4341-99EE-00E0854F98E6"}
 */
function switchContent(formName) {
	elements.content.removeAllTabs();
	elements.content.addTab(formName);
}
/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"4FCFE1C7-4F88-46C3-982D-6DD29DFE3741"}
 */
function onLoad(event) {
	scopes.nav.gotoForm(event, 'homeContainer', 'Main Menu');
}

/**
 * @param formName
 *
 * @properties={typeid:24,uuid:"8326276D-195C-43C7-AA36-32A24006AE6F"}
 */
function setHeaderMobile(formName) {
	elements.header_mobile.removeAllTabs();
	elements.header_mobile.addTab(formName);
}

/**
 * @param formName
 *
 * @properties={typeid:24,uuid:"692EBA55-9183-4112-BBE6-0E870B606955"}
 */
function setHeaderDesktop(formName) {
	elements.header_desktop.removeAllTabs();
	elements.header_desktop.addTab(formName);
}
