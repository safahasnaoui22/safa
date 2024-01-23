import React from 'react';
import './copy.css'
class CopyrightYear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: new Date().getFullYear(),
    };
  }

  render() {
    return (
      <div>
       
        <p>&copy; {this.state.currentYear}  <a  className='custom-link' href="https://www.facebook.com/safa.dkhili.12"> Safa Dkhili</a></p>
      </div>
    );
  }
}

export default CopyrightYear;
