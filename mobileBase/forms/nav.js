/**
 * Switch Content
 * @param formName
 *
 * @properties={typeid:24,uuid:"AB7CBD5B-6B5E-4341-99EE-00E0854F98E6"}
 */
function switchContent(formName) {
	if (formName == elements.content.getTabFormNameAt(1)) return;
	elements.content.removeAllTabs();
	elements.content.addTab(formName);
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
 * @properties={typeid:24,uuid:"4AE53943-F5A6-41F4-82A4-DF230805EB7E"}
 */
function setFooterMobile(formName) {
	elements.footer_mobile.removeAllTabs();
	elements.footer_mobile.addTab(formName);
}

/**
 * @param formName
 *
 * @properties={typeid:24,uuid:"50A934E4-DDEB-4422-995D-A43459EF8E15"}
 */
function setFooterDesktop(formName) {
	elements.footer_desktop.removeAllTabs();
	elements.footer_desktop.addTab(formName);
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"F52CB5A5-CB1D-40AA-9EF0-5EF73F78DC5D"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		scopes.nav.goHome(event);
	}
}
