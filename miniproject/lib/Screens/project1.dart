import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      title: Text("Menu"),
    ),
    body: Padding(
      padding: const EdgeInsets.all(10),
      child: Column(
        children: [
          Container(
            width:1000,
            decoration: BoxDecoration(
              color: Colors.orange,
              border: Border.all(width: 2),
            ),
            child: Padding(
              padding: const EdgeInsets.all(10),
              child: Text("Broast",
              textAlign: TextAlign.center,
              style: TextStyle(fontSize:20,
              fontWeight: FontWeight.bold,
              
               ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top:10),
            child: Container(
              decoration: BoxDecoration(
                border: Border.all(width: 2),
                color: Colors.orange),
              child: 
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 30,vertical: 20),
              child: Text(" fried chicken is a simple yet delicious dish consisting of chicken pieces that are coated in a seasoned flour mixture and then deep-fried until golden brown and crispy.",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w500,
              ),
              ),
            ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: 10),
            child: Container(
              decoration: BoxDecoration(
                border: Border.all(width: 2),
                color: Colors.orange, 
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    Row(
                      children: [
                        Icon(Icons.star),
                        Icon(Icons.star),
                        Icon(Icons.star),
                        Icon(Icons.star),
                        Icon(Icons.star),
                      ],
                    ),
                    Text("170 Review"),
                  ],
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: 10),
            child: Container(
              decoration: BoxDecoration(
                color: Colors.orange,
                border: Border.all(width:2),
              ),
              child: Padding(
                padding: const EdgeInsets.all(10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Column(
                      children: [
                        Icon(Icons.menu,color: Colors.amber[50]),
                        Text("Prepare",style: TextStyle(fontWeight: FontWeight.bold),),
                        SizedBox(height: 8,),
                        Text("25 min"),
                      ],
                    ),
                    Column(
                      children: [
                        Icon(Icons.alarm,color: Colors.amber[50],),
                        Text("Cook",style: TextStyle(fontWeight: FontWeight.bold)),
                         SizedBox(height: 8,),
                        Text("1 hour")
                      ],

                    ),
                    Column(
                      children: [
                        Icon(Icons.restaurant,color: Colors.amber[50]),
                        Text("Feed",style: TextStyle(fontWeight: FontWeight.bold)),
                        SizedBox(height: 8,),
                        Text("4-6"),
                      ],
                    )
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    ),
    );
  }
}