import React from 'react';
import { Helmet } from 'react-helmet';
import { request } from './request';
import { payloadDecrytUrl } from './config';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  Headers = () => {
    return (
      <Helmet>
        <title>Super</title>
      </Helmet>
    );
  };
  componentDidMount() {
     request({ url: payloadDecrytUrl, name: 'PAYLOAD_DECRYT', header: { bearer: 'xxxxxxx' }, payload: { name: 'some', job: 'some' } });
  }
  render() {
    return (
      <div className="loader-center">
       <div className="loader"></div>
      <div className="loader-text">Loading...</div>
    </div>

     
    );
  }
}
export default Home;

