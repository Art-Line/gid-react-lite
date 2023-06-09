import React from 'react';
import Elem from './Elem';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      num: null,
      range: null,
      textarea: '',
      select: '',
    }

    this.submitForm = this.submitForm.bind(this);
    this.enterData = this.enterData.bind(this);
  }

  enterData(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <Elem visitext="Enter name:" type="text" name="text" onChange={this.enterData} />
          <Elem visitext="Enter age:" type="number" name="num" onChange={this.enterData} />
          <Elem visitext="Select count:" type="range" name="range" onChange={this.enterData} />

          <p>Enter text:</p>
          <p><textarea name="textarea" onChange={this.enterData}></textarea></p>

          <p>Select city:</p>
          <p>
            <select name="select" onChange={this.enterData}>
              <option value="kiev">Montreal</option>
              <option value="lvov">Kyiv</option>
              <option value="odessa">Madrid</option>
            </select>
          </p>

          <p><input type="submit" /></p>
        </form>
        <table className="table">
          <tbody>
            {this.state.text &&
              <tr>
                <td>text: </td>
                <td>{this.state.text}</td>
              </tr>
            }
            {this.state.num &&
              <tr>
                <td>num: </td>
                <td>{this.state.num}</td>
              </tr>
            }
            {this.state.range &&
              <tr>
                <td>range: </td>
                <td>{this.state.range}</td>
              </tr>
            }
            {this.state.textarea &&
              <tr>
                <td>textarea: </td>
                <td>{this.state.textarea}</td>
              </tr>
            }
            {this.state.select &&
              <tr>
                <td>select: </td>
                <td>{this.state.select}</td>
              </tr>
            }
          </tbody>
        </table>
      </div >
    );
  }
}

export default App;