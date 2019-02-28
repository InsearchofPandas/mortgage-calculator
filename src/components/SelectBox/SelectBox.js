import React from 'react';

class SelectBox extends React.Component {
  render() {
    return (<select className="w-full lg:w-1/2 text-center bg-grey-light p-3 m-1" name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
      {
        this.props.options.map(function(option, i) {
          return <option key={i} value={option}>{option}</option>
        })
      }
    </select>)
  }
}

export default SelectBox;
