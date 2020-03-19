/**
 * reply.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
const moment = require('moment');
// replay 表
module.exports = (sequel, dataTypes) => {
	const Reply = sequel.define(
		'reply',
		{
			id: {
				type: dataTypes.INTEGER(11),
				primaryKey: true,
				autoIncrement: true
			},
			content: {
				type: dataTypes.TEXT,
				allowNull: false
			}, // 评论详情
			createdAt: {
				type: dataTypes.DATE,
				defaultValue: dataTypes.NOW,
				get() {
					return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
				}
			},
			updatedAt: {
				type: dataTypes.DATE,
				defaultValue: dataTypes.NOW,
				get() {
					return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
				}
			}
		},
		{
			timestamps: true
		}
	);

	Reply.associate = models => {
		Reply.belongsTo(models.user, {
			foreignKey: 'userId',
			targetKey: 'id',
			constraints: false
		})
	};

	return Reply;
};
