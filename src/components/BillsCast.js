import React from 'react';
import BillCard from './BillCard';

export default function BillsCast({bills, handleBillClick, handleBillFire}) {
  // Your code here

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {bills.map(bill => <BillCard key={bill.id} bill={bill} handleBillClick={handleBillClick} handleBillFire={handleBillFire} />)}
        </div>
      </div>
    </div>
  );
}

