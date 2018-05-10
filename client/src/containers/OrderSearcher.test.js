import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon'

import OrderSearcher from './OrderSearcher'

describe('<OrderSearcher />',()=>{

    it('renders an H1 tag', ()=>{
        const wrapper = shallow(<OrderSearcher/>)
        expect (wrapper.find('h4').text()).toEqual("Search for clientOrderGuid")
    })

})