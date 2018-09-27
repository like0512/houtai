import React, { Component } from 'react';
import './App.css';

class content extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        fetch("./shuju.json",{
            method:"GET"
        }).then(rec=>{
            return rec.json()
        }).then(res=>{
            console.log(res)
            return this.setState({
                list:res
            })
        })
    }
    render() {
        return (
            <div className="content">
                <table className="tables">
                    <tr>
                        <th>渲染引擎</th>
                        <th>浏览器</th>
                        <th>平台</th>
                        <th>引擎版本</th>
                        <th>CSS等级</th>
                    </tr>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.yinqing}</td>
                                    <td>{item.liulanqi}</td>
                                    <td>{item.pingtai}</td>
                                    <td>{item.banben}</td>
                                    <td>{item.dengji}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}

export default content;
