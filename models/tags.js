/**
 * tags.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
// article 表
module.exports = (sequel, dataTypes) => {
	const Tag = sequel.define('tag', {
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

	Tag.associate = models => {
		Tag.belongsTo(models.article, {
			as: 'article',
			foreignKey: 'articleId',
			targetKey: 'id',
			constraints: false
		})
	};

	return Tag;
};
