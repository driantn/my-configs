import { useState } from 'react';

import { add } from '@/utils';

function App() {
  const [one, setOne] = useState(0);
  return (
    <p className="w-full min-w-full p-3" onClick={() => setOne(1)}>
      Hello + {add(one, 2)}
    </p>
  );
}

export default App;
