import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class MyListtile extends StatelessWidget {
  const MyListtile({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      title: Text("Card and listtile"),

    ),
    body:ListView(
      children: [
        Card(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
          // elevation: 0,
          // margin: EdgeInsets.all(20),
          child: ListTile(
            isThreeLine: true,
            onLongPress: () {
              print("long press");
            },
            // onTap: () {
            //   print("info");
            // },
            leading: Text("10"),
            title: Text("Ahmed"),
            subtitle: Text("age 30"),
            trailing: Text("2022"),
          )

        ),
        Card(
          shape:RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
          child: ListTile(
            onTap: () {
              print("info");
            },
            leading: Text("10"),
            title: Text("Ahmed"),
            subtitle: Text("age 30"),
            trailing: Text("2023"),
          )

        ),
        Card(
          child: ListTile(
            onTap: () {
              print("info");
            },
            leading: Text("10"),
            title: Text("Ahmed"),
            subtitle: Text("age 30"),
            trailing: Text("2023"),
          )

        ),
        Card(
          child: ListTile(
            onTap: () {
              print("info");
            },
            leading: Text("10"),
            title: Text("Ahmed"),
            subtitle: Text("age 30"),
            trailing: Text("icons"),
          )

        ),
        Card(
          child: ListTile(
            onTap: () {
              print("info");
            },
            leading: Text("10"),
            title: Text("Ahmed"),
            subtitle: Text("age 30"),
            trailing: Text("icons"),
          )

        ),
        Card(
          child: ListTile(
            onTap: () {
              print("info");
            },
            leading: Text("10"),
            title: Text("Ahmed"),
            subtitle: Text("age 30"),
            trailing: Text("icons"),
          )

        ),
        Card(
          child: ListTile(
            onTap: () {
              print("info");
            },
            leading: Text("10"),
            title: Text("Ahmed"),
            subtitle: Text("age 30"),
            trailing: Text("icons"),
          )

        ),
        Card(
          child: ListTile(
            onTap: () {
              print("info");
            },
            leading: Text("10"),
            title: Text("Ahmed"),
            subtitle: Text("age 30"),
            trailing: Text("icons"),
          )

        ),
        Card(
          child: ListTile(
            onTap: () {
              print("info");
            },
            leading: Text("10"),
            title: Text("Ahmed"),
            subtitle: Text("age 30"),
            trailing: Text("icons"),
          )

        ),
      ],
    ),
    );
  }
}