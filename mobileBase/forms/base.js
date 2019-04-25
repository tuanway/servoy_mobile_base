/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3B4C416-7DB4-4FAB-930A-ACDF2519CF95"}
 */
var validation_message = '';
/**
 *
 * @type {RuntimeTextField}
 *
 * @properties={typeid:35,uuid:"36A25BFD-F6EB-4B0A-8637-B2DBE3E8F025",variableType:-4}
 */
var validation_element;

/**
 * Field Validation
 * @properties={typeid:24,uuid:"27A02016-1DDA-4509-894D-A225A1D1A163"}
 */
function validate() {
	if (validation_message != '') {		
		validation_element.requestFocus();
		validation_element.addStyleClass('validate_focus')		
		forms.validate_popup.show(validation_message, validation_element);
	}
}

/**
 * @properties={typeid:24,uuid:"448D966D-D175-44F1-A8BC-B38474D2B687"}
 */
function resetValidation() {
	validation_message = '';
	validation_element = null;
	for (var i = 0; i < elements.allnames.length; i++) {
		var name = elements.allnames[i];
		var elem = elements[name];
		elem.removeStyleClass('validate_focus');
	}
	//hide popup
	plugins.window.cancelFormPopup();
}

/**
 * Update User Interface
 * @properties={typeid:24,uuid:"43AB9D67-8882-4AD3-94E5-B7ABC6F2DA4E"}
 */
function updateUI() { }

/**
 * @properties={typeid:24,uuid:"20BB89FC-3C5C-47CE-ADAE-FF348107FE05"}
 */
function submit() { }

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EC2C4CF0-9E8C-4A6C-B91A-6144264C1F81"}
 */
function onElementDataChange(oldValue, newValue, event) {
	resetValidation();
	validate();
	return true
}
