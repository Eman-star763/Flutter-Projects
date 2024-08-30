// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = flutter_sdk.src__widgets__binding;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const text_style = flutter_sdk.src__painting__text_style;
  const colors = flutter_sdk.src__material__colors;
  const material_button = flutter_sdk.src__material__material_button;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const navigator = flutter_sdk.src__widgets__navigator;
  const page = flutter_sdk.src__material__page;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var Aboutus = Object.create(dart.library);
  var Homepage = Object.create(dart.library);
  var Homepage$ = Object.create(dart.library);
  var Aboutus$ = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    BuildContextToHomePage: () => (T.BuildContextToHomePage = dart.constFn(dart.fnType(Homepage.HomePage, [framework.BuildContext])))(),
    BuildContextToAboutus: () => (T.BuildContextToAboutus = dart.constFn(dart.fnType(Aboutus.Aboutus, [framework.BuildContext])))(),
    BuildContextToWidget: () => (T.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    IdentityMapOfString$BuildContextToWidget: () => (T.IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, T.BuildContextToWidget())))(),
    BuildContextToHomePage$1: () => (T.BuildContextToHomePage$1 = dart.constFn(dart.fnType(Homepage$.HomePage, [framework.BuildContext])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///zapp/project/lib/Aboutus.dart",
    "file:///zapp/project/lib/Homepage.dart",
    "package:flutter_app/Homepage.dart",
    "package:flutter_app/Aboutus.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.main = function main$0() {
    binding.runApp(new app.MaterialApp.new({home: new Homepage.HomePage.new(), routes: new (T.IdentityMapOfString$BuildContextToWidget()).from(["home", dart.fn(context => new Homepage.HomePage.new(), T.BuildContextToHomePage()), "AboutUs", dart.fn(context => new Aboutus.Aboutus.new(), T.BuildContextToAboutus())]), debugShowCheckedModeBanner: false}));
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  Aboutus.Aboutus = class Aboutus$ extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Aboutus.Aboutus.new({key: key});
    }
    createState() {
      return new Aboutus._AboutusState.new();
    }
  };
  (Aboutus.Aboutus.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Aboutus.Aboutus.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Aboutus.Aboutus.prototype;
  dart.addTypeTests(Aboutus.Aboutus);
  dart.addTypeCaches(Aboutus.Aboutus);
  dart.setMethodSignature(Aboutus.Aboutus, () => ({
    __proto__: dart.getMethods(Aboutus.Aboutus.__proto__),
    createState: dart.fnType(framework.State$(Aboutus.Aboutus), [])
  }));
  dart.setLibraryUri(Aboutus.Aboutus, I[0]);
  Aboutus._AboutusState = class _AboutusState extends framework.State$(Aboutus.Aboutus) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("AboutUs")}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("AboutUs", {style: new text_style.TextStyle.new({fontSize: 40, color: colors.Colors.black})})}), new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.all(20), onPressed: dart.fn(() => {
                navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new Homepage$.HomePage.new(), T.BuildContextToHomePage$1())}));
              }, T.VoidTovoid()), child: new text.Text.new("Go to HomePage"), color: colors.Colors.red}), new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.all(20), onPressed: dart.fn(() => {
                navigator.Navigator.of(context).pop(T.ObjectN());
              }, T.VoidTovoid()), child: new text.Text.new("Back"), color: colors.Colors.red})])})});
    }
    static ['_#new#tearOff']() {
      return new Aboutus._AboutusState.new();
    }
  };
  (Aboutus._AboutusState.new = function() {
    Aboutus._AboutusState.__proto__.new.call(this);
    ;
  }).prototype = Aboutus._AboutusState.prototype;
  dart.addTypeTests(Aboutus._AboutusState);
  dart.addTypeCaches(Aboutus._AboutusState);
  dart.setMethodSignature(Aboutus._AboutusState, () => ({
    __proto__: dart.getMethods(Aboutus._AboutusState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Aboutus._AboutusState, I[0]);
  Homepage.HomePage = class HomePage extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Homepage.HomePage.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("HomePage")}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("HomePage", {style: new text_style.TextStyle.new({fontSize: 40, color: colors.Colors.black})})}), new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.all(20), onPressed: dart.fn(() => {
                navigator.Navigator.of(context).pushNamed(T.ObjectN(), "AboutUs");
              }, T.VoidTovoid()), child: new text.Text.new("Go to About us"), color: colors.Colors.red})])})});
    }
  };
  (Homepage.HomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Homepage.HomePage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Homepage.HomePage.prototype;
  dart.addTypeTests(Homepage.HomePage);
  dart.addTypeCaches(Homepage.HomePage);
  dart.setMethodSignature(Homepage.HomePage, () => ({
    __proto__: dart.getMethods(Homepage.HomePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Homepage.HomePage, I[1]);
  Homepage$.HomePage = class HomePage extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Homepage$.HomePage.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("HomePage")}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("HomePage", {style: new text_style.TextStyle.new({fontSize: 40, color: colors.Colors.black})})}), new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.all(20), onPressed: dart.fn(() => {
                navigator.Navigator.of(context).pushNamed(T.ObjectN(), "AboutUs");
              }, T.VoidTovoid()), child: new text.Text.new("Go to About us"), color: colors.Colors.red})])})});
    }
  };
  (Homepage$.HomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Homepage$.HomePage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Homepage$.HomePage.prototype;
  dart.addTypeTests(Homepage$.HomePage);
  dart.addTypeCaches(Homepage$.HomePage);
  dart.setMethodSignature(Homepage$.HomePage, () => ({
    __proto__: dart.getMethods(Homepage$.HomePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Homepage$.HomePage, I[2]);
  Aboutus$.Aboutus = class Aboutus extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Aboutus$.Aboutus.new({key: key});
    }
    createState() {
      return new Aboutus$._AboutusState.new();
    }
  };
  (Aboutus$.Aboutus.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Aboutus$.Aboutus.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Aboutus$.Aboutus.prototype;
  dart.addTypeTests(Aboutus$.Aboutus);
  dart.addTypeCaches(Aboutus$.Aboutus);
  dart.setMethodSignature(Aboutus$.Aboutus, () => ({
    __proto__: dart.getMethods(Aboutus$.Aboutus.__proto__),
    createState: dart.fnType(framework.State$(Aboutus$.Aboutus), [])
  }));
  dart.setLibraryUri(Aboutus$.Aboutus, I[3]);
  Aboutus$._AboutusState = class _AboutusState extends framework.State$(Aboutus$.Aboutus) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("AboutUs")}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("AboutUs", {style: new text_style.TextStyle.new({fontSize: 40, color: colors.Colors.black})})}), new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.all(20), onPressed: dart.fn(() => {
                navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new Homepage$.HomePage.new(), T.BuildContextToHomePage$1())}));
              }, T.VoidTovoid()), child: new text.Text.new("Go to HomePage"), color: colors.Colors.red}), new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.all(20), onPressed: dart.fn(() => {
                navigator.Navigator.of(context).pop(T.ObjectN());
              }, T.VoidTovoid()), child: new text.Text.new("Back"), color: colors.Colors.red})])})});
    }
    static ['_#new#tearOff']() {
      return new Aboutus$._AboutusState.new();
    }
  };
  (Aboutus$._AboutusState.new = function() {
    Aboutus$._AboutusState.__proto__.new.call(this);
    ;
  }).prototype = Aboutus$._AboutusState.prototype;
  dart.addTypeTests(Aboutus$._AboutusState);
  dart.addTypeCaches(Aboutus$._AboutusState);
  dart.setMethodSignature(Aboutus$._AboutusState, () => ({
    __proto__: dart.getMethods(Aboutus$._AboutusState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Aboutus$._AboutusState, I[3]);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "file:///zapp/project/lib/Aboutus.dart": Aboutus,
    "file:///zapp/project/lib/Homepage.dart": Homepage,
    "package:flutter_app/Homepage.dart": Homepage$,
    "package:flutter_app/Aboutus.dart": Aboutus$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/Aboutus.dart","/zapp/project/lib/Homepage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;ACxCG,IATD,eACE,+BACQ,qCACC,yDACP,QAAO,QAAC,WAAY,0DACpB,WAAU,QAAC,WAAU,qFAEO;EAGlC;;ECTwB;;;;;;;ACEU;IAAe;;;QAH1B;AAAf,mDAAe,GAAG;;EAAE;;;;;;;;;UAQA;AACxB,YAAO,oCACI,+BACD,kBAAK,oBACN,gCACM,wBACR,6BACS,kBAAK,mBACL,wCACK,WACG,2BAIjB,iDACoB,+BAAI,gBACZ;AACuE,gBAAtE,AAAY,uBAAT,OAAO,qBAAO,yCAA2B,QAAC,WAAY;yCAG9D,kBAAK,0BACC,qBAGb,iDACmB,+BAAI,gBACZ;AACiB,gBAAjB,AAAY,uBAAT,OAAO;yCAGd,kBAAK,gBACC;IAKvB;;;;;;;;EACF;;;;;;;;;;;;;UCzC4B;AACxB,YAAO,oCACI,+BACD,kBAAK,qBACN,gCACM,wBACR,6BACS,kBAAK,oBACL,wCACK,WACG,2BAIjB,iDACoB,+BAAI,gBACZ;AACiC,gBAAhC,AAAY,uBAAT,OAAO,yBAAY;yCAE3B,kBAAK,0BACC;IAQvB;;;QA/BsB;AAAhB,qDAAgB,GAAG;;EAAE;;;;;;;;;;;;;UAGD;AACxB,YAAO,oCACI,+BACD,kBAAK,qBACN,gCACM,wBACR,6BACS,kBAAK,oBACL,wCACK,WACG,2BAIjB,iDACoB,+BAAI,gBACZ;AACiC,gBAAhC,AAAY,uBAAT,OAAO,yBAAY;yCAE3B,kBAAK,0BACC;IAQvB;;;QA/BsB;AAAhB,sDAAgB,GAAG;;EAAE;;;;;;;;;;;;;;ADEK;IAAe;;;QAH1B;AAAf,oDAAe,GAAG;;EAAE;;;;;;;;;UAQA;AACxB,YAAO,oCACI,+BACD,kBAAK,oBACN,gCACM,wBACR,6BACS,kBAAK,mBACL,wCACK,WACG,2BAIjB,iDACoB,+BAAI,gBACZ;AACuE,gBAAtE,AAAY,uBAAT,OAAO,qBAAO,yCAA2B,QAAC,WAAY;yCAG9D,kBAAK,0BACC,qBAGb,iDACmB,+BAAI,gBACZ;AACiB,gBAAjB,AAAY,uBAAT,OAAO;yCAGd,kBAAK,gBACC;IAKvB;;;;;;;;EACF","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    zapp__project__lib__Aboutus: Aboutus,
    zapp__project__lib__Homepage: Homepage,
    Homepage: Homepage$,
    Aboutus: Aboutus$
  };
}));

//# sourceMappingURL=main.js.map
