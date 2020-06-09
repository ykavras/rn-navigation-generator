const rootStackNavigator = () => {
    return (`const RootStackScreen = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="App" component={TabsNavigator} />
        </Stack.Navigator>
    );
};
`);
};

module.exports = rootStackNavigator;