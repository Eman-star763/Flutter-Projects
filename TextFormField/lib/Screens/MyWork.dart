import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class MyWork extends StatefulWidget {
   MyWork({super.key});

  @override
  State<MyWork> createState() => _MyWorkState();
}

class _MyWorkState extends State<MyWork> {
  @override
    TextEditingController username= new TextEditingController();

  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      title: Text("MyEditingController"),
    ),
    body: Column(
    children: [
      TextFormField(
        controller: username,
      ),
      MaterialButton(
        color: Colors.red,
        textColor: Colors.black,
        onPressed: (){
          print(username.text);
        },
      child: Text("print"),
      ),
      TextFormField(
        onChanged: (Val){
          print(Val);
        },
      )
    ],
    ),
    );
  }
}