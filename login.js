$(function (){
  $('#link_login').on('click',function (){
    $('.login_box').hide()
    $('.reg_box').show()
  })
  $('#link_reg').on('click',function (){
    $('.login_box').show()
    $('.reg_box').hide()
  })
  layui.form.verify({
    pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ],
    repass:function (value){
      const pwd = $('.reg_box [name=repassword]').val()
      if(pwd!==value){
        return '两次输入不一致'
      }
    }
  })
  $('#form_reg').on('submit',function (e){
    e.preventDefault();
    $.post('api/reguser',{
      username:$('#form_reg [name=username]').val(),
        password:$('#form_reg [name=password]').val()},function (res){
      if(res.status!==0){
        return layui.layer.msg(res.message);
      }
      layui.layer.msg('注册成功');
      $('#link_reg').click();
    })
  })





















})
