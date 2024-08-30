import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class MyApp extends StatelessWidget {
  List employee=[
    {
    "name":"ahmed","age":12
    },
    {
      "name":"Mohammed","age":12
    },
    {
      "name":"Ali","age":12
    }

,
    {
      "name":"Ali","age":12
    }
,
    {
      "name":"Ali","age":12
    }
,
    {
      "name":"Ali","age":12
    }



  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("ListBuilder"),
      ),
      body:Container(
        // height: 400,
        child: ListView.separated(
          separatorBuilder: (context, i) {
            return 
            Divider();
            // Container(
            // height: 100,
            // color: Colors.black,
            // );
          },
        itemCount: employee.length,
        itemBuilder: (context, i) {
          return (Container(
            height: 100,
            color:i.isEven?Colors.red:Colors.green,
            child: Text("$i",
            textAlign: TextAlign.center,
            ),

            )
            );
        },
        ),
      ),

    );
  }
}