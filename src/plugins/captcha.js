import { postInfo, captchaCheck } from "@/api";


let captcha;
export function getInstance(instance) {
  captcha = instance;
}

// 业务请求(带验证码校验)回调函数
/**
 * @name captchaVerifyCallback
 * @function
 * 请求参数：由验证码脚本回调的验证参数，不需要做任何处理，直接传给服务端即可
 * @params {string} captchaVerifyParam
 * 返回参数：字段名固定，captchaResult为必选；如无业务验证场景时，bizResult为可选
 * @returns {{captchaResult: boolean, bizResult?: boolean|undefined}}
 */
export async function captchaVerifyCallback(captchaVerifyParam) {
  // let verifyResult = {
  //   captchaResult: false, //result.captchaVerifyResult, // 验证码验证是否通过，boolean类型，必选
  //   bizResult: false, // 业务验证是否通过，boolean类型，可选；若为无业务验证结果的场景，bizResult可以为空
  // };
    let verifyResult
    var obj = JSON.parse(captchaVerifyParam)
    let result = await captchaCheck(obj);
    verifyResult = {
      captchaResult: result.code === 200, // 验证码验证是否通过，boolean类型，必选
    }
    //return verifyResult
    return verifyResult
}

// 业务请求验证结果回调函数
export async function onBizResultCallback(bizResult) {
  if (bizResult === true) {
    let ip = returnCitySN["cip"];
    let info = {};
    info.nickName = this.form.nickname;
    info.studentName = this.form.name;
    info.studentNumber = this.form.stuid;
    info.majorClass = this.form.clas;
    info.sex = this.form.gender;
    info.qq = this.form.qq;
    info.email = this.form.email;
    info.phone = this.form.phone;
    info.lastIp = ip;
    let result = await postInfo(JSON.stringify(info));
    if (result.code === 200) {
      this.$alert("报名成功", "提示", {
        confirmButtonText: "确定",
        callback: () => {
          this.loading = false;
        },
      });
      await this.$router.push("/inquire");
    } else {
      this.$alert(result.message, "提示", {
        confirmButtonText: "确定",
        callback: () => {
          this.loading = false;
        },
      });
    }
  } else {
    this.$alert("校验失败")
  }
}