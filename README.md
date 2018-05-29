# Build based upon:
https://daveceddia.com/create-react-app-express-backend/

# Running project:
Once the project is set up, yarn'ed, etc, start it in two steps.
## Server side -
From main project directory, run the following command.  Notice it sets an environment variable to start the express server listening on port 3001.  By default the React client side will start listening on port 3000 (below).

*PORT=3001 node bin/www*

## Client side -
cd into client directory

*yarn start*

### URL for dater
"proxy": "https://apps-review.global.dish.com/domo-event-log-master/domo-event-log"

### Good Test clientOrderGuids for Review:

* ﻿TESTUS53812  -  This guy has an update for both Order-level Attribs and Order Line-level attribs
*  ﻿2-23-18_1   -  And this guy only updates Order-level Attributes
*  ZDtGEEq65U   -  Valid order, but no preprocessing updates

## MongoDB queries

Get all order-proprocessed-events that contain an actual order update:

db.getCollection('DomoEventLog').find({$and: [
   {'domoEvent.type':'order-preprocessed-event'}, 
   {'domoEvent.payload.orderUpdate': {$gt:{}} }
]})




# React Snippets triggers

<table>
<thead>
<tr>
<th align="right">Trigger</th>
<th>Content</th>
</tr>
</thead>
<tbody>
<tr>
<td align="right"><code>rcc</code></td>
<td>class component skeleton</td>
</tr>
<tr>
<td align="right"><code>rrc</code></td>
<td>class component skeleton with react-redux connect</td>
</tr>
<tr>
<td align="right"><code>rccp</code></td>
<td>class component skeleton with prop types after the class</td>
</tr>
<tr>
<td align="right"><code>rcfc</code></td>
<td>class component skeleton that contains all the lifecycle methods</td>
</tr>
<tr>
<td align="right"><code>rsc</code></td>
<td>stateless component skeleton</td>
</tr>
<tr>
<td align="right"><code>rscp</code></td>
<td>stateless component with prop types skeleton</td>
</tr>
<tr>
<td align="right"><code>pt</code></td>
<td>empty propTypes declaration</td>
</tr>
<tr>
<td align="right"><code>con</code></td>
<td>class default constructor with props</td>
</tr>
<tr>
<td align="right"><code>conc</code></td>
<td>class default constructor with props and context</td>
</tr>
<tr>
<td align="right"><code>cwm</code></td>
<td><code>componentWillMount method</code></td>
</tr>
<tr>
<td align="right"><code>cdm</code></td>
<td><code>componentDidMount method</code></td>
</tr>
<tr>
<td align="right"><code>cwr</code></td>
<td><code>componentWillReceiveProps method</code></td>
</tr>
<tr>
<td align="right"><code>scu</code></td>
<td><code>shouldComponentUpdate method</code></td>
</tr>
<tr>
<td align="right"><code>cwup</code></td>
<td><code>componentWillUpdate method</code></td>
</tr>
<tr>
<td align="right"><code>cdup</code></td>
<td><code>componentDidUpdate method</code></td>
</tr>
<tr>
<td align="right"><code>cwun</code></td>
<td><code>componentWillUnmount method</code></td>
</tr>
<tr>
<td align="right"><code>ren</code></td>
<td><code>render method</code></td>
</tr>
<tr>
<td align="right"><code>bind</code></td>
<td><code>binds the this of method inside the constructor</code></td>
</tr></tbody></table>
<p>Add all the snippets that can be used for prop types.</p>
<table>
<thead>
<tr>
<th>Trigger</th>
<th>Content</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>pta</code></td>
<td><code>PropTypes.array,</code></td>
</tr>
<tr>
<td><code>ptar</code></td>
<td><code>PropTypes.array.isRequired,</code></td>
</tr>
<tr>
<td><code>ptb</code></td>
<td><code>PropTypes.bool,</code></td>
</tr>
<tr>
<td><code>ptbr</code></td>
<td><code>PropTypes.bool.isRequired,</code></td>
</tr>
<tr>
<td><code>ptf</code></td>
<td><code>PropTypes.func,</code></td>
</tr>
<tr>
<td><code>ptfr</code></td>
<td><code>PropTypes.func.isRequired,</code></td>
</tr>
<tr>
<td><code>ptn</code></td>
<td><code>PropTypes.number,</code></td>
</tr>
<tr>
<td><code>ptnr</code></td>
<td><code>PropTypes.number.isRequired,</code></td>
</tr>
<tr>
<td><code>pto</code></td>
<td><code>PropTypes.object.,</code></td>
</tr>
<tr>
<td><code>ptor</code></td>
<td><code>PropTypes.object.isRequired,</code></td>
</tr>
<tr>
<td><code>pts</code></td>
<td><code>PropTypes.string,</code></td>
</tr>
<tr>
<td><code>ptsr</code></td>
<td><code>PropTypes.string.isRequired,</code></td>
</tr>
<tr>
<td><code>ptnd</code></td>
<td><code>PropTypes.node,</code></td>
</tr>
<tr>
<td><code>ptndr</code></td>
<td><code>PropTypes.node.isRequired,</code></td>
</tr>
<tr>
<td><code>ptel</code></td>
<td><code>PropTypes.element,</code></td>
</tr>
<tr>
<td><code>ptelr</code></td>
<td><code>PropTypes.element.isRequired,</code></td>
</tr>
<tr>
<td><code>pti</code></td>
<td><code>PropTypes.instanceOf(ClassName),</code></td>
</tr>
<tr>
<td><code>ptir</code></td>
<td><code>PropTypes.instanceOf(ClassName).isRequired,</code></td>
</tr>
<tr>
<td><code>pte</code></td>
<td><code>PropTypes.oneOf(['News', 'Photos']),</code></td>
</tr>
<tr>
<td><code>pter</code></td>
<td><code>PropTypes.oneOf(['News', 'Photos']).isRequired,</code></td>
</tr>
<tr>
<td><code>ptet</code></td>
<td><code>PropTypes.oneOfType([PropTypes.string, PropTypes.number]),</code></td>
</tr>
<tr>
<td><code>ptetr</code></td>
<td><code>PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,</code></td>
</tr>
<tr>
<td><code>ptao</code></td>
<td><code>PropTypes.arrayOf(PropTypes.number),</code></td>
</tr>
<tr>
<td><code>ptaor</code></td>
<td><code>PropTypes.arrayOf(PropTypes.number).isRequired,</code></td>
</tr>
<tr>
<td><code>ptoo</code></td>
<td><code>PropTypes.objectOf(PropTypes.number),</code></td>
</tr>
<tr>
<td><code>ptoor</code></td>
<td><code>PropTypes.objectOf(PropTypes.number).isRequired,</code></td>
</tr>
<tr>
<td><code>ptsh</code></td>
<td><code>PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),</code></td>
</tr>
<tr>
<td><code>ptshr</code></td>
<td><code>PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired,</code></td>
</tr></tbody></table>

