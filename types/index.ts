export { }

declare global {

  interface Sorter {
    title: string;
    type: string;
    criteria: string[];
  }

  interface Filter {
    order: number;
    title: string;
    type: string;
    criteria: string;
  }

  interface Option {
    title: string;
    active: boolean;
  }

  interface FilterMultiSelect extends Filter {
    list: Option[]
  }

  interface FilterText extends Filter {
    search: string;
    placeholder: string;
  }

  interface FilterRange extends Filter {
    criteria2: string;
    v1: string;
    v2: string;
    info?: string;
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

}