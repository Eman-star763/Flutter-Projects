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
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = flutter_sdk.src__widgets__binding;
  const app = flutter_sdk.src__material__app;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const page_view = flutter_sdk.src__widgets__page_view;
  const image = flutter_sdk.src__widgets__image;
  const box_fit = flutter_sdk.src__painting__box_fit;
  const framework = flutter_sdk.src__widgets__framework;
  const basic = flutter_sdk.src__widgets__basic;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const container = flutter_sdk.src__widgets__container;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var PageBuilder = Object.create(dart.library);
  var Page_view = Object.create(dart.library);
  var $toString = dartx.toString;
  var $length = dartx.length;
  var $_get = dartx._get;
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
    BuildContextAndintToImage: () => (T.BuildContextAndintToImage = dart.constFn(dart.fnType(image.Image, [framework.BuildContext, core.int])))(),
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///zapp/project/lib/PageBuilder.dart",
    "file:///zapp/project/lib/Page_view.dart"
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
    binding.runApp(new app.MaterialApp.new({home: new PageBuilder.pageviewbuilder.new(), debugShowCheckedModeBanner: false}));
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  var images = dart.privateName(PageBuilder, "pageviewbuilder.images");
  PageBuilder.pageviewbuilder = class pageviewbuilder extends framework.StatelessWidget {
    get images() {
      return this[images];
    }
    set images(value) {
      this[images] = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new PageBuilder.pageviewbuilder.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("PageviewBuilder")}), body: new page_view.PageView.builder({itemCount: this.images[$length], itemBuilder: dart.fn((context, index) => new image.Image.asset(core.String.as(this.images[$_get](index)), {fit: box_fit.BoxFit.scaleDown}), T.BuildContextAndintToImage())})});
    }
  };
  (PageBuilder.pageviewbuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    this[images] = ["images/icons8-buy-100.png", "images/flower-2889278_960_720.jpg", "images/icons8-buy-100.png", "images/flower-2889278_960_720.jpg"];
    PageBuilder.pageviewbuilder.__proto__.new.call(this, {key: key});
    ;
  }).prototype = PageBuilder.pageviewbuilder.prototype;
  dart.addTypeTests(PageBuilder.pageviewbuilder);
  dart.addTypeCaches(PageBuilder.pageviewbuilder);
  dart.setMethodSignature(PageBuilder.pageviewbuilder, () => ({
    __proto__: dart.getMethods(PageBuilder.pageviewbuilder.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(PageBuilder.pageviewbuilder, I[0]);
  dart.setFieldSignature(PageBuilder.pageviewbuilder, () => ({
    __proto__: dart.getFields(PageBuilder.pageviewbuilder.__proto__),
    images: dart.fieldType(core.List)
  }));
  Page_view.pageviewandBuilder = class pageviewandBuilder extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Page_view.pageviewandBuilder.new({key: key});
    }
    createState() {
      return new Page_view._pageviewandBuilderState.new();
    }
  };
  (Page_view.pageviewandBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Page_view.pageviewandBuilder.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Page_view.pageviewandBuilder.prototype;
  dart.addTypeTests(Page_view.pageviewandBuilder);
  dart.addTypeCaches(Page_view.pageviewandBuilder);
  dart.setMethodSignature(Page_view.pageviewandBuilder, () => ({
    __proto__: dart.getMethods(Page_view.pageviewandBuilder.__proto__),
    createState: dart.fnType(framework.State$(Page_view.pageviewandBuilder), [])
  }));
  dart.setLibraryUri(Page_view.pageviewandBuilder, I[1]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  Page_view._pageviewandBuilderState = class _pageviewandBuilderState extends framework.State$(Page_view.pageviewandBuilder) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Pageview and PageviewBuilder")}), body: new basic.Padding.new({padding: C[1] || CT.C1, child: new container.Container.new({height: 300, child: new page_view.PageView.new({onPageChanged: dart.fn(value => {
                core.print(value);
              }, T.intTovoid()), children: T.JSArrayOfWidget().of([new image.Image.asset("images/icons8-buy-100.png", {fit: box_fit.BoxFit.cover}), new image.Image.asset("images/flower-2889278_960_720.jpg", {fit: box_fit.BoxFit.cover})])})})})});
    }
    static ['_#new#tearOff']() {
      return new Page_view._pageviewandBuilderState.new();
    }
  };
  (Page_view._pageviewandBuilderState.new = function() {
    Page_view._pageviewandBuilderState.__proto__.new.call(this);
    ;
  }).prototype = Page_view._pageviewandBuilderState.prototype;
  dart.addTypeTests(Page_view._pageviewandBuilderState);
  dart.addTypeCaches(Page_view._pageviewandBuilderState);
  dart.setMethodSignature(Page_view._pageviewandBuilderState, () => ({
    __proto__: dart.getMethods(Page_view._pageviewandBuilderState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Page_view._pageviewandBuilderState, I[1]);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "file:///zapp/project/lib/PageBuilder.dart": PageBuilder,
    "file:///zapp/project/lib/Page_view.dart": Page_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/PageBuilder.dart","/zapp/project/lib/Page_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;AC5CG,IALD,eACE,+BACO,mEACuB;EAGlC;;ECLwB;;;ICCjB;;;;;;;;;;UAOqB;AACxB,YAAO,oCACE,+BACA,kBAAK,4BAEE,2CACH,AAAO,mCACL,SAAc,SAAa,UACzB,qCAAM,AAAM,mBAAC,KAAK,UAAa;IAGlD;;;QArBwB;IAGnB,eAAO,CACX,6BACA,qCACA,6BACA;AAPA,+DAAuB,GAAG;;EAAE;;;;;;;;;;;;;;;;;;ACGc;IAA0B;;;QAHrC;AAA1B,gEAA0B,GAAG;;EAAE;;;;;;;;;;;;;UAQX;AACxB,YAAO,oCACG,+BACC,kBAAK,yCAER,sDAEG,qCACG,YACF,2CACW,QAAC;AACF,gBAAZ,WAAM,KAAK;2CAEH,wBACH,sBAAM,mCAAwC,wBAC9C,sBAAM,2CAA+C;IAMtE;;;;;;;;EACF","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    zapp__project__lib__PageBuilder: PageBuilder,
    zapp__project__lib__Page_view: Page_view
  };
}));

//# sourceMappingURL=main.js.map
