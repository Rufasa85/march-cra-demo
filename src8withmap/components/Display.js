import React from 'react';
import Card from './Card';

const feline = {
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

const cats = [
{
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
},
{
  name: 'Koopa',
  description: 'Loves to mess with sister Troopa',
  id: 2,
},
{
  name: 'Troopa',
  description: 'loves to be messed with by sister Koopa',
  id: 3,
},
{
  name: 'Dumbledore',
  description: 'very wise',
  id: 4,
},
{
  name: 'Fluffy',
  description: 'hes hairless. Name is a joke',
  id: 5,
},
]


export default function Display() {
  return (
    <div>
        {cats.map(cat=><Card key={cat.id} name={cat.name} description={cat.description} id={cat.id}/>)}
    </div>
  );
}
