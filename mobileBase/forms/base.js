/**
 * @properties={typeid:35,uuid:"58D8E575-4E2F-417B-8EA2-9E7970C1CC14",variableType:-4}
 */
var validations = { }
/**
 * Field Validation
 * @properties={typeid:24,uuid:"27A02016-1DDA-4509-894D-A225A1D1A163"}
 */
function validate(el) {
	/** @type {Array} */
	var checks = validations[el];
	if (!checks) return true;
	var validation_message = '';
	for (var i = 0; i < checks.length; i++) {

		/** @type {{value:String,valid_value:String,message:String}} */
		var item = checks[i];
		//if this matches a validation check
		if (foundset[el] == item.value) {
			validation_message = item.message;
			break;
		}

		//if this item doesn't match a specific validation value
		if (item.valid_value) {
			if (foundset[el] != item.valid_value) {
				validation_message = item.message;
			}
			break;
		}
	}

	if (validation_message != '') {
		elements[el].requestFocus();
		elements[el].addStyleClass('validate_focus')
		forms.validate_popup.show(validation_message, elements[el]);
		return false;
	}
	return true;
}

/**
 * @properties={typeid:24,uuid:"A350AAA5-31C6-4F0B-8668-A1762945C97A"}
 */
function setupValidators() { }

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E03EF071-205A-4501-BA18-79FABE89EF1B"}
 */
function inputMoveNext(event) {
	resetValidation();
	//if validation fails, don't move to next element.
	if (!validate(event.getElementName())) {
		return;
	}

	//move to next element
	var tabseq = controller.getTabSequence();
	var tabIndex = tabseq.indexOf(event.getElementName())
	if (tabseq.length > 1) {
		// If there is more than one field in the tab sequence,
		// focus the second one and skip over readonly fields.
		controller.focusField(tabseq[tabIndex + 1], true);
	} else {
		// If there is at most one field in the tab sequence, then focus
		// whatever field is first, and don't bother to skip over readonly fields.
		controller.focusField(null, false);
	}

}

/**
 * @properties={typeid:24,uuid:"448D966D-D175-44F1-A8BC-B38474D2B687"}
 */
function resetValidation() {
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
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @public
 *
 * @properties={typeid:24,uuid:"45935E75-C8B7-4A51-8FC0-9E238B2FE23A"}
 */
function onLoad(event) {
	setupValidators();
}
