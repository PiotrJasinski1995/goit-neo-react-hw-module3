export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IContactObj extends IContact {
  onHandleDeleteContact: (name: string) => void;
}
