import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class Images extends StatefulWidget {
  const Images({super.key});

  @override
  State<Images> createState() => _ImagesState();
}

class _ImagesState extends State<Images> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Hello images"),
       ),
       body:Column(
        children: [
         Image.asset("images/buy.png",
         width: 400,
         height: 400,
         fit: BoxFit.fill,//stretch photo not fine 
        //  fit:BoxFit.cover// take height revelent to width
         )
        ],
       )
    );
  }
}