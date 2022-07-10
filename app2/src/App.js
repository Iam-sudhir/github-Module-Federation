import React from 'react';

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <div>
        <h4>Image loading from Different Application</h4>
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.bG8t9nihyZgKx4FP8Y_J0AHaEo?pid=ImgDet&rs=1"
          alt="Trulli"
          width="150"
          height="99"
        />
      </div>
    </div>
  );
};

export default App;
