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

    setStrategy(Strategy){
        this.strategy = Strategy
    }

    renderForm(){
        this.strategy.render()
    }

}

let formStrategy = new FormContext()

const loginBTN = document.getElementById("loginForm")
const registerBTN = document.getElementById("registerForm")
const adminBTN = document.getElementById("adminForm")

loginBTN.addEventListener("click", ()=>{
    formStrategy.setStrategy(new LoginForm())
    formStrategy.renderForm()
})

registerBTN.addEventListener("click", () =>{
    formStrategy.setStrategy(new RegisterForm())
    formStrategy.renderForm()
})

adminBTN.addEventListener("click", ()=>{
    formStrategy.setStrategy(new AdminForm())
    formStrategy.renderForm()
})
