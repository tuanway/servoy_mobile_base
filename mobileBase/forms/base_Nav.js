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
 * Is executed when navigation changes
 * @param {JSEvent}	event
 * @properties={typeid:24,uuid:"8C467974-F85B-4C04-9976-B8FAF6B9D46C"}
 */
function navListener(event) { }
