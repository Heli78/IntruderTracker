import 'package:flutter/material.dart';
import 'package:tracker/components/appBar.dart';
import 'package:tracker/components/inpuField.dart';
import 'package:tracker/components/primaryButton.dart';
import 'package:tracker/components/secondaryScreen.dart';
import 'package:tracker/pages/home.dart';
import 'package:tracker/pages/signup.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool isLoading = false;
  GlobalKey<ScaffoldState> _key = GlobalKey<ScaffoldState>();
  final phoneNumber = TextEditingController();
  final password = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _key,
      appBar: CustomAppBar(
        title: 'Login',
      ),
      body: isLoading == false
          ? ListView(
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: InputField(
                    controller: phoneNumber,
                    label: 'Phone Number',
                    type: TextInputType.phone,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: InputField(
                    controller: password,
                    label: 'Password',
                    obscured: true,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(15.0),
                  child: PrimaryButton(
                    onPressed: () {
                      Navigator.pushReplacement(
                          context,
                          new MaterialPageRoute(
                              builder: (BuildContext context) =>
                                  new HomePage()));
                    },
                    text: 'Login',
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(15.0),
                  child: SecondaryButton(
                    onPressed: () {
                      Navigator.pushReplacement(
                          context,
                          new MaterialPageRoute(
                              builder: (BuildContext context) =>
                                  new SignupPage()));
                    },
                    text: 'Sign Up',
                  ),
                )
              ],
            )
          : Center(child: CircularProgressIndicator()),
    );
  }
}
