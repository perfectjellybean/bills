import React, { useEffect, useState } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const url = "http://localhost:8002/bills"

export default function App() {
  const [bills, setBills] = useState([])
  const [billsCast, setBillsCast] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setBills(data))
  }, [])

  function handleBillClick(bill) {
    const billFound = billsCast.some(cast => cast.id === bill.id)

    if (billFound) {
      const filteredCast = billsCast.filter(cast => cast.id !== bill.id)
      setBillsCast(filteredCast)
      return
    }

    setBillsCast([...billsCast, bill])    
  }

  function handleBillFire(bill) {
    const billFound = billsCast.some(cast => cast.id === bill.id)

    if (billFound) {
      const filteredCast = billsCast.filter(cast => cast.id !== bill.id)
      setBillsCast(filteredCast)
    }

    const filteredCast = bills.filter(cast => cast.id !== bill.id)
    setBills(filteredCast)
  }

  return (
    <div>
      <BillsCast bills={billsCast} handleBillClick={handleBillClick} handleBillFire={handleBillFire} />
      <BillCollection bills={bills} handleBillClick={handleBillClick} handleBillFire={handleBillFire} />
    </div>
  );
}
