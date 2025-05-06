import React, { useState } from 'react';
import { CoffeeOrderForm } from './components/CoffeeOrderForm';
import { CoffeeOrder } from './models/CoffeeOrder';

const App: React.FC = () => {
  const [order, setOrder] = useState<CoffeeOrder | null>(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Order Your Coffee</h1>
      <CoffeeOrderForm onSubmit={setOrder} />

      {order && (
        <div style={{ marginTop: '20px' }}>
          <h2>Your Coffee Order:</h2>
          <pre>{JSON.stringify(order, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;

