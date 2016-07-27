// funcs.idSelector_$ = function(){
// 	var thisName = 'idSelector_$';
// 	console.count(thisName);
// 	console.time(thisName);
// 	for(i = 0; i < loops; i++){
// 		$('#hoge');
// 	}
// 	console.timeEnd(thisName);
// }
// funcs.idSelector_js = function(){
// 	var thisName = 'idSelector_js';
// 	console.count(thisName);
// 	console.time(thisName);
// 	for(i = 0; i < loops; i++){
// 		$(document.getElementById('hoge'));
// 	}
// 	console.timeEnd(thisName);
// }
funcs.selectorType_id = function(){
	var thisName = 'selectorType_id';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < loops; i++){
		$('#hoge');
	}
	console.timeEnd(thisName);
}
funcs.selectorType_class = function(){
	var thisName = 'selectorType_class';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < loops; i++){
		$('.hoge');
	}
	console.timeEnd(thisName);
}
funcs.selector_css = function(){
	var thisName = 'selector_css';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < loops; i++){
		$('#hoge > li');
	}
	console.timeEnd(thisName);
}
funcs.selector_children = function(){
	var thisName = 'selector_children';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < loops; i++){
		$('#hoge').children('li');
	}
	console.timeEnd(thisName);
}
funcs.selector_find = function(){
	var thisName = 'selector_find';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < loops; i++){
		$('#hoge').find('li');
	}
	console.timeEnd(thisName);
}
funcs.loop_while = function(){
	var thisName = 'loop_while';
	console.count(thisName);
	console.time(thisName);
	i = 0;
	while(i < loops){
		ary[i];
		i++
	};
	console.timeEnd(thisName);
}
funcs.loop_for = function(){
	var thisName = 'loop_for';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < loops; i++){
		ary[i];
	}
	console.timeEnd(thisName);
}
funcs.loop_forIn = function(){
	var thisName = 'loop_forIn';
	console.count(thisName);
	console.time(thisName);
	for(i in ary){
		ary[i];
	}
	console.timeEnd(thisName);
}
funcs.loop_forEach = function(){
	var thisName = 'loop_forEach';
	console.count(thisName);
	console.time(thisName);
	ary.forEach(function(e,i){
		ary[i];
	});
	console.timeEnd(thisName);
}
funcs.loop_$each = function(){
	var thisName = 'loop_$each';
	console.count(thisName);
	console.time(thisName);
	$.each(ary,function(i){
		ary[i];
	});
	console.timeEnd(thisName);
}
// funcs.append_each = function(){
// 	var thisName = 'append_each';
// 	console.count(thisName);
// 	console.time(thisName);
// 	for(i = 0; i < 100; i++){
// 		$("#test").append('あ');
// 	}
// 	console.timeEnd(thisName);
// }
// funcs.append_collect = function(){
// 	var thisName = 'append_collect';
// 	console.count(thisName);
// 	console.time(thisName);
// 	tmp = '';
// 	for(i = 0; i < 100; i++){
// 		tmp += 'あ';
// 	}
// 	$("#test").append(tmp);
// 	console.timeEnd(thisName);
// }
funcs.method_normal = function(){
	var thisName = 'method_normal';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < 100; i++){
		$("#test").css('color','red');
		$("#test").css('color','red');
		$("#test").css('color','red');
		$("#test").css('color','red');
		$("#test").css('color','red');
		$("#test").css('color','red');
		$("#test").css('color','red');
		$("#test").css('color','red');
		$("#test").css('color','red');
		$("#test").css('color','red');
	}
	console.timeEnd(thisName);
}
funcs.method_chain = function(){
	var thisName = 'method_chain';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < 100; i++){
		$("#test").css('color','red')
		.css('color','red')
		.css('color','red')
		.css('color','red')
		.css('color','red')
		.css('color','red')
		.css('color','red')
		.css('color','red')
		.css('color','red')
		.css('color','red');
	}
	console.timeEnd(thisName);
}
funcs.str_match = function(){
	var thisName = 'str_match';
	var str = 'あいうえお';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < 100; i++){
		str.match('1');
	}
	console.timeEnd(thisName);
}
funcs.str_indexOf = function(){
	var thisName = 'str_indexOf';
	var str = 'あいうえお';
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < 100; i++){
		str.indexOf('1');
	}
	console.timeEnd(thisName);
}
funcs.class_hasClass = function(){
	var thisName = 'class_hasClass';
	var target = $('#hoge').find('li');
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < 100; i++){
		target.hasClass('hoge');
	}
	console.timeEnd(thisName);
}
funcs.class_attr = function(){
	var thisName = 'class_attr';
	var target = $('#hoge').find('li');
	console.count(thisName);
	console.time(thisName);
	for(i = 0; i < 100; i++){
		target.attr('class').match('hoge')
	}
	console.timeEnd(thisName);
}