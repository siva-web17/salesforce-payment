import React from 'react';
import { Helmet } from 'react-helmet';
import { request } from './Request';
import { payloadDecrytUrl } from './config';

export const getUrlParameterByName = (field, url) => {
  var href = url ? url : window.location.href;
  var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
  var string = reg.exec(href);
  return string ? string[1] : null;
};

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
    request({
      url: payloadDecrytUrl,
      name: 'PAYLOAD_DECRYT',
      header: { bearer: 'xxxxxxx' },
      payload: getUrlParameterByName('paydata', decodeURIComponent(window.location.href))
    });
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
