function orderGet() {
	var tjson = localStorage.getItem("preorderJson");
	if (!isJson(tjson)) tjson = "";
	var tjson2 = localStorage.getItem("orderJson");
	if (!isJson(tjson2)) tjson2 = "";
	$.ajax({
		url: "/ajax.php",
		data: "storage=" + tjson + "&storage2=" + tjson2 + "&action=orderGet",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			window.location.reload();
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
}
function preorderAdd(id) {
	console.log('preorderAdd: ' + id);
	var tjson = localStorage.getItem("preorderJson");
	if (!isJson(tjson)) tjson = "";
	$.ajax({
		url: "/ajax.php",
		data: "id=" + encodeURIComponent(id) + "&storage=" + tjson + "&action=preorderAdd",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			console.log(response.data);
			localStorage.setItem("preorderJson", response.data);
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
}
function preorderRemove(id) {
	console.log('preorderRemove: ' + id);
	var tjson = localStorage.getItem("preorderJson");
	if (!isJson(tjson)) tjson = "";
	$.ajax({
		url: "/ajax.php",
		data: "id=" + encodeURIComponent(id) + "&storage=" + tjson + "&action=preorderRemove",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			console.log(response.data);
			localStorage.setItem("preorderJson", response.data);
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
}
function memberBackMenu() {
	$('.m-common').show();
	$('.daohang').show();
	$('.login').hide();
	$('.findorder').hide();
	$('.menu_back').hide();
	$('.register').hide();
	$('.reset').hide();
}
function memberAccount(act) {
	if (act == 'guest') {
		var newForm = $('<form>', {
			'action': '/checkout/guest',
			'method': 'post'
		}).append($('<input>', {
			'name': 'q',
			'value': localStorage.getItem("orderJson"),
			'type': 'hidden'
		}));
		newForm.hide().appendTo('body').submit().remove();
	}
	else {
		$.ajax({
			url: "/ajax.php",
			data: "action=memberLoginCheck",
			type: 'post',
			dataType: 'json',
			success: function (response) {
				if (response.status == 1) {
					if (act == 'checkout') {
						var newForm = $('<form>', {
							'action': '/checkout',
							'method': 'post'
						}).append($('<input>', {
							'name': 'q',
							'value': localStorage.getItem("orderJson"),
							'type': 'hidden'
						}));
						newForm.hide().appendTo('body').submit().remove();
						// window.location.href = '/checkout';
					}
					else {
						window.location.href = '/account';
					}
				}
				else {
					if (act == 'checkout') {
						$('.togglebar').click();
						$('.guestCheckoutArea').show();
						$('#login_action').val(act);
					}
					else {
						$('.guestCheckoutArea').hide();
						$('#login_action').val('');
					}
					$('.m-common').hide();
					$('.daohang').hide();
					$('.login').show();
					$('.menu_back').show();
				}
			},
			error: function (response) {
				alert("Error occurs, please retry later.");
			}
		});
	}
}
function memberLogin() {
	$('.m-common').hide();
	$('.login').show();
}
$("#loginForm").submit(function( event ) {
	event.preventDefault();
	if ($.trim($("#login_email").val()) == "") {
		alert("Please input your email!");
		$("#login_email").focus();
		return;
	}
	if (!isEmlValid($.trim($("#login_email").val()))) {
		alert("Email format is invalid!");
		$("#login_email").focus();
		return;
	}
	if ($.trim($("#login_password").val()).length < 6) {
		alert("Please input your password, at least 6 digitals and letters!");
		$("#login_password").focus();
		return;
	}
	var tjson = localStorage.getItem("preorderJson");
	if (!isJson(tjson)) tjson = "";
	var tjson2 = localStorage.getItem("orderJson");
	if (!isJson(tjson2)) tjson2 = "";
	$.ajax({
		url: "/ajax.php",
		data: "storage=" + tjson + "&storage2=" + tjson2 + "&username=" + encodeURIComponent($.trim($("#login_email").val())) + "&password=" + encodeURIComponent($.trim($("#login_password").val())) + "&action=memberLogin",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			if (response.status == 1) {
				localStorage.setItem("preorderJson", response.preorderJson);
				localStorage.setItem("orderJson", response.orderJson);
				if ($('#login_action').val() == 'checkout') {
					window.location.href = '/checkout';
				}
				else {
					window.location.href = '/account';
				}
			}
			else {
				alert(response.message);
			}
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
});
$("#loginForm2").submit(function( event ) {
	event.preventDefault();
	if ($.trim($("#login_email2").val()) == "") {
		alert("Please input your email!");
		$("#login_email2").focus();
		return;
	}
	if (!isEmlValid($.trim($("#login_email2").val()))) {
		alert("Email format is invalid!");
		$("#login_email2").focus();
		return;
	}
	if ($.trim($("#login_password2").val()).length < 6) {
		alert("Please input your password, at least 6 digitals and letters!");
		$("#login_password2").focus();
		return;
	}
	var tjson = localStorage.getItem("preorderJson");
	if (!isJson(tjson)) tjson = "";
	var tjson2 = localStorage.getItem("orderJson");
	if (!isJson(tjson2)) tjson2 = "";
	$.ajax({
		url: "/ajax.php",
		data: "storage=" + tjson + "&storage2=" + tjson2 + "&username=" + encodeURIComponent($.trim($("#login_email").val())) + "&password=" + encodeURIComponent($.trim($("#login_password").val())) + "&action=memberLogin",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			if (response.status == 1) {
				localStorage.setItem("preorderJson", response.preorderJson);
				localStorage.setItem("orderJson", response.orderJson);
				window.location.href = '/account';
			}
			else {
				alert(response.message);
			}
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
});

function findOrder() {
	$.ajax({
		url: "/ajax.php",
		data: "action=memberLoginCheck",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			if (response.status == 1) {
				window.location.href = '/account';
			}
			else {
				$('.m-common').hide();
				$('.daohang').hide();
				$('.findorder').show();
				$('.menu_back').show();
			}
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
}
function chkFindOrder() {
	if ($.trim($("#guest_email").val()) == "") {
		alert("Please input your email!");
		$("#guest_email").focus();
		return false;
	}
	if (!isEmlValid($.trim($("#guest_email").val()))) {
		alert("Email format is invalid!");
		$("#guest_email").focus();
		return false;
	}
	if ($.trim($("#guest_cell").val()).length < 6) {
		alert("Please input your phone number!");
		$("#guest_cell").focus();
		return false;
	}
	return true;
}

function memberJoin() {
	$('.m-common').hide();
	$('.register').show();
}
$("#registerForm").submit(function( event ) {
	event.preventDefault();
	if ($.trim($("#register_firstname").val()) == "") {
		alert('Please input your first name');
		$("#register_firstname").focus();
		return;
	}
	if ($.trim($("#register_lastname").val()) == "") {
		alert('Please input your last name');
		$("#register_lastname").focus();
		return;
	}
	if ($.trim($("#register_email").val()) == "") {
		alert("Please input your email!");
		$("#register_email").focus();
		return;
	}
	if (!isEmlValid($.trim($("#register_email").val()))) {
		alert("Email format is invalid!");
		$("#register_email").focus();
		return;
	}
	if ($.trim($("#register_password").val()).length < 6) {
		alert("Please input your password, at least 6 digitals and letters!");
		$("#register_password").focus();
		return;
	}
	if ($.trim($("#register_password").val()) != $.trim($("#register_repassword").val())) {
		alert("Confirm password is different!");
		$("#register_password").focus();
		return;
	}
	$.ajax({
		url: "/ajax.php",
		data: "firstname=" + encodeURIComponent($.trim($("#register_firstname").val())) + "&lastname=" + encodeURIComponent($.trim($("#register_lastname").val())) + "&email=" + encodeURIComponent($.trim($("#register_email").val())) + "&password=" + encodeURIComponent($.trim($("#register_password").val())) + "&action=memberJoin",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			alert(response.message);
			if (response.status == 1) {
				$('.m-common').hide();
				$('.login').show();
			}
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
});
function memberForgot() {
	$('.m-common').hide();
	$('.reset').show();
}
$("#forgotForm").submit(function( event ) {
	event.preventDefault();
	if ($.trim($("#forgot_email").val()) == "") {
		alert("Please input your email!");
		$("#forgot_email").focus();
		return;
	}
	if (!isEmlValid($.trim($("#forgot_email").val()))) {
		alert("Email format is invalid!");
		$("#forgot_email").focus();
		return;
	}
	$.ajax({
		url: "/ajax.php",
		data: "email=" + encodeURIComponent($.trim($("#forgot_email").val())) + "&action=memberForgot",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			alert(response.message);
			if (response.status == 1) {
				$('.m-common').hide();
				$('.login').show();
			}
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
});
function memberEditEmail() {
	if ($.trim($("#account_email").val()) == "") {
		alert("Please input new email address!");
		$("#account_email").focus();
		return;
	}
	if (!isEmlValid($.trim($("#account_email").val()))) {
		alert("Email format is invalid!");
		$("#account_email").focus();
		return;
	}
	if ($.trim($("#account_email").val()) == '<?=$rowMember["email"]?>') {
		alert("Email is same as current");
		return;
	}
	$.ajax({
		url: "/ajax.php",
		data: "email=" + encodeURIComponent($.trim($("#account_email").val())) + "&action=memberEditEmail",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			alert(response.message);
			if (response.status == 1) {
				window.location.reload();
			}
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
}
function memberEditPassword() {
	if ($.trim($("#account_oldpassword").val()).length < 6) {
		alert("Please input current password, at least 6 digitals and letters!");
		$("#account_oldpassword").focus();
		return;
	}
	if ($.trim($("#account_password").val()).length < 6) {
		alert("Please input new password, at least 6 digitals and letters!");
		$("#account_password").focus();
		return;
	}
	if ($.trim($("#account_password").val()) != $.trim($("#account_repassword").val())) {
		alert("Confirm password is different!");
		$("#account_password").focus();
		return;
	}
	$.ajax({
		url: "/ajax.php",
		data: "oldpassword=" + encodeURIComponent($.trim($("#account_oldpassword").val())) + "&password=" + encodeURIComponent($.trim($("#account_password").val())) + "&action=memberEditPassword",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			alert(response.message);
			if (response.status == 1) {
				window.location.href = "/logout";
			}
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
}
function memberEditDelivery() {
	if ($.trim($("#delivery_receiver").val()).length < 1) {
		alert("Please input receiver full name!");
		$("#delivery_receiver").focus();
		return;
	}
	if ($.trim($("#delivery_address1").val()).length < 1) {
		alert("Please input address!");
		$("#delivery_address1").focus();
		return;
	}
	if ($.trim($("#delivery_city").val()).length < 1) {
		alert("Please input city!");
		$("#delivery_city").focus();
		return;
	}
	if ($.trim($("#delivery_state").val()).length < 1) {
		alert("Please input State / Province / Region!");
		$("#delivery_state").focus();
		return;
	}
	if ($.trim($("#delivery_zipcode").val()).length < 1) {
		alert("Please input zipcode!");
		$("#delivery_zipcode").focus();
		return;
	}
	if ($.trim($("#delivery_country").val()).length < 1) {
		alert("Please input country!");
		$("#delivery_country").focus();
		return;
	}
	if ($.trim($("#delivery_phone").val()).length < 1) {
		alert("Please input telephone number!");
		$("#delivery_phone").focus();
		return;
	}
	$.ajax({
		url: "/ajax.php",
		data: "receiver=" + encodeURIComponent($.trim($("#delivery_receiver").val())) + "&address1=" + encodeURIComponent($.trim($("#delivery_address1").val())) + "&city=" + encodeURIComponent($.trim($("#delivery_city").val())) + "&state=" + encodeURIComponent($.trim($("#delivery_state").val())) + "&zipcode=" + encodeURIComponent($.trim($("#delivery_zipcode").val())) + "&country=" + encodeURIComponent($.trim($("#delivery_country").val())) + "&phone=" + encodeURIComponent($.trim($("#delivery_phone").val())) + "&action=memberEditDelivery",
		type: 'post',
		dataType: 'json',
		success: function (response) {
			alert(response.message);
			if (response.status == 1) {
				window.location.reload();
			}
		},
		error: function (response) {
			alert("Error occurs, please retry later.");
		}
	});
}

/* YT ID */
var regYTExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
function youtube_parser(url) {
	var match = url.match(regYTExp);
	var ytID = (match && match[2].length == 11) ? match[2] : ((url.length == 11) ? url : "");
	return ytID;
}
/* YT ID */

/* json string testing */
function isJson(str) {
	if (str == null) return false;
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
/* json string testing */

Number.prototype.numberFormat = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

/* 密碼驗證 */
function validateUserPassword(p) {
	var errors = [];
	if (p.length < 8) {
		errors.push("密碼需 8 碼以上"); 
	}
	if (p.search(/[a-z]/i) < 0) {
		errors.push("密碼需包括至少一個英文");
	}
	if (p.search(/[0-9]/) < 0) {
		errors.push("密碼需包括至少一個數字"); 
	}
	if (errors.length > 0) {
		alert(errors.join("\n"));
		return false;
	}
	return true;
}
/* 密碼驗證 */

/* Email 驗證 */
function isEmlValid(fldObj) {
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(fldObj)) {
		return true;
	}
	return false;
}
/* Email 驗證 */