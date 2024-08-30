import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("TextFormField"),
        
      ),
    body: Padding(
      padding: const EdgeInsets.all(10),
      child: Column(
        children: [
          TextFormField(
            decoration: InputDecoration(
              hintText: "Username",
              prefix: Icon(Icons.person)
            ),
          ),
          SizedBox(
            height: 10,
          ),
          TextFormField(
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              focusedBorder: OutlineInputBorder(
                borderSide: BorderSide(color: Colors.red,
                ),
                borderRadius: BorderRadius.circular(40)
              ),
            ),
          ),
          SizedBox(height:10),
          TextFormField(
            decoration: InputDecoration(
              enabled: true,
              enabledBorder: OutlineInputBorder(borderSide: BorderSide(color:Colors.green)),
            ),
          ),
          SizedBox(height: 10),
          TextFormField(
            
             decoration: InputDecoration(
              enabled: false,
              disabledBorder: OutlineInputBorder(
                borderSide: BorderSide(
                  color:Colors.yellow
                )
              )
             ),
          ),
          SizedBox(
            height: 10,
          ),
          TextFormField(
          maxLength: 10,
          ),
          SizedBox(
            height: 10,
          ),
          TextFormField(
            keyboardType: TextInputType.text,
            maxLines: 3,
            minLines: 1,
          )
        ],
      ),
    ),
    );

  }
}