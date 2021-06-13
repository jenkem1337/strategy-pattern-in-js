class LoginForm{
    constructor(){
        this.div = document.getElementById("formsComesHere")
    }
    render(){
        let template = `
        <form>
            <h1>Login Form</h1> <br>
            <input type="text" placeholder="Nick Name"> <br>
            <input type="password" placeholder="Password"> <br>
            <button>Log in</button>
        </form>

        `
        this.div.innerHTML = template
    }
}

class RegisterForm{
    constructor(){
        this.div = document.getElementById("formsComesHere")
    }
    render(){
        let template = `
        <form>
            <h1>Register Form</h1> <br>
            <input type="text" placeholder="Nick Name"> <br>
            <input type="text" placeholder="Email"> <br>
            <input type="password" placeholder="Password"> <br>
            <button>Register</button>
        </form>

        `
        this.div.innerHTML = template
    }
}

class AdminForm{
    constructor(){
        this.div = document.getElementById("formsComesHere")
    }
    render(){
        let template = `
        <form>
            <h1>Admin Form</h1> <br>
            <input type="text" placeholder="Admin Name"> <br>
            <input type="password" placeholder="Password"> <br>
            <button>Log in</button>
        </form>
        `
        this.div.innerHTML = template
    }
}

class FormContext{
    constructor(form){
        this.form = form
    }

    renderForm(){
        this.form.render()
    }

}


const loginBTN = document.getElementById("loginForm")
const registerBTN = document.getElementById("registerForm")
const adminBTN = document.getElementById("adminForm")

loginBTN.addEventListener("click", ()=>{
    let loginForm = new FormContext(new LoginForm())
    loginForm.renderForm()
})

registerBTN.addEventListener("click", () =>{
    let registerForm = new FormContext(new RegisterForm())
    registerForm.renderForm()
})

adminBTN.addEventListener("click", ()=>{
    let adminForm = new FormContext(new AdminForm())
    adminForm.renderForm()
})
