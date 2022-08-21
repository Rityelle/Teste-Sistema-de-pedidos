import React from 'react';
import { Title } from './components/Title/Title';
import { RequestNumber } from './components/RequestNumber/RequestNumber';
import { PurchaseSummary } from './components/PurchaseSummary/PurchaseSummary';
import { FollowYouOrder } from './components/FollowYouOrder/FollowYouOrder';
import { DeliveryAndPayment } from './components/DeliveryAndPayment/DeliveryAndPayment';


export function Details() {
  
  return (
    <div>
      <Title/>
      <RequestNumber />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <PurchaseSummary />
        <FollowYouOrder />
      </div>
      <DeliveryAndPayment />
    </div>
  );
}
