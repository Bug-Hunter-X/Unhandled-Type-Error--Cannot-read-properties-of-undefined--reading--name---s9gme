```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  // Solution: Conditional rendering
  return (
    <View>
      {data ? (
        <Text>{data.name}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

//Alternative solution: Optional chaining
// return (
//   <View>
//     <Text>{data?.name || 'Loading...'}</Text>
//   </View>
// );
```