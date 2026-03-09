import 'package:castelo/presentation/home/home_screen.dart';
import 'package:castelo/presentation/about/about_me_screen.dart';
import 'package:flutter/material.dart';
import '../../core/theme/app_theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Logopedia Castelo',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      initialRoute: '/',
      onGenerateRoute: (settings) {
        switch (settings.name) {
          case '/sobre-mi':
            return MaterialPageRoute(
              builder: (context) => const AboutMeScreen(),
            );
          case '/':
          default:
            final section = settings.arguments as String?;
            return MaterialPageRoute(
              builder: (context) => HomeScreen(scrollToSection: section),
            );
        }
      },
    );
  }
}
