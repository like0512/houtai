import React, { Component } from 'react';
import './App.css';
import content from './Content'
import biaoge from './biaoge'
import zhuye from './zhuye'
import {Route, Switch,Redirect} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {

    tubiao(path){
      this.props.history.replace(path)
    }
    biaoge(path){
        this.props.history.replace(path)
    }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout style={{height:"100vh",color:"gray"}}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <div className="guanliyuan">
                        <p style={{color:"white"}}>Beaut-zihan</p>
                        <p>超级管理员</p>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="smile" theme="filled" />
                            <span>主页</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>布局</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="smile" theme="filled" /><span>统计图表</span></span>}
                        >
                            <Menu.Item key="8" onClick={this.tubiao.bind(this,"content")}>百度ECharts</Menu.Item>
                            <Menu.Item key="9">Flot</Menu.Item>
                            <Menu.Item key="10">Morris.js</Menu.Item>
                            <Menu.Item key="11">Rickshaw</Menu.Item>
                            <Menu.Item key="12">Peity</Menu.Item>
                            <Menu.Item key="13">Sparkline</Menu.Item>
                            <Menu.Item key="14">图表组合</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={<span><Icon type="smile" theme="filled" /><span>信箱</span></span>}
                        >
                            <Menu.Item key="15">收件箱</Menu.Item>
                            <Menu.Item key="16">查看邮件</Menu.Item>
                            <Menu.Item key="17">写信</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={<span><Icon type="smile" theme="filled" /><span>表单</span></span>}
                        >
                            <Menu.Item key="18">基本表单</Menu.Item>
                            <Menu.Item key="19">表单验证</Menu.Item>
                            <Menu.Item key="20">高级插件</Menu.Item>
                            <Menu.Item key="21">表单向导</Menu.Item>
                            <Menu.Item key="22">文件上传</Menu.Item>
                            <Menu.Item key="23">编辑器</Menu.Item>
                            <Menu.Item key="24">搜索自动补全</Menu.Item>
                            <Menu.Item key="25">日期选择器layerDate</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={<span><Icon type="smile" theme="filled" /><span>页面</span></span>}
                        >
                            <Menu.Item key="26">联系人</Menu.Item>
                            <Menu.Item key="27">个人资料</Menu.Item>
                            <Menu.Item key="28">项目管理</Menu.Item>
                            <Menu.Item key="29">团队管理</Menu.Item>
                            <Menu.Item key="30">信息流</Menu.Item>
                            <Menu.Item key="31">客户管理</Menu.Item>
                            <Menu.Item key="32">文件管理器</Menu.Item>
                            <Menu.Item key="33">日历</Menu.Item>
                            <Menu.Item key="34">博客</Menu.Item>
                            <Menu.Item key="35">FAQ</Menu.Item>
                            <Menu.Item key="36">时间轴</Menu.Item>
                            <Menu.Item key="37">标签墙</Menu.Item>
                            <Menu.Item key="38">单据</Menu.Item>
                            <Menu.Item key="39">搜索结果</Menu.Item>
                            <Menu.Item key="40">论坛</Menu.Item>
                            <Menu.Item key="41">即时通讯</Menu.Item>
                            <Menu.Item key="42">登录注册相关</Menu.Item>
                            <Menu.Item key="43">404页面</Menu.Item>
                            <Menu.Item key="44">500页面</Menu.Item>
                            <Menu.Item key="45">空白页</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub6"
                            title={<span><Icon type="smile" theme="filled" /><span>UI元素</span></span>}
                        >
                            <Menu.Item key="46">排版</Menu.Item>
                            <Menu.Item key="47">字体图标</Menu.Item>
                            <Menu.Item key="48">拖动顺序</Menu.Item>
                            <Menu.Item key="49">按钮</Menu.Item>
                            <Menu.Item key="50">选项卡&面板</Menu.Item>
                            <Menu.Item key="51">通知&提示</Menu.Item>
                            <Menu.Item key="52">徽章，标签，进度条</Menu.Item>
                            <Menu.Item key="53">栅格</Menu.Item>
                            <Menu.Item key="54">视频、音频</Menu.Item>
                            <Menu.Item key="55">弹框插件</Menu.Item>
                            <Menu.Item key="56">树形视图</Menu.Item>
                            <Menu.Item key="57">Toastr通知</Menu.Item>
                            <Menu.Item key="58">文本对比</Menu.Item>
                            <Menu.Item key="59">加载动画</Menu.Item>
                            <Menu.Item key="60">小部件</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub7"
                            title={<span><Icon type="smile" theme="filled" /><span>表格</span></span>}
                        >
                            <Menu.Item key="61">基本表格</Menu.Item>
                            <Menu.Item key="62" onClick={this.biaoge.bind(this,'biaoge')}>Data Tables</Menu.Item>
                            <Menu.Item key="63">jqGrid</Menu.Item>
                            <Menu.Item key="64">Foo Tables</Menu.Item>
                            <Menu.Item key="65">Bootstrap Tables</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub8"
                            title={<span><Icon type="smile" theme="filled" /><span>相册</span></span>}
                        >
                            <Menu.Item key="66">基本图库</Menu.Item>
                            <Menu.Item key="67">图片切换</Menu.Item>
                            <Menu.Item key="68">Blueimp相册</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3">
                            <Icon type="video-camera" />
                            <span>CSS动画</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub9"
                            title={<span><Icon type="smile" theme="filled" /><span>工具</span></span>}
                        >
                            <Menu.Item key="69">表单构建器</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            style={{marginLeft:"30px"}}
                        />
                        <input type="text" className="search" placeholder="请输入您需要查找的内容..."/>
                        <span className="youce">
                          <Icon type="mail" theme="filled" />
                          <Icon type="bell" theme="filled" style={{marginLeft:"20px"}}/>
                          <Icon type="shopping" theme="filled" style={{marginLeft:"20px"}}/>购买
                          <Icon type="project" theme="filled" style={{marginLeft:"20px"}}/>主题
                        </span>
                    </Header>
                    <Content style={{ margin: '24px 16px', background: '#fff', minHeight: 280 }}>
                        <Switch>
                            <Route path={'/content'} component={content}></Route>
                            <Route path={'/biaoge'} component={biaoge}></Route>
                            <Redirect to={'/content'}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
