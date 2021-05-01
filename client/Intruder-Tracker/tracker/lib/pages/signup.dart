import 'package:flutter/material.dart';
import 'package:tracker/components/appBar.dart';
import 'package:tracker/components/inpuField.dart';
import 'package:tracker/components/primaryButton.dart';
import 'package:tracker/components/secondaryScreen.dart';
import 'package:tracker/pages/login.dart';

class SignupPage extends StatefulWidget {
  @override
  _SignupPageState createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  bool isLoading = false;
  GlobalKey<ScaffoldState> _key = GlobalKey<ScaffoldState>();
  final phoneNumber = TextEditingController();
  final password = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _key,
      appBar: CustomAppBar(
        title: 'Sign Up',
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
                    onPressed: () {},
                    text: 'Sign Up',
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
                                  new LoginPage()));
                    },
                    text: 'Login',
                  ),
                )
              ],
            )
          : Center(child: CircularProgressIndicator()),
    );
  }
}
