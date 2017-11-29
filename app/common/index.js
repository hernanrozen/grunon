angular
	.module('common', ['supersonic']);
	
angular
	.module('common')
			.factory('myService2', function() {
				var message2;
					return {
						set: set,
						get: get
					}
					function set(mes) {
						message2 = mes;
					}
					function get() {
						return message2;
					}
		
					});	
					
		angular
			.module('common')
					.factory('myServiceTest', function() {
						var message2;
							return {
								set: set,
								get: get
							}
							function set(mes) {
								message2 = mes;
							}
							function get() {
								return message2;
							}
		
							});						
					
					
	
	



