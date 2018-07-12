import React from 'react';
import {Button,Table,Modal,Form,DatePicker,Input} from 'antd';
import {connect} from 'dva';
import moment from 'moment';

const FormItem = Form.Item;

@Form.create()
@connect((state)=>{
    return {
        visible:state.todo.visible,
        list:state.todo.list
    }
})
class Todo extends React.Component{

    column=()=>[
        {key:"1",title:"日期",dataIndex:"date"},
        {key:"2",title:"信息",dataIndex:"message"},
        {key:"3",title:"操作",dataIndex:"use"},
    ]

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
        console.log(e);
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log('成功了',moment(values.time['_d']).format('YYYY-MM-DD'))
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
        console.log(this.props.list);
        return <div>
            <Table
            columns={this.column()}
            dataSource={this.props.list}
            rowKey="_id"
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

