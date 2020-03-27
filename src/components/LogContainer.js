import React, { Component } from 'react'
import { Button, Form, Message} from 'semantic-ui-react'
let logAPI = "http://localhost:3000/login"
let profileAPI = "http://localhost:3000/profile"

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

    //JSON obj
    signObj=()=>{
        return {
            username: this.state.username,
            password: this.state.password    
        }
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
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(this.signObj())
            })
            let user = await resp.json()
            console.log(user)
           
            //storing token
            localStorage.setItem('jwt',user.jwt)
            this.props.updateToken()

            //gets auth
            let r = await fetch(profileAPI, {
                method: 'GET',
                headers: {
                Authorization: `Bearer ${user.jwt}`
                }
              })
              let profile = await r.json()
              console.log(profile)

            //clears input
            this.setState({
                username:"",
                password:""
            })

            //updates state to display message
            Object.keys(user)[0] !== 'error'?
            this.setState({
                success:true,
                error:false,
                warning:false
            })
            :
            this.setState({
                error:true,
                warning:false,
                success:false
            })

            
            
            
              
            }catch(error){
                //fails loudly
                console.log(error)
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
                <h1 className="logtitle">Login</h1>
           
            <Form onSubmit={this.handleSubmit} success={this.state.success} error={this.state.error} warning={this.state.warning}>
            
            <Form.Field>
              <label>Username</label>
              <input placeholder='Username' name="username" value={this.state.username} onChange={this.updateInput}/>
            </Form.Field>
            <Form.Field >
              <label>Password</label>
              <input type='password' name="password" placeholder='Password' value={this.state.password} onChange={this.updateInput}/>
            </Form.Field>
            
            <Message
            success
            header='Form Completed'
            content="Welcome Back"
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
            <Button type='submit'>Login</Button>
          </Form>
               
          </div>
        )
    }
}

export default LogContainer