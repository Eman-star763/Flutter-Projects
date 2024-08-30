import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_app/Homepage.dart';

class Aboutus extends StatefulWidget {
  const Aboutus({super.key});

  @override
  State<Aboutus> createState() => _AboutusState();
}

class _AboutusState extends State<Aboutus> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
       title: Text("AboutUs"),),
       body: Column(
         children: [
           Center(
             child: Text("AboutUs",
             style: TextStyle(
               fontSize: 40,
               color:Colors.black,
             ),
             ),
           ),
           MaterialButton(
            padding:EdgeInsets.all(20),
            onPressed: (){
              Navigator.of(context).push(MaterialPageRoute(builder: (context) => HomePage(),));

            },
            child: Text("Go to HomePage"),
            color:Colors.red,
            
           ),
            MaterialButton(
            padding:EdgeInsets.all(20),
            onPressed: (){
             Navigator.of(context).pop();

            },
            child: Text("Back"),
            color:Colors.red,
           ),
         ],
       ),
    );
  }
}