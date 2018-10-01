import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const AccPermsInfo = () => {
  return (
    <div className="card sameheight-item stats mbc border-0 pl-1 pr-1" data-exclude="xs">
      <div className="card-header card-header-sm bg-light shadow-sm act-xs-height">
        <div className="header-block pl-2">
          <FontAwesomeIcon icon="user-lock" className="mr-2 text-info" />
          <h5 className="title text-info">
            Permissions info
            {/* <Link to={`/account/${account_name}`}>{account_name}</Link> */}
          </h5>
        </div>
      </div>
      <div className="card-block row row-sm m-0 pb-0 pr-0 pl-0">
        <div className="col-12 col-sm-12 col-md-5 pl-1 pr-1 m-0" />
        <div className="col-12 col-sm-12 col-md-7 pr-0 pl-2" />
      </div>
    </div>
  );
};

export default AccPermsInfo;
