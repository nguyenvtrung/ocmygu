const login = {
  tr: false,
  dangnhap: function () {
    const _this = this
    dangNhap.addEventListener('click', e => {
      btnDangNhap.style.display = 'block'
      btnDangKy.style.display = 'none'
      fullname.style.display = 'none'
      email.style.display = 'none'
      repws.style.display = 'none'
      form__title.innerHTML = 'Đăng nhập'
      dangky.style.display = 'block'
      dangNhap.style.display = 'none'
    })
  },
  dangky: function () {
    const _this = this
    dangky.addEventListener('click', e => {
      btnDangNhap.style.display = 'none'
      btnDangKy.style.display = 'block'
      fullname.style.display = 'flex'
      email.style.display = 'flex'
      repws.style.display = 'flex'
      form__title.innerHTML = 'Đăng ký'
      dangky.style.display = 'none'
      dangNhap.style.display = 'block'
    })
  },
  check_form: function () {
    $('.fa-solid.fa-eye').addEventListener('click', e => {
      $('#password').setAttribute('type', 'password')
      $('#repassword').setAttribute('type', 'password')
      $('.fa-solid.fa-eye').style.display = 'none'
      $('.fa-solid.fa-eye-slash').style.display = 'block'
    })
    $('.fa-solid.fa-eye-slash').addEventListener('click', e => {
      $('#password').setAttribute('type', 'text')
      $('#repassword').setAttribute('type', 'text')
      $('.fa-solid.fa-eye').style.display = 'block'
      $('.fa-solid.fa-eye-slash').style.display = 'none'
    })
  },
  run : function () {
    btnDangNhap.style.display = 'none'
    dangky.style.display = 'none'
    $('.fa-solid.fa-eye').style.display = 'none'
  },
  start: function () {
    const _this = this
    _this.run()
    _this.dangnhap()
    _this.dangky()
    _this.check_form()

  }
}
login.start()



