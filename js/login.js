/*
 * created by kfzx-qiusd 2016-03-02
 * 
 */


var departmentlist = document.getElementById("departmentlist");
departmentlist.addEventListener('click', selectDepartment, false);

var submitinput = document.getElementById("submitinput");
submitinput.addEventListener('click', submitCheck, false);

//实现点击部门list后更新部门button的文字
function selectDepartment(event) {
	var selectedlist = event.target; // 获取点击目标
	document.getElementById("mydepartment").innerHTML = selectedlist.innerHTML;
	document.getElementById("mydepartment").setAttribute('tag', selectedlist.innerHTML);
}

//提交时检查合法性
function submitCheck(event) {
	if (document.getElementById("mydepartment").getAttribute('tag') == "选择部门") {
		alert("请选择部门！");
		//		checkpass = false;
	} else if (document.getElementById("nameinput").value == "") {
		alert("请输入用户名!");
		//		checkpass = false;
	} else if (document.getElementById("passwordinput").value == "") {
		alert("请输入密码!");
		//		checkpass = false;
	} else {
		//		alert("开始登录");
		LoginPost();
	}
}

// ajax的post方法:
// login的post方法，调用B1接口
function LoginPost() {
	$.ajax({
		//提交数据的类型 POST GET
		type: "POST",
		//提交的网址
		url: "http://localhost:8080/FootBallWebSite/LoginServlet",
		//提交的数据
		data: {
			name: "丘士丹",
			password: "1234"
		},
		//返回数据的格式
		datatype: "html", //"xml", "html", "script", "json", "jsonp", "text".
		//在请求之前调用的函数
		beforeSend: function() {
			//			$("#msg").html("logining");
		},
		//成功返回之后调用的函数            
		success: function(data) {
			//			$("#msg").html(decodeURI(data));
		},
		//调用执行后调用的函数
		complete: function(XMLHttpRequest, textStatus) {
			alert(XMLHttpRequest.responseText); //XMLHttpRequest.responseText是返回的信息，用这个来放JSON数据
			try {
				var jsonObject = JSON.parse(XMLHttpRequest.responseText);
				for (var key in jsonObject) {
					alert("属性=" + key + "\n值=" + jsonObject[key]);
				}
			} catch (e) {
				//TODO handle the exception
				alert("返回信息=>" + XMLHttpRequest.responseText + "\n=>无法转换为JSON");
			}
			//			HideLoading();
		},
		//调用出错执行的函数
		error: function() {
			//请求出错处理
		}
	});
}