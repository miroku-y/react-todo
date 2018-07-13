import React from 'react';
import {Button,Table,Modal,Form,DatePicker,Input} from 'antd';
import {connect} from 'dva';
import moment from 'moment';
import styles from './index.less'

const FormItem = Form.Item;
const HEIGHT = document.documentElement.scrollHeight || document.body.scrollHeight;
@Form.create()
@connect((state)=>{
    return {
        visible:state.todo.visible,
        list:state.todo.list
    }
})
class Todo extends React.Component{

    column=()=>[
        {key:"1",title:"日期",width:140,dataIndex:"date",fixed:'left'},
        {key:"2",title:"信息",dataIndex:"message"},
        {key:"22",title:"信息2",dataIndex:"message"},
        {key:"23",title:"信息3",dataIndex:"message"},
        {key:"24",title:"信息4",dataIndex:"message"},
        {key:"25",title:"信息5",dataIndex:"message"},
        {key:"26",title:"信息6",dataIndex:"message"},
        {key:"27",title:"信息7",dataIndex:"message"},
        {key:"28",title:"信息8",dataIndex:"message"},
        {key:"3",title:"操作",fixed:'right',render:(text,record)=>{
                const {_id}= text;
                return <Button type='danger' onClick={()=>this.delete(_id)}>删除</Button>
            }
        }
    ]

    delete=(id)=>{
        this.props.dispatch({
            type:'todo/delete',
            payload:{
                _id:id
            }
        }).then((success)=>{
            if(success){
                this.props.dispatch({
                    type:'todo/todoList',
                    payload:{}
                })
            }
        })
    }

    handleToggle=()=>{
        this.props.dispatch({
            type:'todo/visibleAction',
            payload:{}
        })
    }

    handleOk=()=>{
        this.handleSubmit();
    }
    handleSubmit=(e)=>{
        this.props.form.validateFields((err,values)=>{
            if(!err){
                this.props.dispatch({
                    type:'todo/addTodo',
                    payload:{
                        date:moment(values.time['_d']).format('YYYY-MM-DD'),
                        message:values.msg
                    }
                }).then((success)=>{
                    if(success){
                        this.props.dispatch({
                            type:'todo/todoList',
                            payload:{
                                
                            }
                        })
                        this.handleToggle();
                    }
                })
            }
        })
    }
    
    render(){
        const {getFieldDecorator} = this.props.form;
        return <div className={styles.todoList}>
            <Table
            columns={this.column()}
            dataSource={this.props.list}
            rowKey="_id"
            scroll={{ x: 1120, y: HEIGHT/2 }}
        />
        <p style={{textAlign:"right"}} onClick={this.handleToggle}><Button type="primary">添加</Button></p>
        <Modal
            title="添加列表"
            visible={this.props.visible}
            onCancel={this.handleToggle}
            footer={null}
            // footer={[<Button key="cancel" onClick={this.handleToggle}>
            //     取消
            // </Button>,
            // <Button key="ok" onClick={this.handleOk}> 
            //     确定
            // </Button>]}
        >
            <Form >
                <FormItem >
                    {
                        getFieldDecorator('time',{
                            rules:[{required:true,message:'请选择时间'}]
                        })(
                            <DatePicker format="YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('msg',{
                            rules:[{
                                required:true,message:'请填写相关信息'
                            }]
                        })(
                            <Input type="text"/>
                        )
                    }
                </FormItem>

                <FormItem>
                    <p>
                        <Button onClick={this.handleToggle}>
                            取消
                        </Button>
                        <Button onClick={this.handleOk}> 
                            确定
                        </Button>
                    </p>
                </FormItem>
            </Form>
        </Modal>
        </div>
    }
}

export default Todo;

