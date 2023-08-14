export { }

declare global {

  interface Filter {
    order: number;
    title: string;
    type: string;
  }

  // Filter types

  interface FilterMultiSelect extends Filter {
    list: FilterOption[];
    criteria: string;
    info?: string;
  }

  interface FilterMetadata extends Filter {
    criteria: string;
    list: FilterOption[];
    entity: string;
    multi?: string;
  }

  interface FilterText extends Filter {
    criteria: string[];
    search: string;
    placeholder: string;
  }

  interface FilterRange extends Filter {
    criteria: string;
    criteria2: string;
    v1: string;
    v2: string;
    info?: string;
  }

  // Filter options

  interface FilterOption {
    id: number;
    title: string;
    active: boolean;
    criteria?: string;
  }

}