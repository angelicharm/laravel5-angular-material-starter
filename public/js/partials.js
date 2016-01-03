!function(s){try{s=angular.module("partialsModule")}catch(a){s=angular.module("partialsModule",[])}s.run(["$templateCache",function(s){s.put("./views/app/footer/footer.html",'<md-content class="Page-Container Footer" ng-controller="FooterController as vm" layout-align="center center"><md-icon md-svg-src="/img/icons/logo-grey.svg" class="Footer-logo"></md-icon><br><br><div class="Footer-text">An open source project by <a href="https://github.com/jadjoubran" class="Footer-link" target="_blank">Jad Joubran</a>. Design by <a href="https://www.linkedin.com/in/nicolesaidy" class="Footer-link" target="_blank">Nicole Saidy</a></div><div class="Footer-text">&copy; 2016 Laravel Angular Material Starter</div></md-content>')}])}(),function(s){try{s=angular.module("partialsModule")}catch(a){s=angular.module("partialsModule",[])}s.run(["$templateCache",function(s){s.put("./views/app/header/header.html",'<md-content class="Page-Container DemoHeader" ng-controller="HeaderController as vm"><div layout="row"><div flex="90" flex-offset="5" class="DemoHeader-container"><div layout="row" layout-align="space-between"><img src="img/icons/logo.svg" class="DemoHeader-logo"><div layout="row" layout-align="center stretch"><a class="DemoHeader-link md-subhead" href="https://laravel-angular.readme.io" target="_blank">Docs</a> <a class="DemoHeader-link md-subhead" href="">Screencasts</a> <a class="DemoHeader-link md-subhead" href="https://github.com/jadjoubran/laravel5-angular-material-starter" target="_blank">Github</a></div></div></div></div></md-content>')}])}(),function(s){try{s=angular.module("partialsModule")}catch(a){s=angular.module("partialsModule",[])}s.run(["$templateCache",function(s){s.put("./views/app/landing/landing.html",'<div class="Page-Container Landing" ng-controller="LandingController as vm"><div layout="column" class="Landing-cover" layout-align="center center"><div class="md-headline Landing-subtitle">Build your next powerful web app</div><h1 class="md-display-3 Landing-heading"><strong>laravel angular</strong> <span class="Landing-headingLight">material starter</span></h1><md-button class="md-raised md-large Landing-getStarted" href="https://laravel-angular.readme.io/docs/install" target="_blank">Get Started</md-button></div><div class="Landing-laravelAngular"><div class="Landing-ampersand">&amp;</div><div layout="row"><div flex="50" class="Landing-laravel" layout-align="center center"><h2 class="md-display-2 Landing-laravelAngular-title">Laravel</h2><div class="md-title Landing-laravelAngular-subtitle">{{vm.laravel_description}}</div><br><div class="DemoCode"><span class="DemoCode-operator">&lt;?php</span><br><br><span class="DemoCode-highlight">class</span> <span class="DemoCode-secondary">PostsController</span><br>{<br><br>&nbsp;&nbsp;&nbsp;&nbsp;public <span class="DemoCode-secondary">function</span> <span class="DemoCode-highlight">get</span>()<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-secondary">$posts</span> = <span class="DemoCode-highlight">App</span>\\<span class="DemoCode-highlight">Post</span>::<span class="DemoCode-secondary">get</span>();<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">return</span> <span class="DemoCode-secondary">response</span>()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt;<span class="DemoCode-secondary">success</span>(compact(<span class="DemoCode-string">\'posts\'</span>));<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</div></div><div flex="50" class="Landing-angular" layout-align="center center"><h2 class="md-display-2 Landing-laravelAngular-title">Angular</h2><div class="md-title Landing-laravelAngular-subtitle">{{vm.angular_description}}</div><br><div class="DemoCode">(<span class="DemoCode-secondary">function</span>(){<br><span class="DemoCode-string">"use strict"</span>;<br><br><span class="DemoCode-secondary">function</span> <span class="DemoCode-highlight">LandingController</span>(API) {<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">this</span>.<span class="DemoCode-highlight">getPosts</span> = <span class="DemoCode-secondary">function</span>(){<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API.all(<span class="DemoCode-string">\'posts\'</span>).get()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then(<span class="DemoCode-secondary">function</span>(response){<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">this</span>.posts = <span class="DemoCode-highlight">response.data</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br><br>})();</div></div></div></div><div class="Landing-features" layout-align="center center"><h1 class="md-display-2 Landing-featuresMainTitle">Laravel Angular Material Starter</h1><div class="md-title Landing-featuresMainDescription">The right features to get you started</div><br><div><div layout="row" layout-align="space-between"><div flex="33"><div class="Landing-featuresEntry Landing-featuresEntry--restful"><md-icon md-svg-src="/img/icons/restful-api.svg" class="Landing-featuresEntry-icon"></md-icon></div><div class="md-headline Landing-featuresTitle">RESTful API</div><div class="md-subhead Landing-featuresDescription">Build consistent REST APIs and call them fluently using JavaScript, without having to worry about validation errors</div></div><div flex="33"><div class="Landing-featuresEntry Landing-featuresEntry--jwt"><md-icon md-svg-src="/img/icons/json-webtoken.svg" class="Landing-featuresEntry-icon"></md-icon></div><div class="md-headline Landing-featuresTitle">Json Web Token Authentication</div><div class="md-subhead Landing-featuresDescription">Get an out-of-the-box JWT Authentication in your app that allows you to authenticate users on the fly</div></div><div flex="33"><div class="Landing-featuresEntry Landing-featuresEntry--generators"><md-icon md-svg-src="/img/icons/angular-generators.svg" class="Landing-featuresEntry-icon"></md-icon></div><div class="md-headline Landing-featuresTitle">Angular Generators</div><div class="md-subhead Landing-featuresDescription">Generate angular features, dialogs, directives, services, filters & configs just like you\'re used to</div></div></div></div><br><br></div></div>')}])}();