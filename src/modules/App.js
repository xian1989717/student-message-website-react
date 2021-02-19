import React from 'react'
import {
  Route,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'
import { Layout, Menu } from 'antd'

import 'antd/dist/antd.css'

import SchoolInformation from './school-information'
import StudentAchievement from './student-achievement'
import StudentInformation from './student-information'
import StudentInformationDetail from './student-information/components/detail'
import StudentTask from './student-task'
import ClassManagement from './class-management'
const { Header, Sider } = Layout


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      menuItems: [
        {
          key: 'schoolInformation',
          name: '学校信息',
          path: '/'
        },
        {
          key: 'studentTask',
          name: '学校作业',
          path: '/studentTask'
        },
        {
          key: 'classManagement',
          name: '班级管理',
          path: '/classManagement'
        },
        {
          key: 'studentInformation',
          name: '学生信息',
          path: '/studentInformation'
        },
        {
          key: 'studentAchievement',
          name: '学生成绩',
          path: '/studentAchievement'
        }
      ],
      selectMenuKey: []
    }
  }

  handleClick = e => {
    this.setState({
      selectMenuKey: e.key,
    })
  }

  render () {
    const MenuItems = this.state.menuItems.map(i => {
      return <Menu.Item key={i.key}>
        <Link
          to={i.path}>
          {i.name}
        </Link>
      </Menu.Item>

    })
    return (
      <HashRouter>
        <Header>Header</Header>
        <Layout
          style={{
            height: '100%'
          }}>
          <Sider
            trigger={null}
            collapsible>
            <Menu
              mode="inline"
              selectedKeys={this.state.selectMenuKey}
              defaultSelectedKeys={this.state.selectMenuKey}
              onClick={this.handleClick}>
              {MenuItems}
            </Menu>
          </Sider>
          <Layout
            className="site-layout"
          >
            <Switch>
              <Route
                path="/"
                component={SchoolInformation}
                exact />
              <Route
                path="/studentInformation/detail"
                component={StudentInformationDetail} />
              <Route
                path="/studentInformation"
                component={StudentInformation} />
              <Route
                path="/classManagement"
                component={ClassManagement} />
              <Route
                path="/studentAchievement"
                component={StudentAchievement} />
              <Route
                path="/studentTask"
                component={StudentTask} />
            </Switch>

          </Layout>
        </Layout>
      </HashRouter >
    )
  }
}

export default App