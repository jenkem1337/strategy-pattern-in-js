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


class View{
    constructor(context){
        this.formStrategy = context
        
        this.loginButton = document.getElementById("loginForm")
        this.registerButton = document.getElementById("registerForm")
        this.adminButton = document.getElementById("adminForm")
    }

    loginView(){
        this.formStrategy.setStrategy(new LoginForm())
        this.formStrategy.renderForm()
    }

    registerView(){
        this.formStrategy.setStrategy(new RegisterForm())
        this.formStrategy.renderForm()
    }

    adminView(){
        this.formStrategy.setStrategy(new AdminForm())
        this.formStrategy.renderForm()
    }
    
    initialize(){
        this.loginButton.addEventListener   ('click', () => this.loginView())
        this.registerButton.addEventListener('click', () => this.registerView())
        this.adminButton.addEventListener   ('click', () => this.adminView())
    }
}

const $ = new View(new FormContext())
$.initialize()