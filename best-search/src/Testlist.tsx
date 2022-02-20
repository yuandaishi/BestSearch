import React from "react";
import { Link } from "react-router-dom";

function Testlist() {
    return (
        <p><Link to={{ pathname: "/testContent", state: { des: '测试类组件static关键字' } }} > 测试类组件static关键字</Link></p >
    )
}
export default Testlist;