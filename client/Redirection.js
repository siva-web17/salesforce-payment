import React from 'react';
import { Helmet } from 'react-helmet';
import { request } from './Request';
import { payloadDecrytUrl } from './config';
class Redirection extends React.Component {
  constructor(props) {
    super(props);
  }
  Headers = () => {
    return (
      <Helmet>
        <title>Payment Redirection</title>
      </Helmet>
    );
  };
  componentDidMount() {
    request({ url: payloadDecrytUrl, name: 'PAYLOAD_DECRYT', header: { bearer: 'xxxxxxx' }, payload: { name: 'some', job: 'some' } });
  }
  render() {
    return (
      <div className="loader-center">
        {this.Headers()}
        <div className="loader" />
        <div className="loader-text">Please wait while redirecting...</div>
      </div>
    );
  }
}
export default Redirection;
