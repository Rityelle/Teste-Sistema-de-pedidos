import React, { useEffect, useState } from 'react';
import classes from './Title.module.scss';
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
  id: number;
  name?: string ;
  email: string;
  address: AddressType;
  total: string;
  status: string;
  payment_method: string;
  items: Array<ItemsType>;
  freight: FreightType;
  date: string;
}

export function Title() {
  const [order, setOrder] = useState<IdResponse>();
  

  useEffect(() => {
    fetch(`${API_URL}/${window.location.pathname.split('/').pop()}.json`).then(
      async res => setOrder(await res.json()),
    );
  }, []);

  return (
    <div className={classes.content}>
      <div className={classes.contentTitle}>
        <text className={classes.title}>Olá, {order?.name} </text>
        <a href={"/"} className={classes.button}>Voltar</a>
      </div>
    </div>
  );
}
