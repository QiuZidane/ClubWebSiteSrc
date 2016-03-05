/*
 * created by kfzx-qiusd 2016-03-02
 * 
 */


var departmentlist = document.getElementById("departmentlist");
departmentlist.addEventListener('click',selectDepartment,false);

var submitinput = document.getElementById("submitinput");
submitinput.addEventListener('click',submitCheck,false);

//实现点击部门list后更新部门button的文字
function selectDepartment(event) {
	var selectedlist = event.target; // 获取点击目标
	document.getElementById("mydepartment").innerHTML = selectedlist.innerHTML;	
	document.getElementById("mydepartment").setAttribute('tag',selectedlist.innerHTML);
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
		alert("开始登录");
	}
	
	
}
