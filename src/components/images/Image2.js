import React from "react";
import jsfca from "../../images/jsfca.jpg";

export default class Image2 extends React.Component {
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
          src={jsfca}
          onClick={this.handleShowDialog}
          alt="no "
        />
        {this.state.isOpen && (
          <div className="dialog" open onClick={this.handleShowDialog}>
            <img
              className="dialog__img"
              src={jsfca}
              onClick={this.handleShowDialog}
              alt="no "
            />
          </div>
        )}
      </div>
    );
  }
}
