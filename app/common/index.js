angular
	.module('common', ['supersonic']);
	
angular
	.module('common')
	.factory('myService', function() {
			var message= [];
			return {
				set: set,
				get: get
			}
			function set(mes) {
				message.push(mes);
			}
			function get() {
				return message;
			}
		
			});	
	



