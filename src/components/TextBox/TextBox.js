import React from 'react'

class TextBox extends React.Component {
  render() {
    return(
      <input
        type="text"
        className="w-3/5 text-center bg-grey-light p-3 m-1 text"
        name={this.props.name}
        value={this.props.value}
        placeholder="Enter Here"
        onChange={this.props.onChange}
      />
    )
  }
}

export default TextBox;
