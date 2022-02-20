import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Static from './component/class/static.tsx';
function TestContent(props) {
    console.log(props)
    return (
        <>
            <p>{props.location.state.des}</p>
            <div style={{ border: "1px solid #cccccc" }}>
                <p>这里是测试内容的box</p>
                <Static />
            </div>
        </>
    )
}
// export default TestContent;
export default withRouter(TestContent);