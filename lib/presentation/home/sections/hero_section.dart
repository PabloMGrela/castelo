import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:ui';
import '../../../core/theme/app_colors.dart';
import '../../../core/constants/app_strings.dart';
import '../../widgets/logo_widget.dart';
import '../coming_soon_screen.dart';

class HeroSection extends StatefulWidget {
  const HeroSection({super.key});

  @override
  State<HeroSection> createState() => _HeroSectionState();
}

class _HeroSectionState extends State<HeroSection>
    with SingleTickerProviderStateMixin {
  final PageController _pageController = PageController();
  int _currentPage = 0;
  Timer? _timer;
  late AnimationController _scrollIconController;

  final List<String> _images = [
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1920&auto=format&fit=crop',
  ];

  @override
  void initState() {
    super.initState();
    _startTimer();
    _scrollIconController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);
  }

  void _startTimer() {
    _timer?.cancel();
    _timer = Timer.periodic(const Duration(seconds: 6), (timer) {
      if (_pageController.hasClients) {
        final nextPage = (_currentPage + 1) % _images.length;
        _pageController.animateToPage(
          nextPage,
          duration: const Duration(milliseconds: 1500),
          curve: Curves.easeInOutCubic,
        );
      }
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    _pageController.dispose();
    _scrollIconController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 700;
    final isShort = size.height < 800;

    return Semantics(
      container: true,
      label: 'Sección de bienvenida',
      child: SizedBox(
        height: size.height,
        width: double.infinity,
        child: Stack(
          children: [
            // Background Images - Corrected order: Positioned must be direct child of Stack
            Positioned.fill(
              child: ExcludeSemantics(
                child: PageView.builder(
                  controller: _pageController,
                  itemCount: _images.length,
                  onPageChanged: (index) {
                    setState(() => _currentPage = index);
                    _startTimer();
                  },
                  itemBuilder: (context, index) {
                    return Stack(
                      fit: StackFit.expand,
                      children: [
                        Image.network(_images[index], fit: BoxFit.cover),
                        Container(
                          color: AppColors.primary.withValues(alpha: 0.45),
                        ),
                      ],
                    );
                  },
                ),
              ),
            ),

            // Content Layer
            Center(
              child: SingleChildScrollView(
                padding:
                    const EdgeInsets.symmetric(horizontal: 24, vertical: 120),
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 1000),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      // Glass Card
                      ClipRRect(
                        borderRadius: BorderRadius.circular(40),
                        child: BackdropFilter(
                          filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
                          child: Container(
                            padding: EdgeInsets.symmetric(
                              horizontal: isMobile ? 32 : 64,
                              vertical: (isMobile || isShort) ? 32 : 56,
                            ),
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.08),
                              borderRadius: BorderRadius.circular(40),
                              border: Border.all(
                                color: Colors.white.withValues(alpha: 0.2),
                                width: 1.5,
                              ),
                            ),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Semantics(
                                  label: 'Logotipo de Logopedia Castelo',
                                  child: LogoWidget(
                                    size: isMobile ? 160 : 220,
                                    variant: LogoVariant.noLogo,
                                    color: Colors.white,
                                  ),
                                ),
                                SizedBox(
                                  height: (isMobile || isShort) ? 24 : 40,
                                ),
                                Semantics(
                                  header: true,
                                  child: Text(
                                    AppStrings.heroTagline.toUpperCase(),
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: isMobile ? 18 : 24,
                                      letterSpacing: 4.0,
                                      fontWeight: FontWeight.w300,
                                      height: 1.4,
                                    ),
                                  ),
                                ),
                                const SizedBox(height: 24),
                                Semantics(
                                  label:
                                      'Valores principales: ${AppStrings.heroKeywords}',
                                  child: Container(
                                    padding: const EdgeInsets.symmetric(
                                      horizontal: 16,
                                      vertical: 8,
                                    ),
                                    decoration: BoxDecoration(
                                      border: Border.symmetric(
                                        horizontal: BorderSide(
                                          color: Colors.white.withValues(
                                            alpha: 0.3,
                                          ),
                                        ),
                                      ),
                                    ),
                                    child: Text(
                                      AppStrings.heroKeywords,
                                      style: TextStyle(
                                        color: AppColors.secondary.withValues(
                                          alpha: 0.9,
                                        ),
                                        fontSize: isMobile ? 12 : 14,
                                        letterSpacing: 2.5,
                                        fontWeight: FontWeight.w400,
                                      ),
                                    ),
                                  ),
                                ),
                                SizedBox(
                                  height: (isMobile || isShort) ? 32 : 48,
                                ),
                                Semantics(
                                  button: true,
                                  label:
                                      'Haga clic para descubrir más sobre nuestros servicios',
                                  child: _AnimatedHeroButton(
                                    onPressed: () {
                                      Navigator.of(context).push(
                                        MaterialPageRoute(
                                          builder: (context) =>
                                              const ComingSoonScreen(),
                                        ),
                                      );
                                    },
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),

            // Navigation Indicators
            Positioned(
              bottom: 40,
              left: 0,
              right: 0,
              child: ExcludeSemantics(
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: List.generate(_images.length, (index) {
                        return AnimatedContainer(
                          duration: const Duration(milliseconds: 500),
                          margin: const EdgeInsets.symmetric(horizontal: 6),
                          width: _currentPage == index ? 32 : 8,
                          height: 4,
                          decoration: BoxDecoration(
                            color: _currentPage == index
                                ? AppColors.secondary
                                : Colors.white.withValues(alpha: 0.3),
                            borderRadius: BorderRadius.circular(2),
                          ),
                        );
                      }),
                    ),
                    const SizedBox(height: 32),
                    FadeTransition(
                      opacity: _scrollIconController,
                      child: const Column(
                        children: [
                          Icon(
                            Icons.keyboard_arrow_down_rounded,
                            color: Colors.white70,
                            size: 32,
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _AnimatedHeroButton extends StatefulWidget {
  final VoidCallback onPressed;
  const _AnimatedHeroButton({required this.onPressed});

  @override
  State<_AnimatedHeroButton> createState() => _AnimatedHeroButtonState();
}

class _AnimatedHeroButtonState extends State<_AnimatedHeroButton> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: AnimatedScale(
        scale: _isHovered ? 1.05 : 1.0,
        duration: const Duration(milliseconds: 200),
        child: ElevatedButton(
          onPressed: widget.onPressed,
          style: ElevatedButton.styleFrom(
            backgroundColor: _isHovered ? Colors.white : AppColors.secondary,
            foregroundColor: AppColors.primary,
            padding: const EdgeInsets.symmetric(horizontal: 48, vertical: 24),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(100),
            ),
            elevation: _isHovered ? 20 : 0,
            shadowColor: AppColors.primary.withValues(alpha: 0.4),
          ),
          child: const Text(
            'DESCUBRIR MÁS',
            style: TextStyle(
              fontWeight: FontWeight.w800,
              letterSpacing: 2.0,
              fontSize: 16,
            ),
          ),
        ),
      ),
    );
  }
}
