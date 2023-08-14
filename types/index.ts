export { }

declare global {

  interface Sorter {
    title: string;
    type: string;
    criteria: string[];
  }

  interface Item {
    id: number;
    title: string;
    subtitle?: string;
    date: number;
    author: Author;
    editions?: Edition[];
    sections?: Section[];
  }

  interface Author {
    name: string;
    gender: string;
  }

  interface Tag {
    title: string;
    value: string;
  }

  interface Section {
    title: string;
    properties: Property[];
  }

  interface Property {
    title: string;
    value: string;
    emptyDisplay?: boolean;
    html?: boolean;
  }

  interface Edition {
    id: number;
    title: string;
    number: number;
  }

  interface Paratext {
    paratexts_id: {
      id: number;
      title: string;
    }
  }

}