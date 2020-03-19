/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
const fs = require('fs');

module.exports = app => {
	fs.readdirSync(__dirname).forEach(file => {
		if (file === 'index.js') return;
		const route = require(`./${file}`);
		app.use(route.routes()).use(route.allowedMethods());
	})
};
