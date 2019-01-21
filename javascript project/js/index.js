$(document).ready(function() {
    var s ,
    change = {
    	settings: {
    		btn: $(".registerbtn"),
    	},

    	init: function() {
    		s = this.settings;
    		this.bindUIActions();
    	 },

    	bindUIActions: function() {
    	 	this.validateForm();
    	 },

    	validateForm: function() {
    	 	$(s.btn).on('click' , function() {
    	 	   $("#registration").validate({
			    rules: {
				    email: {
				      required: true,
				      email: true
				    },
			        pswn: {
	                   required: true,
	                   pwcheck: true,
	                   minlength: 8
	                },
	                pswrepeat: {
	                   required: true,
	                   equalTo: "#pswn"
	                }
			    },
			   
               });
    	 	});
    	}

    };
    change.init()
});