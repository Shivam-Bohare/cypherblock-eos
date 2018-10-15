import React from 'react';
import TagsInput from 'react-tagsinput';
import {renderAccountLink} from '../utils/Tools';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {
  setLiveActions,
  setIsRefetch,
  setIsButtonLoading,
  setIsMore,
  setIsAntiSpam,
  setLimitValue,
  setFilterOthers,
  setFilterResources,
  setFilterSendReceieEOS,
  setFilterSendReceieTokens,
  setFilterSmartContract,
  setMemoTag,
  setIsSettingOpen
} from '../../actions/eosActions';

const renderRefetchBtn = (refetch, setIsRefetch, setIsMore, islive, isrefetch) => {
  if (!islive) {
    if (!isrefetch)
      return (
        <button
          type="button"
          className="btn btn-white btn-pill p-1"
          onClick={() => {
            setIsRefetch(true);
            refetch().then(() => {
              setIsRefetch(false);
              setIsMore(true);
            });
          }}
        >
          <FontAwesomeIcon icon="sync-alt" className="text-info" size="lg" />
        </button>
      );
  } else {
    return null;
  }
};

const ActionCardHeader = ({
  eosActions,
  account_name,
  setLiveActions,
  setIsRefetch,
  setIsButtonLoading,
  setIsMore,
  setIsAntiSpam,
  setLimitValue,
  setFilterOthers,
  setFilterResources,
  setFilterSendReceieEOS,
  setFilterSendReceieTokens,
  setFilterSmartContract,
  setMemoTag,
  setIsSettingOpen
}) => {
  const {
    refetch,
    isAntiSpamed,
    islive,
    limit,
    isrefetch,
    isFilterOthers,
    isFilterSmartContract,
    isFilterResources,
    isFilterSendReceiveTokens,
    isFilterSendReceiveEOS,
    memoTags,
    isSettingOpen
  } = eosActions;

  return (
    <div>
      <div className="card-header bg-white row m-0">
        <div className="header-block pl-1 col stat-col">
          <FontAwesomeIcon icon="list-alt" className="mr-2 text-info fa-lg" />
          <h5 className="title text-info">
            Recent <span className="ml-1 mr-1">{renderAccountLink(account_name)}</span> actions
          </h5>
        </div>
        <div className="col-auto pt-atb pr-1">
          {renderRefetchBtn(refetch, setIsRefetch, setIsMore, islive, isrefetch)}
          <button
            type="button"
            className="btn btn-white btn-pill p-1"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => {
              setIsSettingOpen(!isSettingOpen);
            }}
          >
            {!isSettingOpen ? (
              <FontAwesomeIcon icon="cog" className="text-info" size="lg" />
            ) : (
              <i className="fa fa-chevron-circle-up fa-lg text-success" />
            )}
          </button>
        </div>
      </div>
      <div className="collapse card border shadow-sm" id="collapseExample">
        <div className="card card-body pt-2 pd-action-setting pb-0 border-0">
          <div className="row  ">
            <div className="col-6 col-sm-6 ftz-12 font-weight-normal pr-0">
              {/* Toggles */}
              <fieldset>
                <strong className="text-info d-block mb-2 h6">Config</strong>
                <div className="custom-control custom-toggle mb-3">
                  <input
                    type="checkbox"
                    id="antiSpam"
                    name="antiSpam"
                    className="custom-control-input "
                    checked={isAntiSpamed}
                    onChange={() => {
                      setIsAntiSpam(!isAntiSpamed);
                    }}
                  />
                  <label className="custom-control-label font-weight-normal pl-toggle pt-1" htmlFor="antiSpam">
                    Anti spam
                  </label>
                </div>
                <div className="custom-control custom-toggle  mb-3">
                  <input
                    type="checkbox"
                    id="liveAction"
                    name="liveAction"
                    className="custom-control-input "
                    checked={islive}
                    onChange={() => {
                      setLiveActions(!islive);
                    }}
                  />
                  <label className="custom-control-label font-weight-normal pl-toggle pt-1" htmlFor="liveAction">
                    Live Actions
                  </label>
                </div>
                {/* <label className="font-weight-normal">
                  <select
                    id="inputLimit"
                    className="form-control-sm mr-offset"
                    value={limit}
                    onChange={(event) => {
                      setLimitValue(event.target.value);
                    }}
                  >
                    <option value={100} defaultChecked>
                      100
                    </option>
                    <option value={200}>200</option>
                    <option value={500}>500</option>
                  </select>
                  Offset
                </label> */}
              </fieldset>

              {/* / Toggles */}
            </div>
            <div className="col-6 col-sm-6 ftz-12">
              {/* Checkboxes */}
              <strong className="text-info d-block mb-2 h6">Show/Filter</strong>
              <fieldset>
                <div className="custom-control custom-checkbox mb-1 pt-actgrp">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="ckxSendReceiveEOS"
                    checked={isFilterSendReceiveEOS}
                    onChange={(event) => {
                      setFilterSendReceieEOS(event.target.checked);
                    }}
                  />
                  <label className="custom-control-label font-weight-normal" htmlFor="ckxSendReceiveEOS">
                    Send/Receive EOS
                  </label>
                </div>

                <div className="custom-control custom-checkbox mb-1 pt-actgrp">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cbxSendReceiveToken"
                    checked={isFilterSendReceiveTokens}
                    onChange={(event) => {
                      setFilterSendReceieTokens(event.target.checked);
                    }}
                  />
                  <label className="custom-control-label font-weight-normal  " htmlFor="cbxSendReceiveToken">
                    Send/Receive tokens
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1 pt-actgrp">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cbxResources"
                    checked={isFilterResources}
                    onChange={(event) => {
                      setFilterResources(event.target.checked);
                    }}
                  />
                  <label className="custom-control-label font-weight-normal" htmlFor="cbxResources">
                    Account, Resources, Contract
                  </label>
                </div>

                <div className="custom-control custom-checkbox mb-1 pt-actgrp">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cbxSmartContract"
                    checked={isFilterSmartContract}
                    onChange={(event) => {
                      setFilterSmartContract(event.target.checked);
                    }}
                  />
                  <label className="custom-control-label font-weight-normal " htmlFor="cbxSmartContract">
                    Vote,Producers
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1 pt-actgrp">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cbxOthers"
                    checked={isFilterOthers}
                    onChange={(event) => {
                      setFilterOthers(event.target.checked);
                    }}
                  />
                  <label className="custom-control-label font-weight-normal " htmlFor="cbxOthers">
                    Others
                  </label>
                </div>
              </fieldset>
              {/* / Checkboxes */}
            </div>
            <div className="col-12 ftz-12">
              <strong className="text-info d-block mb-2 h6">Search</strong>
              <fieldset>
                <TagsInput
                  value={memoTags}
                  onChange={(tags) => setMemoTag(tags)}
                  className="input-tag-form-control rounded border border-info"
                  inputProps={{
                    className: 'react-tagsinput-input',
                    placeholder: 'Memo/Receiver/Account/Actname'
                  }}
                  tagProps={{
                    className: 'react-tagsinput-tag badge-success',
                    classNameRemove: 'react-tagsinput-remove'
                  }}
                />
              </fieldset>
              {/* / Checkboxes */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({eosActions}) {
  return {eosActions};
}

export default connect(
  mapStateToProps,
  {
    setLiveActions,
    setIsRefetch,
    setIsButtonLoading,
    setIsMore,
    setIsAntiSpam,
    setLimitValue,
    setFilterOthers,
    setFilterResources,
    setFilterSendReceieEOS,
    setFilterSendReceieTokens,
    setFilterSmartContract,
    setMemoTag,
    setIsSettingOpen
  }
)(ActionCardHeader);