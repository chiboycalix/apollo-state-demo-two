import { makeVar } from '@apollo/client';

export interface ExampleState {
  searchString: string;
  items: number[];
  orgid: any;
  SelectAll: Boolean;
}

const initialState = {
  searchString: "",
  items: [],
  orgid: null,
  SelectAll: false
};

export const exampleState = makeVar<ExampleState>(initialState);