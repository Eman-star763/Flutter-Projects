import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class pageviewbuilder extends StatelessWidget {
   pageviewbuilder({super.key});

  @override
  List images=[
   "images/icons8-buy-100.png",
   "images/flower-2889278_960_720.jpg",
   "images/icons8-buy-100.png",
   "images/flower-2889278_960_720.jpg",
  
  ];
  Widget build(BuildContext context) {
    return Scaffold(
     appBar: AppBar(
      title: Text("PageviewBuilder"),
     ),
     body: PageView.builder(
      itemCount: images.length,
      itemBuilder: (BuildContext context, int index) {  
        return Image.asset(images[index],fit:BoxFit.scaleDown,);
      },),
    );
  }
}