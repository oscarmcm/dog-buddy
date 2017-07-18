'use strict';

import Realm from 'realm';

const PetSchema = {
  name: 'Pet',
  properties: {
    name: 'string',
    breed: 'string',
    color: 'string',
    chip_code: 'string',
    born_date: 'date',
    acquired_date: 'date',
    photo: {type: 'data', optional: true},
    weight: {type: 'float', default: 0},
    sex: 'bool',
  }
};

const VetSchema = {
  name: 'Vet',
  properties: {
    name:  'string',
  }
};

export default new Realm({schema: [PetSchema, VetSchema]});
