// 导入定义验证规则的模块
const joi = require('joi')

// 验证规则对象 - 发布文章
exports.add_article_schema = joi.object({
  body: {
    // 定义 标题、分类Id、内容、发布状态 的验证规则
    title:joi.string().required(),
    cate_id:joi.number().integer().min(1).required(),
    content:joi.string().required().allow(''),
    state:joi.string().valid('已发布', '草稿').required(),
  },
})