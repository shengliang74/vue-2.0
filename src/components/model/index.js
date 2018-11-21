import slModel from './slModel'

export default {
	install (Vue,pluginOptions = {}) {
		const VueModel = Vue.extend(slModel);
		let model = null;

		function $modelFn() {};

		$modelFn.open = function() {
			if(!model){
					model = new VueModel();
					model.$mount();
					// 挂载
	          		document.querySelector( pluginOptions.container || 'body').appendChild(model.$el);
				}
				model.open();
		};
		$modelFn.hidden = function() {
			if(model){
					model.hidden();
				}
		}
		Vue.prototype.$modelFn = $modelFn;
	}
}