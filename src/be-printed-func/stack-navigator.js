const createStackFunc = screen => {
    return (`const ${screen}StackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="${screen}" component={${screen}} />
        </Stack.Navigator>
    );
};
`);
};

module.exports = createStackFunc;
