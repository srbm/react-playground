import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    sections: [],
  }
  state = {
    currentSection: null,
  }
  handleClick(index) {
    this.setState({
      currentSection: index,
    })
  }
  renderSections = () => {
    // const content = this.props.sections[this.state.currentSection]
    return this.props.sections.map((section, index) => (
      <li
        key={index}>
        <button onClick={() => this.handleClick(index)}>{section.title}</button>
        {this.renderContent()}
      </li>
    ))
  }
  renderContent = () => {
    const currentContent = this.props.sections[this.state.currentSection];
    return <p>{(currentContent) ? currentContent.content : null}</p>
  }

  render() {
    return (
      <ul>
          {this.renderSections()}
      </ul>
    )
  }
}

export default Accordion;