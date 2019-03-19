import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { changeLoginStatus } from '../../store/actions/page'
import Particles from 'react-particles-js';
import { modalError } from '../../common/js/utils'
import { NAME_OR_PSWD_WRONG } from '../../common/js/messages'
import _css from './style.module.scss'
import namePic from '../../assets/images/name.png'
import pswdPic from '../../assets/images/password.png'

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      namePlaceHolder: "请输入您的用户名",
      pswdPlaceHolder: "请输入您的密码"
    };
    this.nameFocus = this.nameFocus.bind(this);
    this.nameBlur = this.nameBlur.bind(this);
    this.pswdFocus = this.pswdFocus.bind(this);
    this.pswdBlur = this.pswdBlur.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  render () {
    const { login } = this.props;
    if (login) {
      return <Redirect to="/" />
    }
    return (
      <div className={_css['login-wrapper']} id={_css["particles-js"]}>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 40,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.7,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 200,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": false
          }} />
        <div className={_css.login}>
          <div className={_css["login-top"]}>
            登录
          </div>
          <div className={`${_css["login-center"]} clearfix`}>
            <div className={_css["login-center-img"]}><img src={namePic} alt="namePic"/></div>
            <div className={_css["login-center-input"]}>
              <input
                type="text"
                placeholder={this.state.namePlaceHolder}
                onFocus={this.nameFocus}
                onBlur={this.nameBlur}
                ref={(input) => this.nameInput = input}
              />
              <div className={_css["login-center-input-text"]}>用户名</div>
            </div>
          </div>
          <div className={`${_css["login-center"]} clearfix`}>
            <div className={_css["login-center-img"]}><img src={pswdPic} alt="pswdPic"/></div>
            <div className={_css["login-center-input"]}>
              <input
                type="password"
                placeholder={this.state.pswdPlaceHolder}
                onFocus={this.pswdFocus}
                onBlur={this.pswdBlur}
                ref={(input) => this.pswdInput = input}
              />
              <div className={_css["login-center-input-text"]}>密码</div>
            </div>
          </div>
          <div className={_css["login-button"]} onClick={this.handleLogin}>
            登陆
          </div>
        </div>
        <div className={_css["sk-rotating-plane"]}></div>
      </div>
    )
  }
  nameFocus() {
    this.setState(() => ({
      namePlaceHolder: ''
    }));
  }
  nameBlur() {
    this.setState(() => ({
      namePlaceHolder: "请输入您的用户名"
    }));
  }
  pswdFocus() {
    this.setState(() => ({
      pswdPlaceHolder: ""
    }));
  }
  pswdBlur() {
    this.setState(() => ({
      pswdPlaceHolder: '请输入您的密码'
    }));
  }
  handleLogin () {
    let name = this.nameInput.value;
    let pswd = this.pswdInput.value;
    if (name === 'admin' && pswd === 'admin') {
      this.props.changeLoginStatus();
    } else {
      modalError(NAME_OR_PSWD_WRONG);
    }
  }
}

const mapStateToProps = (state) => ({
  login: state.getIn(["page", "login"])
});

const mapDispatchToProps = (dispatch) => ({
  changeLoginStatus () {
    dispatch(changeLoginStatus(true));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);