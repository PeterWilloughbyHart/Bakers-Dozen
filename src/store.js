import React from 'react';
import { createStore } from 'react-router';
import reducer from './reducers/index.js'

let store = createStore(reducer);