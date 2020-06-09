
const navigationContainer = () => {
  return (`
export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};`);
};

module.exports = navigationContainer;