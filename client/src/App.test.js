import React from 'react';
import App from './App';
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import sinon from 'sinon'


describe('<App />',()=>{
    const stateShowSearch = {
        order: {},
        events: [],
        display: {
            showSearch: true
        }
    }
    const stateDoNotShowSearch = {
        order: {},
        events: [],
        display: {
            showSearch: false
        }
    }
    const mockStore = configureStore()
    let wrapper
    let store

    // beforeEach(()=>{
    //     store = mockStore(initialState)
    //     wrapper = shallow(<App store={store}/>)
    // })

    it('renders an OrderSearcher component when showSearch is true', ()=>{
        store = mockStore(stateShowSearch)
        wrapper = shallow(<App store={store}/>)
        expect (wrapper.find('OrderSearcher')).toBe
    })

    it('does not render an OrderSearcher component when showSearch is false', ()=>{
        store = mockStore(stateDoNotShowSearch)
        wrapper = shallow(<App store={store}/>)
        expect (wrapper.find('OrderSearcher')).not.toBe
    })



})
