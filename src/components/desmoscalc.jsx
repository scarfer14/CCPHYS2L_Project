import { useEffect, useRef } from 'react';

const DesmosCalc = () => {
  const calculatorRef = useRef(null);

  useEffect(() => {
    if (window.Desmos && calculatorRef.current) {
      const calculator = Desmos.ScientificCalculator(calculatorRef.current, {
        keypad: true,
        expressions: false,
      }); //ScientificCalculator is interchangeable visit https://www.desmos.com/api/v1.11/docs/index.html#document-api-keys for documentation

      return () => calculator.destroy(); // Clean up on unmount
    }
  }, []);

  return (
    <div
      ref={calculatorRef}
      style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}
    />
  );
};

export default DesmosCalc;
