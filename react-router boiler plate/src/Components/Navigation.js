import React from 'react'
import {
    BrowserRouter as Router,
    Route, 
    Link,
    Switch,
    useRouteMatch
} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'

function Navigation() {
  return (
    //setting up what the imports will use, Links will change URL and based on the changed URL. Routes will read the URL and change the view.
    <Router>
        <div>
            <nav className='navBar'>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/users">Users</Link></li>
                    <li><Link to ="/posts">Posts</Link></li>
                </ul>
                {/* evaluates values and based on Url renders what is viewed */}
                <Switch>
                    <Route path='/posts'>
                        {/* functional component with posts passed in as props when in props url */}
                        <Posts posts={posts}/>
                    </Route>

                    <Route path='/users'>
                    {/* need to fix with mockapi */}
                        <Users names={[]}/> 
                    </Route>

                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>

            </nav>
        </div>
    </Router>
  )
}

export default Navigation