import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userinfo: {
        name: "",
        location: "",
        avatar_url: "",
        bio: "",
      },
    };
  }

  async componentDidMount() {
    let data = await fetch("https://api.github.com/users/PrajwalGpy");
    let json = await data.json();
    this.setState({
      userinfo: json,
    });
    console.log(json);
  }
  render() {
    let { name, avatar_url, bio, location } = this.state.userinfo;
    return (
      <div>
        <img src={avatar_url} alt="" />
        <h1>{name}</h1>
        <h1>{location}</h1>
        <h1>{bio}</h1>
        <h1
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {this.state.count}
        </h1>
      </div>
    );
  }
}

export default Contact;
