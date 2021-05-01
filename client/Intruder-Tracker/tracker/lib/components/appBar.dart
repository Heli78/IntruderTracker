import 'package:flutter/material.dart';

class CustomAppBar extends StatelessWidget with PreferredSizeWidget {
  final String title;
  final List<Widget> trailing;
  CustomAppBar({@required this.title, this.trailing});
  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text(title),
      actions: trailing,
      centerTitle: true,
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}
