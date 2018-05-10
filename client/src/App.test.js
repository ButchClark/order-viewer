import React from 'react';
import App from './App';
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import sinon from 'sinon'


describe('<App />',()=>{
    const initialState = {
        order: {},
        events: [],
        display: {
            showSearch: true
        }
    }
    const mockStore = configureStore()
    let wrapper
    let store

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = shallow(<App/>)
    })

    it('renders an OrderSearcher component', ()=>{
        expect (wrapper.find('OrderSearcher')).toBe
    })

})
