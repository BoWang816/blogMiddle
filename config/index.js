/**
 * index.js
 * @author wangbo
 * @since 2020/3/19
 * @github https://github.com/BoWang816
 */
const devMode = process.env.NODE_ENV === 'development';

// 公共配置
const config = {
    // 服务端口
    port: 7000,
    // github用户名
    ADMIN_GITHUB_LOGIN_NAME: '',
    // github验证信息
    GITHUB: {
        client_id: 'c6a96a84105bb0be1fe5',
        client_secret: '463f3994ab5687544b2cddbb6cf44920bf179ad9',
        access_token_url: 'https://github.com/login/oauth/access_token',
        fetch_user_url: 'https://api.github.com/user', // 用于 oauth2
        fetch_user: 'https://api.github.com/users/' // fetch user url https://api.github.com/users/gershonv
    },
    // 邮件通知服务
    // EMAIL_NOTICE: {
    //     // detail: https://nodemailer.com/
    //     enable: true, // 开关
    //     transporterConfig: {
    //         host: 'smtp.163.com',
    //         port: 465,
    //         secure: true, // true for 465, false for other ports
    //         auth: {
    //             user: 'guodadablog@163.com', // generated ethereal user
    //             pass: '123456' // generated ethereal password 授权码 而非 密码
    //         }
    //     },
    //     subject: '郭大大的博客 - 您的评论获得新的回复！', // 主题
    //     text: '您的评论获得新的回复！',
    //     WEB_HOST: 'http://127.0.0.1:3000' // email callback url
    // }
    TOKEN: {
        secret: 'guo-test', // secret is very important!
        expiresIn: '720h' // token 有效期
    },
    // 数据库配置
    DATABASE: {
        database: 'test',
        user: 'root',
        password: 'Wangbo1015...',
        options: {
            host: 'localhost', // 连接的 host 地址
            dialect: 'mysql', // 连接到 mysql
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            define: {
                timestamps: false, // 默认不加时间戳
                freezeTableName: true // 表名默认不加 s
            },
            timezone: '+08:00'
        }
    }
};

// 生产环境
if (!devMode) {
    console.log('production....');

    // 配置数据库
    config.DATABASE = {
        ...config.DATABASE,
        database: '', // 数据库名
        user: '', // 账号
        password: '' // 密码
    };

    // 配置 github 授权
    config.GITHUB.client_id = '';
    config.GITHUB.client_secret = '';

    // ==== 配置 token 密钥
    config.TOKEN.secret = '';

    // ==== 配置邮箱

    // config.EMAIL_NOTICE.enable = true
    // config.EMAIL_NOTICE.transporterConfig.auth = {
    //     user: 'guodadablog@163.com', // generated ethereal user
    //     pass: '123456XXX' // generated ethereal password 授权码 而非 密码
    // };
    // config.EMAIL_NOTICE.WEB_HOST = 'https://guodada.fun';
}

module.exports = config;
