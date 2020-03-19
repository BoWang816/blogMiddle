/**
 * ip.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
// ip 表
module.exports = (sequel, dataTypes) => {
	const Ip = sequel.define('ip', {
		id: {
			type: dataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true
		},
		ip: {
			type: dataTypes.TEXT,
			allowNull: false
		}, // ip 地址
		auth: {
			type: dataTypes.BOOLEAN,
			defaultValue: true
		} // 是否可用
	});

	Ip.associate = models => {
		Ip.belongsTo(models.user, {
			foreignKey: 'userId',
			targetKey: 'id',
			constraints: false
		})
	};
	return Ip;
};
