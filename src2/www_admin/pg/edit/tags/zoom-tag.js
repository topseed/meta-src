
riot.tag2('zoom-tag', '<textarea id="cms1" rows="400"></textarea>', '', '', function(opts) {
    loadjs.ready('site', function () {

    	loadjs([
    		'//cdn.jsdelivr.net/npm/codemirror@5.37.0/lib/codemirror.css'

    		,'//cdn.jsdelivr.net/npm/codemirror@5.37.0/lib/codemirror.min.js'
    		,'//cdn.jsdelivr.net/npm/codemirror@5.37.0/mode/pug/pug.js'

    	], 'cmjs', {
    		async: false
    	})
    })
    loadjs.ready('cmjs', function () {
    	initCodeMirror()
    })

    let myCodeMirror
    function initCodeMirror() {
    	myCodeMirror = CodeMirror.fromTextArea(
    				document.querySelector('#cms1') ,
    				{
    					mode:  'pug'
    					, lineNumbers: true
    					, tabSize: 3
    					, indentWithTabs: true

    					, v1iewportMargin: 'Infinity'
    				}
    		)
    	myCodeMirror.setSize('100%', '100%')
    	loadjs.done('cm')
    }

    function display(data) {

    	let sec_ = '123'
    	let folder_ = 'edit'
    	let fn_ = 'index.pug'
    	loadjs.ready(cm, function() {
    		let url = '/api/read?secret='
    		let folder = '&folder='
    		let fn = '&fn='
    		url = url + sec_ + folder + folder_ + fn + fn_
    		console.log(url)

    		fetch(url)
    			.then(function(resp) {
    				return resp.text()
    			}).then(function(ret) {
    				console.log(ret)

    			}).catch(function(err) {
    				console.log('error', err)
    		})

    	})
    }
});