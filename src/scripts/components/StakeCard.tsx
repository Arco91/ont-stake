import * as React from 'react';
import ClassNames from 'classnames';

interface Props {
  node: any;
  stake: any;
}

export default class StakeTotals extends React.Component<Props, any> {

  render() {
    const { node, stake } = this.props;
    const { name, userRewardsAllocation } = node;
    const {
      activeStake,
      pendingStake,
      pendingWithdrawStake,
      withdrawableStake,
    } = stake;

    const myStake = activeStake + pendingStake;

    let actionText;
    if (withdrawableStake) {
      actionText = `Withdrawable: ${withdrawableStake} ONT`;
    } else if (pendingWithdrawStake) {
      actionText = `Pending withdraw: ${pendingWithdrawStake} ONT`;
    } else if (pendingStake) {
      actionText = `Pending deposit: ${pendingStake} ONT`;
    }

    return (
      <div className='stake-card'>

        <div className='flex-grow-container'>
          <div className='name'>{name}</div>
          <div className='stake-amounts'>
            <div className='my-stake'>{`My stake: ${myStake}`}</div>
            <div className='active-stake'>{`(Active: ${activeStake} ONT)`}</div>
          </div>
        </div>

        <div className='action-container'>
          <div className='contrib-percentage'>
            <div className='logo-info' />
            <div className='description'>{`Contributor rewards: ${userRewardsAllocation}`}</div>
          </div>
          <div
            className={ClassNames('action-text', {
              withdraw: withdrawableStake,
              'logo-check': !actionText,
            })}
          >
            {actionText || ''}
          </div>
        </div>
      </div>
    );
  }
}
