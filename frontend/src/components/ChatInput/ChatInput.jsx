import React, { Component } from "react";
import "./ChatInput.scss";

class ChatInput extends Component {
    render() {
        return (
            <div className="ChatInput">
                <input onKeyDown={this.props.send} placeholder="请输入聊天消息内容"/>
            </div>
        );
    };
}

export default ChatInput;