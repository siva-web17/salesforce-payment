import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
  onclick = () => console.log(this);
  Headers = () => {
    return (
      <Helmet>
        <title>Super</title>
      </Helmet>
    );
  };
  render() {
    return (
      <div>
        {this.Headers()}
        <h1>Test</h1>
        <button onClick={this.onclick}>Click</button>
      </div>
    );
  }
}
export default Home;
