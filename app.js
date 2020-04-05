/**
 * app.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */

const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const error = require('koa-json-error');
const logger = require('koa-logger');
const path = require('path');

// 引入配置信息
const config = require('./config');
// 引入路由
const router = require('./router');
// 引入数据模型
const dataBase = require('./models');

// 创建一个koa实例
const app = new Koa();

//绑定上下文
const context = require('./utils/context');
Object.keys(context).forEach(key => {
    app.context[key] = context[key] // 绑定上下文对象
});

// 引入中间件
const authHandler = require('./middlewares/authHandler');

// 使用
app.use(cors())
    .use(
        koaBody({
            multipart: true,
            formidable: {
                // uploadDir: path.resolve(__dirname, './upload'),
                keepExtensions: true, // 保持文件的后缀
                maxFileSize: 2000 * 1024 * 1024 // 设置上传文件大小最大限制，默认20M
            }
        })
    )
    .use(
        error({
            postFormat: (e, {stack, ...rest}) => (process.env.NODE_ENV !== 'development' ? rest : {stack, ...rest})
        })
    )
    .use(authHandler)
    .use(logger());

// 加载路由
router(app);

// 启动项目监听端口
app.listen(config.port, () => {
    dataBase.sequel.sync({force: false, logging: false}).then(async () => {
        // 创建初始化数据
        const initData = require('./initData');
        initData();
        console.log('数据库链接成功，服务启动成功，接口地址：');
        console.log(`sever listen on http://127.0.0.1:${config.port}/article/list`);
    }).catch(err => {
        // 输入错误信息
        console.log(err);
    })
});

