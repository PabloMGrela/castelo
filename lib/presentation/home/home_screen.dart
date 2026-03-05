import 'package:flutter/material.dart';
import '../../core/theme/app_colors.dart';
import '../../core/constants/app_strings.dart';
import '../widgets/logo_widget.dart';
import '../widgets/nav_bar.dart';
import 'sections/hero_section.dart';
import 'sections/about_section.dart';
import 'sections/services_section.dart';
import 'sections/areas_section.dart';
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
  final GlobalKey _interventionAreasKey = GlobalKey();

  bool _isScrolled = false;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
  }

  void _onScroll() {
    if (_scrollController.offset > 50 && !_isScrolled) {
      setState(() => _isScrolled = true);
    } else if (_scrollController.offset <= 50 && _isScrolled) {
      setState(() => _isScrolled = false);
    }
  }

  void _scrollTo(GlobalKey key) {
    final context = key.currentContext;
    if (context != null) {
      Scrollable.ensureVisible(
        context,
        duration: const Duration(milliseconds: 1000),
        curve: Curves.easeInOutCubic,
      );
    }
  }

  @override
  void dispose() {
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      extendBodyBehindAppBar: true,
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(100),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          child: NavBar(
            onHomeTap: () => _scrollTo(_heroKey),
            onAboutTap: () => _scrollTo(_aboutKey),
            onServicesTap: () => _scrollTo(_servicesKey),
            onContactTap: () => _scrollTo(_contactKey),
            onInterventionAreasTap: () => _scrollTo(_interventionAreasKey),
            backgroundColor: _isScrolled ? Colors.white : Colors.transparent,
            foregroundColor: _isScrolled ? AppColors.primary : Colors.white,
          ),
        ),
      ),
      endDrawer: Drawer(
        width: 320,
        backgroundColor: AppColors.primary,
        child: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.all(40.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const LogoWidget(
                      size: 140,
                      variant: LogoVariant.full,
                      color: Colors.white,
                    ),
                    IconButton(
                      icon: const Icon(
                        Icons.close_rounded,
                        color: Colors.white,
                        size: 32,
                      ),
                      onPressed: () => Navigator.pop(context),
                    ),
                  ],
                ),
              ),
              const Divider(color: Colors.white12, indent: 40, endIndent: 40),
              const SizedBox(height: 20),
              _buildDrawerItem(
                context,
                AppStrings.navHome,
                () => _scrollTo(_heroKey),
              ),
              _buildDrawerItem(
                context,
                AppStrings.navServices,
                () => _scrollTo(_servicesKey),
              ),
              _buildDrawerItem(
                context,
                AppStrings.navInterventionAreas,
                () => _scrollTo(_interventionAreasKey),
              ),
              _buildDrawerItem(
                context,
                AppStrings.navAbout,
                () => _scrollTo(_aboutKey),
              ),
              _buildDrawerItem(
                context,
                AppStrings.navContact,
                () => _scrollTo(_contactKey),
              ),
              const Spacer(),
              Padding(
                padding: const EdgeInsets.all(40.0),
                child: Text(
                  AppStrings.copyright,
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.3),
                    fontSize: 12,
                  ),
                ),
              ),
            ],
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
            AreasSection(key: _interventionAreasKey),
            ContactSection(key: _contactKey),
          ],
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
        title.toUpperCase(),
        style: const TextStyle(
          color: Colors.white,
          fontSize: 14,
          fontWeight: FontWeight.bold,
          letterSpacing: 2.0,
        ),
      ),
      onTap: () {
        Navigator.pop(context);
        onTap();
      },
      contentPadding: const EdgeInsets.symmetric(horizontal: 40, vertical: 12),
      hoverColor: Colors.white10,
    );
  }
}
