/**
 * @public 
 * @properties={typeid:24,uuid:"D0C2B413-8980-4F5E-BBC4-B9245F26154A"}
 */
function loadMainMenu(){	
	foundset.deleteAllRecords();
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-truck-loading"></i> <br> Receiving';foundset.menu_id = 'customers';foundset.menu_color='nav-orange';foundset.menu_order=1;foundset.menu_title='Sub Menu';	
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-shipping-fast"></i> <br> Shipping';foundset.menu_id = 'itemsss';foundset.menu_color='nav-green';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-box-open"></i> <br> Kitting';foundset.menu_id = 'itembb';foundset.menu_color='nav-yellow';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-boxes"></i> <br> Inventory';foundset.menu_id = 'itema';foundset.menu_color='nav-green';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-tags"></i> <br> Labels';foundset.menu_id = 'item';foundset.menu_color='nav-neon';foundset.menu_order=3;	
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-dolly-flatbed"></i> <br> Picking';foundset.menu_id = 'item';foundset.menu_color='nav-orange';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-heart-broken"></i> <br> RMA';foundset.menu_id = 'item';foundset.menu_color='nav-neon';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-dolly"></i> <br> Move';foundset.menu_id = 'item';foundset.menu_color='nav-skyblue';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-cog"></i> <br> Settings';foundset.menu_id = 'item';foundset.menu_color='nav-gray';foundset.menu_order=3;
	foundset.sort('menu_order asc');
}

/**
 * @public 
 * @param {String} [id]
 * @properties={typeid:24,uuid:"0497C524-96E3-4B42-8952-6CD187397686"}
 */
function loadSubMenu(id){
	foundset.deleteAllRecords();
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> Customers';foundset.menu_id = 'customersContainer';foundset.menu_color='nav-orange';foundset.menu_title='Customers';foundset.menu_order=1;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> Orders';foundset.menu_id = 'ordersContainer';foundset.menu_color='nav-yellow';foundset.menu_title='Orders';foundset.menu_order=2;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem A';foundset.menu_id = 'item';foundset.menu_color='nav-gray';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem B';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem C';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem D';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem E';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem F';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem G';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem H';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.sort('menu_order asc');
}
