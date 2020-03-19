/**
 * initData.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
const {ADMIN_GITHUB_LOGIN_NAME} = require('./config');
const UserController = require('./controllers/user');
const ArticleController = require('./controllers/article');

/**
 * init Data
 */

module.exports = () => {
    // 创建 role === 1 的账号 from github...
    UserController.initGithubUser(ADMIN_GITHUB_LOGIN_NAME);
    ArticleController.initAboutPage();
};
