import React from "react";
import "./style.css";

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };

  state = { currentTabIndex: 0 };

  handleButtonClick = index => {
    console.log("clicked");
    this.setState({
      currentTabIndex: index
    });
  };

  renderButtons() {
    return this.props.sections.map((section, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {section.title}
      </button>
    ));
  }

  renderContent() {
    const sectionContent = this.props.sections[this.state.currentTabIndex];
    return <div className="Content">{sectionContent.content}</div>;
  }

  render() {
    return (
      <div>
        <h1>Accordion</h1>
        <ul>
          <li>
            {this.renderButtons()}
            <p>{this.props.sections.length && this.renderContent()}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Accordion;
