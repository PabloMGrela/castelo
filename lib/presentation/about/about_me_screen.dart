import 'package:flutter/material.dart';
import 'dart:math' as math;
import '../../core/theme/app_colors.dart';
import '../../core/constants/app_strings.dart';
import '../widgets/nav_bar.dart';
import '../home/sections/contact_section.dart';

class AboutMeScreen extends StatefulWidget {
  const AboutMeScreen({super.key});

  @override
  State<AboutMeScreen> createState() => _AboutMeScreenState();
}

class _AboutMeScreenState extends State<AboutMeScreen> {
  final ScrollController _scrollController = ScrollController();
  final GlobalKey _contactKey = GlobalKey();
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
        child: NavBar(
          onHomeTap: () => Navigator.of(context).pushReplacementNamed('/'),
          onAboutTap: () {
            _scrollController.animateTo(
              0,
              duration: const Duration(milliseconds: 1000),
              curve: Curves.easeInOutCubic,
            );
          },
          onServicesTap: () =>
              Navigator.of(context).pushReplacementNamed('/'),
          onInterventionAreasTap: () =>
              Navigator.of(context).pushReplacementNamed('/'),
          onContactTap: () => _scrollTo(_contactKey),
          backgroundColor: _isScrolled ? Colors.white : AppColors.primary,
          foregroundColor: _isScrolled ? AppColors.primary : Colors.white,
        ),
      ),
      body: SingleChildScrollView(
        controller: _scrollController,
        child: Column(
          children: [
            _buildHeroSection(context),
            _buildBioSection(context),
            _buildCvSection(context),
            ContactSection(key: _contactKey),
          ],
        ),
      ),
    );
  }

  Widget _buildHeroSection(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 900;

    return Container(
      width: double.infinity,
      constraints: BoxConstraints(minHeight: isMobile ? 400 : 500),
      decoration: const BoxDecoration(
        color: AppColors.primary,
      ),
      child: Stack(
        children: [
          // Decorative shapes
          Positioned(
            right: -80,
            top: -80,
            child: ExcludeSemantics(
              child: Opacity(
                opacity: 0.08,
                child: Transform.rotate(
                  angle: math.pi / 6,
                  child: Container(
                    width: 350,
                    height: 350,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(80),
                    ),
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            left: -60,
            bottom: -40,
            child: ExcludeSemantics(
              child: Opacity(
                opacity: 0.05,
                child: Transform.rotate(
                  angle: -math.pi / 5,
                  child: Container(
                    width: 250,
                    height: 250,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(60),
                    ),
                  ),
                ),
              ),
            ),
          ),
          // Content
          Padding(
            padding: EdgeInsets.symmetric(
              horizontal: isMobile ? 24 : 64,
              vertical: 120,
            ),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 1200),
                child: Padding(
                  padding: const EdgeInsets.only(top: 60),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Container(
                            width: 60,
                            height: 2,
                            color: AppColors.secondary,
                          ),
                          const SizedBox(width: 24),
                          Text(
                            AppStrings.aboutMeTitle.toUpperCase(),
                            style: const TextStyle(
                              color: AppColors.secondary,
                              fontSize: 16,
                              letterSpacing: 4.0,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 32),
                      Text(
                        AppStrings.aboutMeSubtitle,
                        style: Theme.of(context)
                            .textTheme
                            .displayMedium
                            ?.copyWith(
                              color: Colors.white,
                              fontWeight: FontWeight.w800,
                              fontSize: isMobile ? 36 : 48,
                              height: 1.2,
                            ),
                      ),
                      const SizedBox(height: 16),
                      Text(
                        AppStrings.aboutMeCollegiateNumber,
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.7),
                          fontSize: 18,
                          letterSpacing: 0.5,
                          fontWeight: FontWeight.w400,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBioSection(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 900;

    return Container(
      width: double.infinity,
      color: Colors.white,
      child: Stack(
        children: [
          Positioned(
            left: -100,
            top: 80,
            child: ExcludeSemantics(
              child: Opacity(
                opacity: 0.04,
                child: Transform.rotate(
                  angle: math.pi / 4,
                  child: Container(
                    width: 300,
                    height: 300,
                    decoration: BoxDecoration(
                      color: AppColors.primary,
                      borderRadius: BorderRadius.circular(60),
                    ),
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(
              horizontal: isMobile ? 24 : 64,
              vertical: 100,
            ),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 800),
                child: Semantics(
                  container: true,
                  label: 'Biografía profesional',
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      _buildBioParagraph(AppStrings.aboutMeBio1),
                      const SizedBox(height: 28),
                      _buildBioParagraph(AppStrings.aboutMeBio2),
                      const SizedBox(height: 28),
                      _buildBioParagraph(AppStrings.aboutMeBio3),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBioParagraph(String text) {
    return Text(
      text,
      style: TextStyle(
        fontSize: 18,
        color: Colors.grey[800],
        height: 1.8,
        letterSpacing: 0.3,
      ),
    );
  }

  Widget _buildCvSection(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 900;

    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: AppColors.secondary.withValues(alpha: 0.3),
      ),
      child: Stack(
        children: [
          Positioned(
            right: -80,
            bottom: -60,
            child: ExcludeSemantics(
              child: Opacity(
                opacity: 0.06,
                child: Transform.rotate(
                  angle: -math.pi / 3,
                  child: Container(
                    width: 350,
                    height: 350,
                    decoration: BoxDecoration(
                      color: AppColors.primary,
                      borderRadius: BorderRadius.circular(70),
                    ),
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(
              horizontal: isMobile ? 24 : 64,
              vertical: 100,
            ),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 1200),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Header
                    Row(
                      children: [
                        ExcludeSemantics(
                          child: Container(
                            width: 60,
                            height: 2,
                            color: AppColors.primary,
                          ),
                        ),
                        const SizedBox(width: 24),
                        Text(
                          AppStrings.aboutMeCvTitle.toUpperCase(),
                          style: const TextStyle(
                            color: AppColors.primary,
                            fontSize: 16,
                            letterSpacing: 4.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 48),

                    // CV Items
                    ...AppStrings.aboutMeCvItems.map(
                      (item) => _CvItemCard(
                        title: item['title']!,
                        subtitle: item['subtitle']!,
                      ),
                    ),

                    const SizedBox(height: 48),

                    // Extra formation
                    _buildExtraCard(
                      context,
                      Icons.school_outlined,
                      AppStrings.aboutMeExtra,
                    ),
                    const SizedBox(height: 24),
                    _buildExtraCard(
                      context,
                      Icons.groups_outlined,
                      AppStrings.aboutMeWorkshops,
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildExtraCard(
    BuildContext context,
    IconData icon,
    String text,
  ) {
    return Semantics(
      container: true,
      child: Container(
        padding: const EdgeInsets.all(32),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(24),
          border: Border.all(
            color: Colors.grey[200]!,
            width: 1,
          ),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: AppColors.secondary.withValues(alpha: 0.5),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Icon(
                icon,
                size: 24,
                color: AppColors.primary,
              ),
            ),
            const SizedBox(width: 24),
            Expanded(
              child: Text(
                text,
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.grey[700],
                  height: 1.7,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _CvItemCard extends StatefulWidget {
  final String title;
  final String subtitle;

  const _CvItemCard({
    required this.title,
    required this.subtitle,
  });

  @override
  State<_CvItemCard> createState() => _CvItemCardState();
}

class _CvItemCardState extends State<_CvItemCard> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      container: true,
      label: '${widget.title} - ${widget.subtitle}',
      child: MouseRegion(
        onEnter: (_) => setState(() => _isHovered = true),
        onExit: (_) => setState(() => _isHovered = false),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          margin: const EdgeInsets.only(bottom: 20),
          padding: const EdgeInsets.all(32),
          decoration: BoxDecoration(
            color: _isHovered ? AppColors.primary : Colors.white,
            borderRadius: BorderRadius.circular(24),
            border: Border.all(
              color: _isHovered ? AppColors.primary : Colors.grey[200]!,
              width: 1,
            ),
            boxShadow: [
              BoxShadow(
                color: _isHovered
                    ? AppColors.primary.withValues(alpha: 0.2)
                    : Colors.black.withValues(alpha: 0.03),
                blurRadius: _isHovered ? 30 : 10,
                offset: Offset(0, _isHovered ? 15 : 5),
              ),
            ],
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ExcludeSemantics(
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: _isHovered
                        ? Colors.white.withValues(alpha: 0.2)
                        : AppColors.secondary.withValues(alpha: 0.5),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(
                    Icons.workspace_premium_outlined,
                    size: 24,
                    color: _isHovered ? Colors.white : AppColors.primary,
                  ),
                ),
              ),
              const SizedBox(width: 24),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      widget.title,
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                        color: _isHovered ? Colors.white : AppColors.text,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      widget.subtitle,
                      style: TextStyle(
                        fontSize: 15,
                        color: _isHovered
                            ? Colors.white.withValues(alpha: 0.8)
                            : Colors.grey[600],
                        letterSpacing: 0.3,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
