import React, { Component } from 'react';

class EventPratice extends Component {
  state = {
    message: '',
    username: '',
    id: '',
  };

  //   handlerCangeMessage = (e) => {
  //     console.log(e.target);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   handlerCangeUsername = (e) => {
  //     console.log(e.target);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  handlerChange = (e) => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerClick = (e) => {
    this.setState({ message: '', username: '', id: '' });
  };
  handlerKeydown = (e) => {
    if (e.keyCode === 13) {
      this.handlerClick(e);
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        메시지:{' '}
        <input
          type="text"
          name="message"
          placeholder="아무키나 입력해 보세요"
          onChange={this.handlerChange}
          onKeyDown={this.handlerKeydown}
          value={this.state.message}
        />
        <br />
        사용자명 :
        <input
          type="text"
          name="username"
          placeholder="사용자이름 입력 ... "
          onChange={this.handlerChange}
          value={this.state.username}
        />
        아이디 :
        <input
          type="text"
          name="id"
          placeholder="아이디 입력 ..."
          onChange={this.handlerChange}
          value={this.state.id}
        />
        <h2>메시지 : {this.state.message}</h2>
        <h2>사용자명 : {this.state.username}</h2>
        <h2>아이디 : {this.state.id}</h2>
        <button
          onClick={(e) => {
            this.setState({ message: '', username: '', id: '' });
          }}
        >
          초기화
        </button>
      </div>
    );
  }
}

export default EventPratice;
<h1>이벤트 연습</h1>;

<input type="text" name="message" placeholder="아무키나 입력해 보세요"></input>;
