import React, { useState, useEffect } from 'react';
import classes from './PurchaseSummary.module.scss';
import { API_URL } from '../../../../env';

export interface AddressType {
  street: string;
  number: number;
  city: string;
  state: string;
  postcode: string;
}

export interface ItemsType {
  name: string;
  qty: number;
  price: string;
}

export interface FreightType {
  price: string;
  from: number;
  to: number;
}

export interface IdResponse {
  [x: string]: any;
  id: number;
  name: string;
  email: string;
  address: AddressType;
  total: string;
  status: string;
  payment_method: string;
  items: Array<ItemsType>;
  freight: FreightType;
  date: string;
}

export function PurchaseSummary() {
  const [order, setOrder] = useState<IdResponse>();

  useEffect(() => {
    fetch(`${API_URL}/${window.location.pathname.split('/').pop()}.json`).then(
      async res => setOrder(await res.json()),
    );
  }, []);

  return (
    <div className={classes.content}>
      <div className={classes.card}>
        <div className={classes.title}>Resumo da Compra</div>
        <hr style={{ width: '95%', marginTop: '20px' }} />

        {order && order.items.map(( key: any) => (
          <>
            <div className={classes.contentProduct}>
              <div className={classes.product}> {key?.name} </div>
              <div className={classes.productValue}> {key?.price} </div>
            </div>
            <hr style={{ width: '95%', marginTop: '20px' }} />
          </>
        ))}

        <div className={classes.deliveryDeadline}>
          <div>Prazo de entrega</div>
          <div>de 5 a 7 dias</div>
        </div>
        <div className={classes.shipping}>
          <div>Frete</div>
          <div>R${order?.freight.price}</div>
        </div>
        <div className={classes.total}>
          <div>total</div>
          <div>R${order?.total}</div>
        </div>
        <hr style={{ width: '95%', marginTop: '20px' }} />
      </div>
    </div>
  );
}
