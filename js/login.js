/*
 * created by kfzx-qiusd 2016-03-02
 * 
 */
var submitinput = document.getElementById("submitinput");
submitinput.addEventListener('click', submitCheck, false);

var reginput = document.getElementById("reginput");
reginput.addEventListener('click', goRegister, false);
// 跳转到注册页面
function goRegister() {
	document.location.href = '../pages/register.html';
}

//提交时检查合法性
function submitCheck(event) {
	var username = document.getElementById("nameinput").value;
	var userpassword = document.getElementById("passwordinput").value;
	if (username == "") {
		alert("请输入用户名!");
	} else if (userpassword == "") {
		alert("请输入密码!");
	} else {
		//调用B1-登录接口---牟宁;
		LoginPost(username, userpassword);
	}
}


// ajax的post方法:
// login的post方法，调用B2接口
function LoginPost(name, password) {
	$.ajax({
		//提交数据的类型 POST GET
		type: "POST",
		//提交的网址
		url: "http://localhost:8080/FootBallWebSite/LoginServlet",
		//提交的数据
		data: {
			name: name,
			password: password
		},
		//返回数据的格式
		datatype: "html", //"xml", "html", "script", "json", "jsonp", "text".
		//在请求之前调用的函数
		beforeSend: function() {
			//$("#msg").html("logining");
		},
		//成功返回之后调用的函数            
		success: function(data) {
			//$("#msg").html(decodeURI(data));
		},
		//调用执行后调用的函数
		complete: function(XMLHttpRequest, textStatus) {
			//alert(XMLHttpRequest.responseText); //XMLHttpRequest.responseText是返回的信息，用这个来放JSON数据
			try {
				var jsonObject = JSON.parse(XMLHttpRequest.responseText);
				for (var key in jsonObject) {
					if (key == "speed") {
						if (jsonObject[key] == "90") {						
							document.location.href = '../pages/myabbs.html';
						}
					}
				}
			} catch (e) {
				alert("返回信息=>" + XMLHttpRequest.responseText + "\n=>无法转换为JSON");
			}
		},
		//调用出错执行的函数
		error: function() {
			alert("调用登陆接口失败，请检查网络环境");
		}
	});
}