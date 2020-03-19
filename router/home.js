/**
 * home.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
const Router = require('koa-router');
const router = new Router();
const { login, register } = require('../controllers/user');
const { getTagList, getCategoryList } = require('../controllers/tags');

// tag category
router.get('/tag/list', getTagList); // 获取所有的 tag 列表
router.get('/category/list', getCategoryList); // 获取 category 列表

// root
router.post('/login', login); // 登录
router.post('/register', register); // 注册

module.exports = router;
