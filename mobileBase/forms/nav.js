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
