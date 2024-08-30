import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
class Containers extends StatefulWidget {
  const Containers({super.key});
  @override
  State<Containers> createState() => _Containers();
}
class _ {
}
class _Containers extends State<Containers> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Hello World", style:TextStyle(
          color: Colors.pink,
          backgroundColor: Colors.amber
        )),
      ),   
      body:Container(
        decoration: BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(200)),
        border:Border.all(color: Colors.black,width:10),
        color: Colors.blue,
        boxShadow: [
          BoxShadow(color:Colors.red,offset: Offset(10,10),blurRadius: 20,spreadRadius: 20)
        ]
        ),
        width:300,
        height:300,
       alignment: Alignment.center,//for words
       padding: EdgeInsets.all(20),// space inside
       margin: EdgeInsets.all(20),//space outside
       child: Text("Hello World",style: TextStyle(
       color:Colors.white,
       fontWeight: FontWeight.w600,
        fontSize: 20,
       ),
       ),
      ),
    );
  }
}