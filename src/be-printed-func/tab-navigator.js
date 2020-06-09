const TabsNavigator = screens => {
    const head = `const TabsNavigator = () => {
    return (\n  <Tabs.Navigator>\n`;
    const foot = `  </Tabs.Navigator>\n );\n};`;
    let body = '';
    screens.map(screen => {
        body += `       <Tabs.Screen name="${screen}" component={${screen}StackScreen} />\n`;
    });
    return (`\n${head + body + foot}\n`);
};

module.exports = TabsNavigator;