import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class pageviewandBuilder extends StatefulWidget {
  const pageviewandBuilder({super.key});

  @override
  State<pageviewandBuilder> createState() => _pageviewandBuilderState();
}

class _pageviewandBuilderState extends State<pageviewandBuilder> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Pageview and PageviewBuilder"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: Container(
          height: 300,
          child:PageView(
            onPageChanged: (value) {
              print(value);
            },
            children: [
             Image.asset("images/icons8-buy-100.png",fit: BoxFit.cover,),
             Image.asset("images/flower-2889278_960_720.jpg",fit:BoxFit.cover)
            ],
          ),
        ),
      ),
    );
  }
}