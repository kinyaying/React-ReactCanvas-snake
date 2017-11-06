import React, {Component} from 'react';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
  const sidebar = <ul>
                      {posts.map(item => {
                        return <li key={item.id}>{item.title}</li>;
                      })}
                  </ul>

  const content = posts.map(item => {
    return <li key={item.id}>{item.content}</li>;
  })
  return (<ul>
              {sidebar}
              {content}
          </ul>)
}

// class Blog extends Component {
//   render() {
//     return <NumList numbers={[1,2,3,4,5]} />
//   }
// }

export default Blog;
