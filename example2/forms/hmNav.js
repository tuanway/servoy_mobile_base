/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"90BF8034-89C4-4F55-BB2C-2995680CEC1A"}
 */
function onLoad(event) {
	elements.content.containedForm = 'hm_Ctn';
	scopes.example2.currentFunctionTitle = 'Main Menu';

	return _super.onLoad(event)
}

/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"25A36B02-C862-491E-9455-5927A3EE209F"}
 */
function navListener(event) {
	//set the title when we open a new function or form
	scopes.example2.currentFunctionTitle = scopes.svyNavigation.getCurrentItem().getText();
	return _super.navListener(event)
}

/**
 * @param formName
 * @override
 *
 * @properties={typeid:24,uuid:"843B8609-D529-4491-A8FD-24AC200A564B"}
 */
function openForm(formName) {
	//get main container's mobile/desktop forms
	/** @type {RuntimeForm<base_Ctn>} */
	var h = forms[elements.content.containedForm]
	var hm = h.getMobileForm();
	var hd = h.getDesktopForm();
	var fc = formName.split(scopes.mobileBase.NC.Container)[0];

	//set individual forms within main container's mobile/desktop to respective forms
	forms[hm].elements.content.containedForm = fc + scopes.mobileBase.NC.Small
	forms[hd].elements.content.containedForm = fc + scopes.mobileBase.NC.Large
}

