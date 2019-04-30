//business logic for orders
//variables
/**
 * @override
 *
 * @properties={typeid:24,uuid:"22DA3618-88F4-4366-BFD1-4092DCBC359D"}
 */
function setupValidators() {
	validations = {
		customer_id: [{ value: '', message: 'customer ID cannot be empty.' }],
		employee_id: [{ value: '', message: 'EmployeeID cannot be empty.' }],
	}
}
