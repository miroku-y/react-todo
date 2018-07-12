import React from 'react'
import {connect} from 'dva'
import {withRouter} from 'dva/router';
import styles from './App.less'
import {Layout} from 'antd'


const {Content} = Layout;
const App = ({children,app,location,loading,dispatch}) =>{

    return (
        <div className={styles.container}>
            <Layout className={styles.parentBox}>
                <Content className={styles.parentBox}>
                    <div className={styles.parentBox}>{children}</div>
                </Content>
            </Layout>
        </div>
    )

}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App));