import React from 'react';

/**
 * @component ComponentName
 * @description Brief description of what this component does
 * 
 * @example
 * ```tsx
 * <ComponentName prop1="value" prop2={value} />
 * ```
 * 
 * @category Common
 * @usedIn Pages or components where this is used
 */

interface ComponentNameProps {
  /** Description of prop1 */
  prop1: string;
  /** Description of prop2 */
  prop2?: number;
  /** Description of children */
  children?: React.ReactNode;
}

/**
 * Component implementation with proper documentation
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2 = 0,
  children,
}) => {
  return (
    <div className="component-container">
      <h3>{prop1}</h3>
      {prop2 > 0 && <p>Value: {prop2}</p>}
      {children && <div className="content">{children}</div>}
    </div>
  );
};

export default ComponentName; 