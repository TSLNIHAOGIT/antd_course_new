import React from 'react'
import MyInput from './control_component.js'
class Demo extends React.Component {
  onTextChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
    //   <MyInput onChange={this.onTextChange} />



      <div>
        <MyInput onChange={this.onChange} />
        <button onClick={this.onTextReset}>Reset</button>
     </div>
    );
  }
}
export default Demo