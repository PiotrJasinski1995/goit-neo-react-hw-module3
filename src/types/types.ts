export interface IContact {
  id: string;
  username: string;
  phone: string;
}

export interface IContactObj extends IContact {
  onHandleDeleteContact: (username: string) => void;
}
