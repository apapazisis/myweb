<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Freiberufler Web Entwickler | Apostolos Papazisis</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <link href="dist/app.css" type="text/css" rel="stylesheet">
</head>
    <body>
        <div id="app">
            <v-app light>
                <header-menu></header-menu>
                <v-content>
                    <router-view></router-view>
                    <footer-section></footer-section>
                </v-content>
            </v-app>
        </div>
        <script src="dist/app.js"></script>
    </body>
</html>