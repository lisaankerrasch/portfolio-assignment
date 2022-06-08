import React from "react";
import pe2 from "../../images/pe2.jpg";

export default class Image3 extends React.Component {
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
          src={pe2}
          onClick={this.handleShowDialog}
          alt="no "
        />
        {this.state.isOpen && (
          <div className="dialog" open onClick={this.handleShowDialog}>
            <img
              className="dialog__img"
              src={pe2}
              onClick={this.handleShowDialog}
              alt="no "
            />
          </div>
        )}
      </div>
    );
  }
}
