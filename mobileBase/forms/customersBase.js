//Business Logic
/**
 * @override
 *
 * @properties={typeid:24,uuid:"8E0C846D-B4D8-4AE8-A953-4C5F3FA5F300"}
 */
function validate() {
	//validate logic
	if (city == '') {
		validation_message = 'City cannot be blank.'
		validation_element = elements['city'];
		return _super.validate.apply(this, arguments);
	}

	if (country == '') {
		validation_message = 'Country cannot be blank.'
		validation_element = elements['country'];
		return _super.validate.apply(this, arguments);
	}

	if (country != 'USA') {
		validation_message = 'Must be from USA.'
		validation_element = elements['country'];
		return _super.validate.apply(this, arguments);
	}

	return _super.validate.apply(this, arguments);
}
