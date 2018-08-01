import React, {Component} from 'react';

import MarketInfo from './MarketInfo';
import AccountInfo from './AccountInfo';
import Wallet from './Wallet';
import Actions from './Actions';

const Account = ({match}) => {
  return (
    <article className="content dashboard-page">
      <section className="section">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-l-7 col-xl-8 stats-col pd-col">
            <AccountInfo account_name={match.params.account_name} />
            <Actions account_name={match.params.account_name} />
          </div>
          <Wallet account_name={match.params.account_name} />
          {/* <Wallet data={data} /> */}
          {/* <MarketInfo
              cmc={cmc}
              eosioramfee={eosioramfee}
              eosioram={eosioram}
              global_data={global_data}
              table_rows={table_rows}
            /> */}
        </div>
      </section>
    </article>
  );
};

export default Account;
