import React from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'

import SchoolInformation from './school-information'
import StudentAchievement from './student-achievement'
import StudentInformation from './student-information'
import StudentTask from './student-task'
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
          key: 'studentInformation',
          name: '学生信息',
          path: '/studentInformation'
        },
        {
          key: 'studentAchievement',
          name: '学生成绩',
          path: '/studentAchievement'
        },
        {
          key: 'studentTask',
          name: '学校作业',
          path: '/studentTask'
        }
      ],
      selectMenuKey: ['schoolInformation']
    }
  }
  clickMenu = (key) => {
    this.setState({
      selectMenuKey: key
    })
  }

  getKey = (hash) => {
    switch (hash) {
      case 'studentInformation':
        return ['studentInformation']
      case 'studentAchievement':
        return ['studentAchievement']
      case 'studentTask':
        return ['studentTask']
      default:
        return ['schoolInformation']
    }
  }
  componentDidMount () {
    const hash = window.location.hash.substring(2, window.location.hash.length)
    this.clickMenu(this.getKey(hash))
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
              defaultSelectedKeys={this.state.selectMenuKey}>
              {MenuItems}
            </Menu>
          </Sider>
          <Layout
            className="site-layout"
          >
            <Route path="/" component={SchoolInformation} exact />
            <Route path="/studentInformation" component={StudentInformation} />
            <Route path="/studentAchievement" component={StudentAchievement} />
            <Route path="/studentTask" component={StudentTask} />
          </Layout>
        </Layout>
      </HashRouter >
    )
  }
}

export default App