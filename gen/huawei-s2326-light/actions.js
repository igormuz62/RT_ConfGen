//ALEKSEY MAKSIMENKO 2016 (c)
function begin() {

	confcreate.onclick = function() {
		var vlan = document.getElementById('vlan');
		var sysname = document.getElementById('sysname');
		var ip = document.getElementById('ip');
		var mask = document.getElementById('mask');
		var gateway = document.getElementById('gateway');
		var config = document.getElementById('config');
		var pass = document.getElementById('pass');
		var template = config_template;
		template = template.replace(new RegExp('==VLAN==','g'),vlan.value);
		template = template.replace(new RegExp('==SYSNAME==','g'),sysname.value);
		template = template.replace(new RegExp('==IP==','g'),ip.value);
		template = template.replace(new RegExp('==MASK==','g'),mask.value);
		template = template.replace(new RegExp('==GATEWAY==','g'),gateway.value);
		template = template.replace(new RegExp('==PASS==','g'),pass.value);
		
		config.innerHTML = template;	
	};

	download.onclick = function() {
		downloadInnerText('huawei-s2326-light.txt', 'config','text/plain');
	};

	function downloadInnerText(filename, elId, mimeType) {
		var el = document.getElementById(elId);
		var link = document.createElement('a');
		mimeType = mimeType || 'text/plain';
		link.setAttribute('download', filename);
		link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(el.innerText));
		link.click(); 
	}	
};
document.addEventListener("DOMContentLoaded", begin);
