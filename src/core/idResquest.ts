import { API_URL } from "../env";

export interface IdRequest {
    id: string | undefined;
}

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

export async function getIdResquest({ id }: IdRequest): Promise<IdResponse[]> {
    return fetch(`${API_URL}/${id}.json`).then(res => res.json());
}