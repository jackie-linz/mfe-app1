import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        id="click-btn"
        className="shared-btn"
        onClick={() => setState((s) => s + 1)}
      >
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
