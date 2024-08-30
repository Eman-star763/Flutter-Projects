import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Icon and Iconbutton"),
      ),
      body:Container(
        child:
        IconButton(icon:Icon(Icons.abc),onPressed: (){
           print("Hello world");
        },
        iconSize: 100,
        )
      ),
    );
  }
}