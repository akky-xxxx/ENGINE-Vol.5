for(i = 0; i < 10; i++){
	src += '<li class="clsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclsclscls">テスト' + (i + 1) + '</li>';
}
$('#hoge').append(src);

src = '';
tmp = '';
for(n in funcs){
	var porpName = n.split('_')[0];
	if(porpName != tmp){
		tmp = porpName;
		src += '</optgroup>';
		src += '<optgroup label="' + porpName + '">';
	}else{
	}
	src += '<option value="' + n + '">' + n + '</option>';
}
$('#sel').append(src);

$('#btn').on('click' , function(){
	var name = 'funcs.' + $('#sel').val() + '();',
		cnt = 0,
		timer = setInterval(function(){
			eval(name);
			cnt ++;
			if(cnt == 1) clearInterval(timer);
		} , 100);
	// var cnt = 0;
	// for(n in funcs){
	// 	eval('funcs.' + n + '();');
	// }
});


//集計
$('#form').on('keyup' , function(){
	var ary1 = $(this).val().split(/\r\n|\r|\n/),
		ary2 = [],
		tmp = [],
		num = ary1.length,
		i;

	for(i = 0; i < num; i++){
		if(ary1[i].indexOf('ms') > 0){
			tmp = ary1[i].split(': ');
			ary2.push({
				name : adjust(tmp[0]),
				val : adjust(tmp[1])
			});
		}
	}
	getAverage(ary2);
});
function adjust(obj){
	var tmp = obj.replace(/ms(.*)/,'');
	tmp = tmp.replace(/funcs(.*)\s/,'');
	return tmp;
}

function getAverage(ary){
	var cnt = 0,
		identifier = '';
		num = ary.length,
		i,cal = 0,
		rst = [];

	ary.sort(function(a,b){
		if(a.name<b.name) return -1;
		if(a.name > b.name) return 1;
		return 0;
	});

	for(i = 0; i < num; i++){
		if(i == 0){
			cnt ++;
			identifier = ary[i].name;
			cal += Number(ary[i].val);
		}else if(ary[i].name == ary[i-1].name){
			cnt++;
			cal += Number(ary[i].val);
			if(i + 1 == num){
				rst.push({
					name : identifier,
					val : round(cal / cnt)
				});
			}
		}else if(ary[i].name != ary[i-1].name){
			rst.push({
				name : identifier,
				val : round(cal / cnt)
			});
			identifier = ary[i].name;
			cnt = 1;
			cal = Number(ary[i].val);
		}
	}
	createSrc(rst);
}
function round(num){
	num = num * 100;
	num = Math.round(num);
	num = num / 100;
	return num;
}
function createSrc(ary){
	var src = '',
		num = ary.length,
		i;

	for(i = 0; i < num; i++){
		src += '<dl>';
		src += '<dt>' + ary[i].name + '：</dt>';
		src += '<dd>' + ary[i].val + ' ms</dd>';
		src += '</dl>';
	}
	$('#rst').html(src);
}


