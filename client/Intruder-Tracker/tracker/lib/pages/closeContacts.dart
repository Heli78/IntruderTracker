import 'package:flutter/material.dart';
import 'package:tracker/components/appBar.dart';

class CloseContactsPage extends StatefulWidget {
  @override
  _CloseContactsPageState createState() => _CloseContactsPageState();
}

class _CloseContactsPageState extends State<CloseContactsPage> {
  Future closeContactsService =
      Future.delayed(Duration(seconds: 5)).then((value) => 1);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(title: 'Add Close Contacts'),
      body: FutureBuilder(
        future: closeContactsService,
        builder: (context, snapshot) {
          return snapshot.hasData
              ? Container()
              : Center(
                  child: CircularProgressIndicator(),
                );
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {},
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButtonAnimator: FloatingActionButtonAnimator.scaling,
    );
  }
}
