<!-- /***************************
*
*   created by qiusd on 2016-02-26
*   cooperation xxx
*
*   1、index.html是主页面 
*   2、导航按钮会将其他页面加载到index.html的<div class="middleDiv" id="middleDivDes"> 
*   3、其他页面样式参照welcomepage.html/welcomepage.css编写
*
*   ***用户登陆***
*   a、必须登录了才能维护个人属性
*   
****************************  / -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>足球大本营</title>
	</head>

	<body>
		<div class="middleDiv" id="middleDivDes">
			<div id="loginDiv">
				<!--标题-->
				<div id="logintitle">Login</div>
				<form role="form" method="post" target="postTo">
					<!--选择部门-->
					<div class="btn-group" id="department">
						<button type="button" class="btn btn-default dropdown-toggle btn-block" data-toggle="dropdown" id="mydepartment" tag="选择部门">
							选择部门 <span class="caret"></span>

						</button>
						<ul class="dropdown-menu" role="menu" id="departmentlist">
							<li><a href="#">广州测试部</a></li>
							<li><a href="#">广州研发支持部</a></li>
							<li><a href="#">广州海外支持部</a></li>
							<li><a href="#">广州开发一部</a></li>
							<li><a href="#">广州开发二部</a></li>
							<li><a href="#">广州开发三部</a></li>
							<li><a href="#">广州开发四部</a></li>
							<li><a href="#">广州行政部</a></li>
							<li><a href="#">其他基地部门</a></li>
						</ul>
					</div>
					<!--用户名-->
					<div class="form-group" id="username">
						<input type="text" class="form-control" id="nameinput" placeholder="Username">
					</div>
					<!--密码-->
					<div class="form-group" id="password">
						<input type="password" class="form-control" id="passwordinput" placeholder="Passowrd">
					</div>
					<div id="loginbtn">
						<button type="submit" class="btn btn-primary btn-block" id="submitinput">Let me in.</button>
					</div>
				</form>
				<iframe name="postTo" style="display:none"></iframe>
			</div>

		</div>

		<!-- 第三方引用 -->
		<script type="text/javascript" src="../js/third/jquery.min.js"></script>
		<script type="text/javascript" src="../js/third/bootstrap.min.js"></script>
		<script type="text/javascript" src="../js/third/ajaxrequest.js"></script>
		<link rel="stylesheet" type="text/css" href="../css/bootstrap/bootstrap.min.css">
		<!-- 自定义的css和js -->
		<link rel="stylesheet" type="text/css" href="../css/login.css">
		<script type="text/javascript" src="../js/login.js"></script>

	</body>

</html>