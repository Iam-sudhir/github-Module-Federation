import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('app2/App'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'transparent',
        }}
      >
        <header
          style={{
            backgroundColor: '#666',
            padding: '30px',
            textAlign: 'center',
            fontSze: '30px',
            color: 'white',
          }}
        >
          <h2>Cities</h2>
        </header>

        <section>
          <nav
            style={{
              float: 'left',
              width: '20%',
              height: '420px' /* only for demonstration, should be removed */,
              background: '#ccc',
              padding: '10px',
            }}
          >
            <ul
              style={{
                listStyleType: 'none',
                padding: '0',
              }}
            >
              <li>
                <a href="#">London</a>
              </li>
              <li>
                <a href="#">Paris</a>
              </li>
              <li>
                <a href="#">Tokyo</a>
              </li>
            </ul>
          </nav>

          <article
            style={{
              float: 'left',
              padding: '20px',
              width: '65%',
              backgroundColor: '#f1f1f1',
              height: '400px',
            }}
          >
            <h1>London</h1>
            <p>
              London is the capital city of England. It is the most populous
              city in the United Kingdom, with a metropolitan area of over 13
              million inhabitants.
            </p>
            <Suspense fallback={'loading...'}>
              <RemoteApp />
            </Suspense>
            <p>
              London is the capital city of England. It is the most populous
              city in the United Kingdom
            </p>
          </article>
        </section>

        <footer
          style={{
            backgroundColor: '#777',
            padding: '10px',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <p>Footer-XYZS</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
