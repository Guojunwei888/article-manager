// 导入定义验证规则的模块
const joi = require('joi')

const id = joi.number().integer().min(1).required()
const alias = joi.string().alphanum().required()
const name = joi.string().required()

// 校验规则对象 - 添加分类
exports.add_cate_schema = joi.object({
  body: {
    // 定义 分类名称 和 分类别名 的校验规则
    name,
    alias,
  },
})

// 校验规则对象 - 删除分类
exports.delete_cate_schema = joi.object({
    params: {
      // 定义 分类Id 的校验规则
      id,
    },
  })

// 校验规则对象 - 根据 Id 获取分类
exports.get_cate_schema = joi.object({
    params: {
      id,
    },
  })

  // 校验规则对象 - 更新分类
exports.update_cate_schema = joi.object({
    body: {
      id,
      name,
      alias,
    },
  })