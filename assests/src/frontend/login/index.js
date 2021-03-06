import '../public/index'
import './index.scss'

new Vue({
    el: '.form',
    data() {
        return {
            userName: '', 
            userPass: '',
            text: '123'
        }
    }, 
    methods: {
        submit () {
            const userInfo = {
                userName: this.userName, 
                userPass: this.userPass
            }
            EB.ajax({
                url: '/api/user/login',
                data: userInfo,
                method: 'post',
                success(res) {
                    // alert('登陆成功')
                    setTimeout(() => {
                        location.href = '/category'
                    }, 0)
                }, 
                error(err) {
                    console.log(err)
                    alert(err)
                }
            })
        }
    }
})