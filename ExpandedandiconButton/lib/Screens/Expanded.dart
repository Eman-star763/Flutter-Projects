import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class Space extends StatelessWidget {
  const Space({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
   appBar: AppBar(
    title: Text("ExpandedandResponsive"),
   ),
   body: Column(
    children: [
    Expanded(
      flex:1,
      child: Container(color: Colors.red,height: 100,)),
    Expanded(
      flex: 2,
      child: Container(color: Colors.green,height: 100,)),
    Expanded(
  
      child: Container(color: Colors.yellow,height: 100,)),
    Expanded(child: Container(color: Colors.blue,height: 100,)),

    ],
   ),

    );
  }
}