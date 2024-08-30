import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

import 'Aboutus.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
       title: Text("HomePage"),),
       body: Column(
         children: [
           Center(
             child: Text("HomePage",
             style: TextStyle(
               fontSize: 40,
               color:Colors.black,
             ),
             ),
           ),
           MaterialButton(
            padding:EdgeInsets.all(20),
            onPressed: (){
              Navigator.of(context).pushNamed("AboutUs");
            },
            child: Text("Go to About us"),
            color:Colors.red,
            
           ),
           
         ],
       ),
       
    );
  }
}