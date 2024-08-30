import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class listview extends StatefulWidget {
  const listview({super.key});

  @override
  State<listview> createState() => _listviewState();
}

class _listviewState extends State<listview> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:Text("listview") ,
      ),
      body: Container(
        height: 400,
        child: ListView(
          scrollDirection: Axis.horizontal,
          children: [
            Container(
              width: 100,
              decoration: BoxDecoration(
                color: Colors.amber
              ),
            ),
          
        Container(
              width: 100,
              decoration: BoxDecoration(
                color: Colors.red
              ),
),
 Container(
              width: 100,
              decoration: BoxDecoration(
                color: Colors.blue
              ),
),
 Container(
              width: 100,
              decoration: BoxDecoration(
                color: Colors.cyan
              ),
),
 Container(
              width: 100,
              decoration: BoxDecoration(
                color: Colors.blueGrey
              ),
),
            
          ],
        ),
      ),
      
      
    );
  }
}