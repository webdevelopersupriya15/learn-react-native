// app/index.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const CounterWithoutState = () => {
    let count = 0;

    const handlePress = () => {
        count += 1;
        console.log("Count without useState:", count);
    };

    const handlePressDecrement = () => {
        count -= 1;
        console.log("Count without useState:", count);
    };

    const handlePressReset = () => {
      count = 0;
      console.log("Count without useState:", count);
  };

    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}>Count without useState: {count}</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                  <Button title="Increment" onPress={handlePress} />
              </View>
              <View style={styles.buttonWrapper}>
                  <Button title="Decrement" onPress={handlePressDecrement} />
              </View>
              <View style={styles.buttonWrapper}>
                  <Button title="Reset" onPress={handlePressReset} />
              </View>


          </View>
        </View>
    );
};

const CounterWithState = () => {
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1);
        console.log("Count without useState:", count);
    };

    const handlePressDecrement = () => {
        setCount(count - 1);
        console.log("Count without useState:", count);
    };

    const handlePressReset = () => {
        setCount(0);
        console.log("Count without useState:", count);
    };

    useEffect(() => {
        console.log("Count updated:", count);
    }, [count]);

    return (
      <View style={styles.counterContainer}>
          <Text style={styles.counterText}>Count with useState: {count}</Text>
          <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                  <Button title="Increment" onPress={handlePress} />
              </View>
              <View style={styles.buttonWrapper}>
                  <Button title="Decrement" onPress={handlePressDecrement} />
              </View>
              <View style={styles.buttonWrapper}>
                  <Button title="Reset" onPress={handlePressReset} />
              </View>
          </View>
      </View>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter App</Text>
            <CounterWithoutState />
            <CounterWithState />
        </View>
    );
};

export default App;