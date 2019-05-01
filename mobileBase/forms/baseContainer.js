/**
 * @public
 * @properties={typeid:24,uuid:"83DA2A8D-E222-437D-809E-8B3EF929FE2C"}
 */
function switchForms(level) {
	//get current form names
	var mF = elements.mobile.getTabFormNameAt(1);
	var dF = elements.desktop.getTabFormNameAt(1);

	if (level == 1) {
		mF = controller.getName().split('Container')[0] + 'Mobile';
		dF = controller.getName().split('Container')[0] + 'Desktop';
		level = '';
	}

	//check if form exists for level, if not don't remove current form.
	//else switch to that form.
	if (forms[mF + level]) {
		//add new navigation object for form
		elements.mobile.removeAllTabs();
		elements.mobile.addTab(mF + level);
	}

	if (forms[dF + level]) {
		elements.desktop.removeAllTabs();
		elements.desktop.addTab(dF + level);
	}	
}
