import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class MyApp extends StatelessWidget {
   MyApp({super.key});

  @override
  var name=TextEditingController();
  var pass=TextEditingController();
  final formkey=GlobalKey<FormState>();

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Form"),
      ),
      body:Padding(
        padding: const EdgeInsets.all(50),
        child: Form(
          key: formkey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextFormField(
                autovalidateMode: AutovalidateMode.always,
              controller: name,
              decoration: InputDecoration(
                hintText: "Enter name",
                label: Text("Name"),
                border: OutlineInputBorder(borderSide: BorderSide(width: 2)),          
                    ),
                    validator: (data) {
                      if(data!.isEmpty){
                        return "This field is required";
                      }
                    },
              ),

              SizedBox(height: 10,),
              TextFormField(
                obscureText: true,
                controller: pass,
                decoration: InputDecoration(
                  hintText: "Enter password",
                  label: Text("password"),
                  border: OutlineInputBorder(
                    borderSide: BorderSide(width: 2)
                  )
                ),
              validator: (data) {
                if(data!.isEmpty){
                  return "This field is required";
                }
              },

              ),
              SizedBox(height: 10,),
              ElevatedButton(
                onPressed: (){
                if(formkey.currentState!.validate()){
                  print('${name.text}');
                  print('${pass.text}');
                }
                },
              child: Text("Login"),)
            ],
          ),
        ),
      )
    );
  }
}