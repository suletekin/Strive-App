import 'package:flashy_tab_bar2/flashy_tab_bar2.dart';
import 'package:flutter/material.dart';
import 'package:striveapp/home_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _selectedIndex = 0;

  List<Widget> tabItems = [    Scaffold( body: HomePage(), ),    Center(child: const Text("1")),    Center(child: const Text("2")),    Center(child: const Text("3"))  ];

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Builder(
        builder: (BuildContext context) {
          return Scaffold(
            appBar: AppBar(
              backgroundColor: Color(0xFF23264E),
              elevation: 0,
              iconTheme: IconThemeData(color: Color(0xFF9496BE), size: 30),
            ),
            endDrawer: Drawer(
              backgroundColor: Color(0xFF23264E),
              child: ListView(
                padding: EdgeInsets.zero,
                children: [
                  DrawerHeader(
                    decoration: BoxDecoration(
                      color: Color(0xFF23264E),
                    ),
                    child: Text(''),
                  ),
                  ListTile(
                    title: const Text('Page 1', textAlign: TextAlign.center, style: TextStyle(fontWeight: FontWeight.bold, color: Color(0xFFFFFFFF))),
                    onTap: () {
                      Navigator.pop(context);
                    },
                  ),
                  ListTile(
                    title: const Text('Page 2', textAlign: TextAlign.center, style: TextStyle(fontWeight: FontWeight.bold, color: Color(0xFFFFFFFF))),
                    onTap: () {
                      Navigator.pop(context);
                    },
                  ),
                ],
              ),
            ),
            backgroundColor: Color(0xFF23264E),
            body: Center(
              child: tabItems[_selectedIndex],
            ),
            bottomNavigationBar: FlashyTabBar(
              backgroundColor: Colors.black,
              animationCurve: Curves.linear,
              selectedIndex: _selectedIndex,
              iconSize: 30,
              showElevation: false,
              onItemSelected: (index) => setState(() {
                _selectedIndex = index;
              }),
              items: [
                FlashyTabBarItem(
                  icon: Icon(Icons.home),
                  title: Text('Home'),
                ),
                FlashyTabBarItem(
                  icon: Icon(Icons.highlight),
                  title: Text('About'),
                ),
                FlashyTabBarItem(
                  icon: Icon(Icons.newspaper),
                  title: Text('Resources'),
                ),
                FlashyTabBarItem(
                  icon: Icon(Icons.event),
                  title: Text('Events'),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
} 
