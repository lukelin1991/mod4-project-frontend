import React, { Component } from 'react'
import { Button, Form, Message} from 'semantic-ui-react'
let logAPI = "http://localhost:3000/users"

class LogContainer extends Component{
    state={
        username:"",
        password:"",
        success:null,
        error:null,
        warning:null
        
    }

    updateInput=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    handleSubmit=async ()=>{
        let {username,password} = this.state
        if (username === "" || password === ""){
            this.setState({
                warning:true,
                error:false,
                success:false
            })
        }
        else{
            try{
            let resp = await fetch(logAPI,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(this.state)
            })
            let user = await resp.json()
            console.log(user)
            this.setState({
                username:"",
                password:""
            })
            this.setState({
                success:true,
                error:false,
                warning:false
            })
            }catch(error){
                this.setState({
                    error:true,
                    warning:false,
                    success:false
                })
            }
        }
        }




    render(){
        return(
            <div className="logcontainer">
                <h1 className="signtitle">Sign up</h1>
           
            <Form onSubmit={this.handleSubmit} success={this.state.success} error={this.state.error} warning={this.state.warning}>
            
            <Form.Field>
              <label>Username</label>
              <input placeholder='Username' name="username" value={this.state.username} onChange={this.updateInput}/>
            </Form.Field>
            <Form.Field >
              <label>password</label>
              <input type='password' name="password" placeholder='password' value={this.state.password} onChange={this.updateInput}/>
            </Form.Field>
            
            <Message
            success
            header='Form Completed'
            content="You're all signed up"
            />
            <Message
            error
            header='Action Forbidden'
            content='Error signing in. Try new username'
            />
            <Message
            warning
            header='Could you check something!'
            content='Fields cannot be blank'
            />
            <Button type='submit'>Sign Up</Button>
          </Form>
               
          </div>
        )
    }
}

export default LogContainer