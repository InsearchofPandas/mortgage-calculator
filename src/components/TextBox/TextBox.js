import React from 'react'

class TextBox extends React.Component {
  render() {
    return (<input type="text" className="w-full lg:w-1/2 text-center bg-grey-light p-3 m-1" name={this.props.name} value={this.props.value} placeholder="Enter Here" onChange={this.props.onChange}/>)
  }
}

export default TextBox;
