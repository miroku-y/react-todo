import React from 'react';
import styles from  "./index.less"
import {Form,Input,Button} from 'antd'
import { connect } from 'dva';

const FormItem = Form.Item;
@Form.create()
@connect((state)=>{
    return {}
})
class Login extends React.Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                this.props.dispatch({
                    type:'login/login',
                    payload:{
                        userName:values.userName,
                        password:values.password,
                    }
                })
            }
        })
    }
    goRegister=()=>{
        this.props.dispatch({
            type:'login/redirect',
            payload:{}
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return <div className={styles.loginContainer}>
            <Form className={styles.formGroup} onSubmit={this.handleSubmit}> 
                <FormItem>
                    {
                        getFieldDecorator('userName',{
                            rules:[
                                {
                                    required:true,
                                    message:'请输入用户名'
                                }
                            ]
                        })(
                            <Input placeholder='用户名'/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('password',{
                            rules:[
                                {
                                    required:true,
                                    message:'请输入密码'
                                }
                            ]
                        })(
                            <Input placeholder='密码'/>
                        )
                    }
                </FormItem>
                <FormItem className={styles.login}>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
                </FormItem>
                <FormItem>
                    <span>还没有账户？</span>
                    <Button onClick={this.goRegister}>去注册</Button>
                </FormItem>
            </Form>
        </div>
    }
}
export default Login;