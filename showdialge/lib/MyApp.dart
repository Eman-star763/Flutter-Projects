import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
     appBar: AppBar(
      title: Text("Show Dialog"),
     ),
     body: ListView(
      children: [
        Center(
          child: MaterialButton(
            color:Colors.amber,
            onPressed: (){
             showDialog(
              barrierDismissible:false,
              context:context,
              builder:(context){
                return AlertDialog(
                  titleTextStyle: TextStyle(color:Colors.red),
                  contentTextStyle: TextStyle(color:Colors.blue),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                 title: Text("warning"),
                 content:Text("Are you sure?"),
                 actions: [
                  MaterialButton(onPressed: (){
                    print("ok");
                  },child: Text("ok"),),
                 MaterialButton(onPressed: (){
                 Navigator.of(context).pop();
                 },child: Text("cancel"),),

                 ],
                );
              }
             );
            },
            child:Text("Show Dialog"),
            ),
        )
      ],
     ),
    );
  }
}