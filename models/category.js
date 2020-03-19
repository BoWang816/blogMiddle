/**
 * category.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
// category 表
module.exports = (sequel, dataTypes) => {
	const Category = sequel.define('category', {
		id: {
			type: dataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: dataTypes.STRING(100),
			allowNull: false
		}
	});

	Category.associate = models => {
		Category.belongsTo(models.article, {
			as: 'article',
			foreignKey: 'articleId',
			targetKey: 'id',
			constraints: false
		})
	};

	return Category;
};
