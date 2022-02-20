import React from "react";
import { Button } from 'antd';
interface Props {

}
interface State {
    name: string
}

class Static extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: 'yuan'
        }
    }
    // 有static关键字的时候，不会执行这个函数
    static changeName = () => {
        console.log('xxxx')
        this.setState({ name: 'ds' })
    }
    render() {
        return (
            <>
                <p>{this.state.name}</p>
                <Button onClick={this.changeName}>点击改变名称</Button>
            </>
        )
    }
}
export default Static;