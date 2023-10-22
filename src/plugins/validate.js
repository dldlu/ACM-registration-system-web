import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN' // 引入中文文件
Validator.addLocale(zh)
const config = {
    locale: 'zh_CN',
    fieldsBagName: 'fieldBags'
}
Vue.use(VeeValidate, config)

const dictionary = {
    zh_CN: {
        messages: {
            required: (field) => '请' + field,
        },
        attributes: {
            Uname:"输入昵称",
            Tname:"输入姓名",
            class:"输入专业班级",
            number:"输入学号",
            sex:"选择性别",
            phone:"输入手机号",
            qq:"输入qq",
            email:'输入邮箱'
        }
    }
}
Validator.updateDictionary(dictionary)

Validator.extend('class', {
    messages: {
        zh_CN: field => '专业班级不超过12个字'
    },
    validate: value => {
        return /^.{1,8}$/.test(value)
    }
})

Validator.extend('Uname', {
    messages: {
        zh_CN: field => '昵称不超过12个字符'
    },
    validate: value => {
        return /^.{1,12}$/.test(value)
    }
})

Validator.extend('Tname', {
    messages: {
        zh_CN: field => '姓名不超过8个字'
    },
    validate: value => {
        return /^.{1,8}$/.test(value)
    }
})

Validator.extend('phone', {
    messages: {
        zh_CN: field => '手机号格式错误'
    },
    validate: value => {
        return /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/.test(value)
    }
})

Validator.extend('qq', {
    messages: {
        zh_CN: field => 'qq格式错误'
    },
    validate: value => {
        return /^[1-9]{1}[0-9]{4,9}$/.test(value)
    }
})

Validator.extend('number', {
    messages: {
        zh_CN: field => '学号格式错误'
    },
    validate: value => {
        return /^(18|19|20|21|22)\d{6}$/.test(value)||/^88888888$/.test(value)
    }
})

Validator.extend('email', {
    messages: {
        zh_CN: field => '邮箱格式错误'
    },
    validate: value => {
        return /[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/.test(value)
    }
})
