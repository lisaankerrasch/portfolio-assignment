import React from "react";
import sp2 from "../../images/sp2.jpg";

export default class Image1 extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <img
          className="projects__image--img"
          src={sp2}
          onClick={this.handleShowDialog}
          alt="no "
        />
        {this.state.isOpen && (
          <div className="dialog" open onClick={this.handleShowDialog}>
            <img
              className="dialog__img"
              src={sp2}
              onClick={this.handleShowDialog}
              alt="no "
            />
          </div>
        )}
      </div>
    );
  }
}
