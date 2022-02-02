import React from 'react';
import BillCard from './BillCard'

export default function BillCollection({bills, handleBillClick, handleBillFire}) {
    // Your code here
    console.log(bills);

    return (
        <div className="ui four column grid">
            <div className="row">
              {bills.map(bill => <BillCard key={bill.id} bill={bill} handleBillClick={handleBillClick} handleBillFire={handleBillFire} />)}
            </div>
        </div>
    );
}
