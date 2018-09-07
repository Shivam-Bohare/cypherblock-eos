import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Query} from 'react-apollo';
import {renderRamPriceColorM, renderEOSPriceColorM, renderPercentColor} from '../utils/RenderColors';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import GetMarKetInfo from '../../queries/GetMarketInfo';

var ram_price, eosio_ram, eos_price, percent_change_24h, eos_volume;

class MarketInfo extends Component {
  render() {
    return (
      <Query query={GetMarKetInfo} pollInterval={5000}>
        {({loading, error, data}) => {
          if (loading)
            return (
              <section className="section">
                <div className="text-center">
                  <FontAwesomeIcon icon="spinner" spin className="text-info" />
                </div>
              </section>
              //   );
            );

          if (error)
            return (
              <section className="section">
                <div className="text-center">
                  <FontAwesomeIcon icon="spinner" spin className="text-info" />
                </div>
              </section>
            );
          const {cmc, eosioram, global_data, table_rows} = data;
          if (table_rows && global_data && cmc && eosioram) {
            ram_price =
              (
                Number(table_rows.rows[0].quote.balance.split(' ')[0]) /
                Number(table_rows.rows[0].base.balance.split(' ')[0])
              ).toFixed(8) * 1024;

            eosio_ram = Number(eosioram.core_liquid_balance.split(' ')[0]).toLocaleString('en', {
              maximumFractionDigits: 0
            });

            eos_price = Number(cmc.data.quotes.USD.price);
            percent_change_24h = cmc.data.quotes.USD.percent_change_24h;
            eos_volume = Number(cmc.data.quotes.USD.volume_24h).toLocaleString('en', {maximumFractionDigits: 0});

            return (
              <div className="card sameheight-item stats mb-1" data-exclude="xs">
                <div className="card-header card-header-sm bg-light shadow-sm">
                  <div className="header-block pl-2">
                    <FontAwesomeIcon icon="chart-line" className="mr-2 text-info" />
                    <h5 className="title text-info">Market info</h5>
                  </div>
                </div>
                <div className="card-block">
                  <div className="row row-sm stats-container m-0">
                    <div className="col-12 col-sm-6  stat-col p-1">
                      <div className="stat-icon">
                        <FontAwesomeIcon icon="chart-bar" />
                      </div>
                      <div className="stat">
                        <div className="value">{renderRamPriceColorM(ram_price)}</div>
                        <div className="name"> RAM Price (EOS/KB) </div>
                      </div>
                      <div className="progress stat-progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: '0%'
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6  stat-col p-1">
                      <div className="stat-icon">
                        <FontAwesomeIcon icon="coins" />
                      </div>
                      <div className="stat">
                        <div className="value">{eosio_ram}</div>
                        <div className="name">
                          <Link to={`/account/eosio.ram`}>eosio.ram</Link>
                        </div>
                      </div>
                      <div className="progress stat-progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: '0%'
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 stat-col p-1">
                      <div className="stat-icon">
                        <FontAwesomeIcon icon="dollar-sign" />
                      </div>
                      <div className="stat">
                        <div className="value">
                          {renderEOSPriceColorM(eos_price)}
                          {renderPercentColor(percent_change_24h)}
                        </div>
                        <div className="name"> EOS Price (USD) </div>
                      </div>
                      <div className="progress stat-progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: '0%'
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 stat-col p-1">
                      <div className="stat-icon">
                        <FontAwesomeIcon icon="coins" />
                      </div>
                      <div className="stat">
                        <div className="value">{eos_volume}</div>
                        <div className="name"> 24h Volume (USD) </div>
                      </div>
                      <div className="progress stat-progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: '0%'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <section className="section">
                <div className="text-center">
                  <FontAwesomeIcon icon="spinner" spin className="text-info" />
                </div>
              </section>
            );
          }
        }}
      </Query>
    );
  }
}

export default MarketInfo;
