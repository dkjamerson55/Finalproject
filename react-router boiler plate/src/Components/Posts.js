import React from 'react'
import useRouteMatch from 'react'

function Posts({ posts }) {

  const match = useRouteMatch();
  const findPostById = (id) =>
    posts.filter((post) => post.id == id)[0];
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => {
          return(
            <li key={index}>
              <Link to={`${match.url}/${post.id}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route
        path={`${match.path}/:postId`}
        render/>
      </Switch>
    </div>
  );
}

export default Posts