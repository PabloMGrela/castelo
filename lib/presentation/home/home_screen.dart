import 'package:flutter/material.dart';
import '../../core/theme/app_colors.dart';
import '../../core/constants/app_strings.dart';
import '../widgets/logo_widget.dart';
import '../widgets/nav_bar.dart';
import 'sections/hero_section.dart';
import 'sections/about_section.dart';
import 'sections/services_section.dart';
import 'sections/contact_section.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final ScrollController _scrollController = ScrollController();
  final GlobalKey _heroKey = GlobalKey();
  final GlobalKey _aboutKey = GlobalKey();
  final GlobalKey _servicesKey = GlobalKey();
  final GlobalKey _contactKey = GlobalKey();

  void _scrollTo(GlobalKey key) {
    final context = key.currentContext;
    if (context != null) {
      Scrollable.ensureVisible(
        context,
        duration: const Duration(milliseconds: 800),
        curve: Curves.easeInOut,
      );
    }
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: Theme.of(context).copyWith(
        cardTheme: CardThemeData(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(24),
          ),
          elevation: 0,
        ),
      ),
      child: Scaffold(
        backgroundColor: const Color(0xFFFAFAFA),
        appBar: NavBar(
          onHomeTap: () => _scrollTo(_heroKey),
          onAboutTap: () => _scrollTo(_aboutKey),
          onServicesTap: () => _scrollTo(_servicesKey),
          onContactTap: () => _scrollTo(_contactKey),
          backgroundColor: AppColors.primary,
          foregroundColor: Colors.white,
        ),
        endDrawer: Drawer(
          child: Container(
            color: AppColors.primary,
            child: SafeArea(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(24.0),
                    child: LogoWidget(
                      size: 180,
                      variant: LogoVariant.full,
                      color: Colors.white,
                    ),
                  ),
                  const Divider(color: Colors.white24),
                  _buildDrawerItem(
                    context,
                    AppStrings.navHome,
                    () => _scrollTo(_heroKey),
                  ),
                  _buildDrawerItem(
                    context,
                    AppStrings.navAbout,
                    () => _scrollTo(_aboutKey),
                  ),
                  _buildDrawerItem(
                    context,
                    AppStrings.navServices,
                    () => _scrollTo(_servicesKey),
                  ),
                  _buildDrawerItem(
                    context,
                    AppStrings.navContact,
                    () => _scrollTo(_contactKey),
                  ),
                ],
              ),
            ),
          ),
        ),
        body: SingleChildScrollView(
          controller: _scrollController,
          child: Column(
            children: [
              HeroSection(key: _heroKey),
              AboutSection(key: _aboutKey),
              ServicesSection(key: _servicesKey),
              ContactSection(key: _contactKey),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildDrawerItem(
    BuildContext context,
    String title,
    VoidCallback onTap,
  ) {
    return ListTile(
      title: Text(
        title,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 18,
          fontWeight: FontWeight.w500,
        ),
      ),
      onTap: () {
        Navigator.pop(context); // Close drawer
        onTap();
      },
      contentPadding: const EdgeInsets.symmetric(horizontal: 24, vertical: 8),
    );
  }
}
