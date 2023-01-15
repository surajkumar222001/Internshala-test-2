
export const data = [
    {
      col1: 'Hello',
      col2: 'World',
    },
    {
      col1: 'react-table',
      col2: 'rocks',
    },
    {
      col1: 'whatever',
      col2: 'you want',
    },
  ]

  export interface ColumnI { col1: string; col2: string; col3: string; col4: string; }

  export const Columns = [
    {
      Header: 'Name',
      accessor: 'col1', // accessor is the "key" in the data
    },
    {
      Header: 'Status ',
      accessor: 'col2',
    },
    {
      Header: 'Role ',
      // accessor: 'col2',
    },
    {
      Header: 'Last Login ',
      //accessor: 'col2',
    },
  ]