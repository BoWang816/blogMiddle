/**
 * tags.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */

// import models
const { tag: TagModel, category: CategoryModel, sequel } = require('../models');

class TagController {
	static async getTagList(ctx) {
		ctx.body = await TagModel.findAll({
			attributes: ['name', [sequel.fn('COUNT', sequel.col('name')), 'count']],
			group: 'name',
			where: {
				articleId: {$not: null}
			},
			order: [[sequel.fn('COUNT', sequel.col('name')), 'desc']]
		})
	}

	static async getCategoryList(ctx) {
		ctx.body = await CategoryModel.findAll({
			attributes: ['name', [sequel.fn('COUNT', sequel.col('name')), 'count']],
			group: 'name',
			where: {
				articleId: {$not: null}
			},
			order: [[sequel.fn('COUNT', sequel.col('name')), 'desc']]
		})
	}
}

module.exports = TagController;
