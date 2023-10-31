import request from "@/api/request";

export const postInfo = (Info,token) => request({
    url:'/contest/submitInfor',
    method:'post',
    data:Info,
    headers: { 'Content-Type': 'application/json','token':token },
    dataType: 'JSON'
});

export const inquireInfo=(studentNumber,studentName,token)=>request({
    url:'/contest/signUpInfoByNumber',
    method:'get',
    params:{studentNumber:studentNumber,studentName:studentName},
    headers: { 'token':token },
});

export const captchaCheck=(captchaVerifyParam)=>request({
    url:'/contest/captcha',
    method:'post',
    headers: { 'Content-Type': 'application/json'},
    data: captchaVerifyParam,
});




