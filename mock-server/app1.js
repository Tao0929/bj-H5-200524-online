const mkdirp = require('mkdirp');
const uuid = require('node-uuid');
const path = require('path')
const fs = require('fs')
const Koa = require("koa")
const cros = require("koa2-cors")
const Router = require('koa-router') // koa 路由中间件
const app = new Koa();
const router = new Router(); // 实例化路由
const koaBody = require('koa-body');

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
  }
}));

app.use(cros());

router.post('/upload', async (ctx, next) => {
    // 从请求参数里拿文件名，没有获取到就使用uuid生成一串uuid作为文件名
    const filename = ctx.request.body.filename || uuid.v4();
    const file = ctx.request.files.image;    // 获取上传文件
 
    if (file) {
        const reader = fs.createReadStream(file.path);    // 创建可读流
        const ext = file.name.split('.').pop();        // 获取上传文件扩展名
        // 创建文件夹
        const uploadPath =  __dirname+ "/upload"; // 这是我测试的路径
        const flag = fs.existsSync(uploadPath); // 判断文件夹是否存在
        // 同步创建多级文件夹
        if (!flag) mkdirp.sync(uploadPath);
        const upStream = fs.createWriteStream(`${uploadPath}/${filename}.${ext}`); // 创建可写流
        await reader.pipe(upStream);    // 可读流通过管道写入可写流
        ctx.body = { "code": 200, "description": "SUCCESS" };
    } else {
        ctx.body = { "code": 201, "description": "没有选择图片" };
    }
});

app.use(router.routes());

app.listen(3333, () => {
    console.log('This server is running at http://localhost:' + 3333)
})
