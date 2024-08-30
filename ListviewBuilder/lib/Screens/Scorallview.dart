import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class SingleChild extends StatelessWidget {
  const SingleChild({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Wrap and Scrollview"),
      ),
      body:
      SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: 
        Row(
          children: [
             Container(color:Colors.red,width:100,height: 100,),
           Container(color:Colors.blueGrey,width:100,height: 100,),
            Container(color:Colors.blue,width:100,height: 100,),
             Container(color:Colors.amber,width:100,height: 100,),
              Container(color:Colors.red,width:100,height: 100,),
           Container(color:Colors.blueGrey,width:100,height: 100,),
            Container(color:Colors.blue,width:100,height: 100,),
             Container(color:Colors.amber,width:100,height: 100,),

          ],
        ),

        // Column(
        //   children: [
        //     Container(color:Colors.red,width:100,height: 100,),
        //    Container(color:Colors.blueGrey,width:100,height: 100,),
        //     Container(color:Colors.blue,width:100,height: 100,),
        //      Container(color:Colors.amber,width:100,height: 100,),
        //       Container(color:Colors.red,width:100,height: 100,),
        //    Container(color:Colors.blueGrey,width:100,height: 100,),
        //     Container(color:Colors.blue,width:100,height: 100,),
        //      Container(color:Colors.amber,width:100,height: 100,),

        //   ],
        // ),
      )
      // Wrap(
      //   children: [
      //     Container(color:Colors.red,width:100,height: 100,),
      //      Container(color:Colors.blueGrey,width:100,height: 100,),
      //       Container(color:Colors.blue,width:100,height: 100,),
      //        Container(color:Colors.amber,width:100,height: 100,),
      //   ],

      // ),

    );
  }
}