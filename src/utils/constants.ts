export interface IListFilter {
  id: string;
  list: {id: number; sort: string}[];
}

export const listFilter: IListFilter[] = [
  {
    id: 'Status',
    list: [
      {id: 1, sort: 'Alive'},
      {id: 2, sort: 'Dead'},
      {id: 3, sort: 'Unknown'},
    ],
  },
  {
    id: 'Gender',
    list: [
      {id: 1, sort: 'Female'},
      {id: 2, sort: 'Male'},
      {id: 3, sort: 'Genderless'},
      {id: 4, sort: 'Unknown'},
    ],
  },
];
export const listSort: IListFilter = {
  id: 'Species',
  list: [
    {id: 1, sort: 'Human'},
    {id: 2, sort: 'Alien'},
    {id: 3, sort: 'Humanoid'},
    {id: 4, sort: 'unknown'},
    {id: 5, sort: 'Poopybutthole'},
    {id: 6, sort: 'Mythological Creature'},
    {id: 7, sort: 'Animal'},
    {id: 8, sort: 'Robot'},
    {id: 9, sort: 'Cronenberg'},
    {id: 10, sort: 'Disease'},
  ],
};
