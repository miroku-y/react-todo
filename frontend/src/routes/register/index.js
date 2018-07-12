import React from 'react';
import styles from  "./index.less"
import {Form,Input,Button} from 'antd'
import { connect } from 'dva';

const FormItem = Form.Item;
@Form.create()
@connect((state)=>{
    return {}
})
class Register extends React.Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                this.props.dispatch({
                    type:'register/register',
                    payload:{
                        userName:values.userName,
                        nickName:values.nickName,
                        password:values.password,
                        copypassword:values.copypassword,
                    }
                })
            }
            console.log(err,values);
        })
    }
    goLogin=()=>{
        this.props.dispatch({
            type:'register/redirect',
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
                        getFieldDecorator('nickName',{
                            rules:[
                                {
                                    required:true,
                                    message:'请输入昵称'
                                }
                            ]
                        })(
                            <Input placeholder='昵称'/>
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
                <FormItem>
                    {
                        getFieldDecorator('copypassword',{
                            rules:[
                                {
                                    required:true,
                                    message:'请输入密码'
                                }
                            ]
                        })(
                            <Input placeholder='确认密码'/>
                        )
                    }
                </FormItem>
                <FormItem className={styles.login}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
                </FormItem>
                <FormItem>
                    <span>已有账户？</span>
                    <Button onClick={this.goLogin}>去登录</Button>
                </FormItem>
            </Form>
        </div>
    }
}
export default Register;