import 'package:flutter/material.dart';

import 'Aboutus.dart';
import 'Homepage.dart';

void main(){
  runApp(
    MaterialApp(
      home: HomePage(),
      routes:{
      "home":(context) => HomePage(),
      "AboutUs":(context)=>Aboutus(),
      },
      debugShowCheckedModeBanner: false,
    )
  );
}