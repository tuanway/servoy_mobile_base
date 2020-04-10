/**
 * @public
 * @properties={typeid:24,uuid:"83DA2A8D-E222-437D-809E-8B3EF929FE2C"}
 */
function switchForms(level) {
	//get current form names
	var mF = elements.mobile.getTabFormNameAt(1);
	var dF = elements.desktop.getTabFormNameAt(1);

	if (controller.getName().indexOf('Container') != 1) {
		mF = controller.getName().split('Container')[0] + 'Mobile';
		dF = controller.getName().split('Container')[0] + 'Desktop';
		if (level == 1) {
			level = '';
		}
	}

	var va = solutionModel.getForm(mF).extendsForm.getVariables();
	var mcl = scopes.nav.getCurrentLevel()['mobile_level'] == 1 ? '' : scopes.nav.getCurrentLevel()['mobile_level']
	var dcl = scopes.nav.getCurrentLevel()['desktop_level'] == 1 ? '' : scopes.nav.getCurrentLevel()['desktop_level']

		//check if form exists for level, if not don't remove current form.
	//else switch to that form.
	if (forms[mF + level]) {
		//if form is on current level then don't remove forms
		if (level == '' && ! (/\d/.test(elements.mobile.getTabFormNameAt(1)))) {
			if (forms[mF + level].onShow)
				forms[mF + level].onShow();
			return;
		}

		//add new navigation object for form
		elements.mobile.removeAllTabs();
		elements.mobile.addTab(mF + level);
		for (var i = 0; i < va.length; i++) {
			forms[mF + level][va[i].name] = forms[mF + mcl][va[i].name];
		}
		if (forms[mF + level].onShow)
			forms[mF + level].onShow();

	}

	if (forms[dF + level]) {
		//if form is on current level then don't remove forms
		if (level == '' && ! (/\d/.test(elements.desktop.getTabFormNameAt(1)))) {
			if (forms[dF + level].onShow)
				forms[dF + level].onShow();
			return;
		}
		//add new navigation object for form
		elements.desktop.removeAllTabs();
		elements.desktop.addTab(dF + level);
		if (forms[dF + level].onShow)
			forms[dF + level].onShow();
		for (i = 0; i < va.length; i++) {
			forms[dF + level][va[i].name] = forms[dF + dcl][va[i].name];
		}
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5B766F61-3715-4892-A9AB-DA2ED7F2A928"}
 */
function onShow(firstShow, event) {
}
