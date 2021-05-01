import 'package:flutter/material.dart';
import 'package:tracker/components/appBar.dart';
import 'package:tracker/components/primaryButton.dart';
import 'package:tracker/pages/closeContacts.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  bool isLoading;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: 'Need Help?',
        trailing: [
          IconButton(
              icon: Icon(Icons.add_call),
              onPressed: () => Navigator.push(
                  context,
                  new MaterialPageRoute(
                      builder: (BuildContext context) =>
                          new CloseContactsPage())))
        ],
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(25.0),
          child: PrimaryButton(text: 'Notify', onPressed: () {}),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.pin_drop_outlined),
        onPressed: () {},
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}
